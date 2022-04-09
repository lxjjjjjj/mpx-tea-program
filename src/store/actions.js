import request from '../api/request'
import * as apis from '../api/index'
import state from './state'
import mpx from '@mpxjs/core'
export function getHomeList(context, params){
    request({
        url:apis.getHomeListAPI,
        params
    }).then(res=>{
        if(res.code){
            console.log('获取首页数据失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res?.data?.frontPageList && context.commit('setHomeList',res.data.frontPageList)
            res?.data?.frontVersion && context.commit('setFrontVersion',res.data.frontVersion)
        }
    }).catch(err=>{
        console.log('获取首页数据失败',err)
    })
}
export function Login(context, params){
    request({
        url:apis.loginAPI,
        params
    }).then(res=>{
        if(res.code){
            console.log('登陆失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '登陆失败',
                icon: 'error',
                duration: 2000
            })
        }
    }).catch(err=>{
        console.log('登陆失败',err)
        mpx.showToast({
            title: '登陆失败',
            icon: 'error',
            duration: 2000
        })
    })
}
export function fillUserPhone(context, params){
    request({
        url: apis.fillUserPhoneAPI,
        params
    }).then(res=>{
        if(res.code){
            console.log('获取手机号失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }
    }).catch(err=>{
        console.log('获取手机号失败',JSON.stringify(err))
    })
}
export function getUserInfo(context, params){
    request({
        url: apis.userInfoAPI,
        params
    }).then(res=>{
        if(res.code){
            console.log('获取用户信息失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && context.commit('setUserInfo', res.data)
        }
    }).catch(err=>{
        console.log('获取用户信息失败',JSON.stringify(err))
    })
}

export function getUserNFTAll(context, params){
    request({
        url: apis.userNFTAllAPI,
        params
    }).then(res => {
        if(res.code){
            console.log('获取用户所有NFT失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && context.commit('setUserNFTAll', res.data)
        }
    }).catch(err=>{
        console.log('获取用户所有NFT失败',JSON.stringify(err))
    })
}

export function getUserCreationAll(context,params){
    request({
        url: apis.userCreationAPI,
        params
    }).then(res => {
        if(res.code){
            console.log('获取用户创作次数失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && context.commit('setUserCreateTimes', res.data)
        }
    }).catch(err=>{
        console.log('获取用户创作次数失败',JSON.stringify(err))
    })
}

export function getNFTById(context,params){
    request({
        url: apis.getNftByIdAPI + `/${params.id}`,
    }).then(res => {
        if(res.code){
            console.log('通过id获取用户NFT失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && context.commit('setNFTByIdInfo', res.data)
        }
    }).catch(err=>{
        console.log('通过id获取用户NFT失败',JSON.stringify(err))
    })
}

export function getUserCoupons(context,params){
    request({
        url: apis.getUserCouponsAPI,
        params,
        method:'POST'
    }).then(res => {
        if(res.code){
            console.log('获取用户优惠券失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            if(res?.data?.list?.length){
                context.commit('setUserCoupons', context.state.userCoupons.concat(res.data.list))
                context.commit('setCouponPagination', {
                    pageNum: res?.data?.pageNum,
                    pageSize: res?.data?.pageSize,
                    pages: res?.data?.pages,
                    total: res?.data?.total
                })
            }
        }
    }).catch(err=>{
        console.log('获取用户优惠券失败',JSON.stringify(err))
    })
}

export function addUserAddress(context,params){
    request({
        url: apis.addUserAddressAPI,
        params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('新增地址失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            mpx.showToast({
                title: '新建地址成功',
                icon: 'success',
                duration: 2000
            })  
        }
    }).catch(err=>{
        console.log('新增地址失败',JSON.stringify(err))
    })
}

export function getNFTMaterial(context,params){
    request({
        url: apis.getNFTMaterialAPI,
        params
    }).then(res => {
        if(res.code){
            console.log('获取NFT素材失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            const materialNameMap = res?.data?.map(item => {
                return item.name
            })
            res.data && context.commit("setNFTMaterial", res.data)
            res.data && context.commit("setNFTTab", materialNameMap)  
        }
    }).catch(err=>{
        console.log('获取NFT素材失败',JSON.stringify(err))
    })
}

export function NFTGenerate(context, params){
    console.log('params',params)
    request({
        url:apis.NFTGenerateAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('铸造NFT失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            mpx.showToast({
                title: '提交铸造nft成功',
                icon: 'success',
                duration: 2000
            })
        }
    }).catch(err=>{
        console.log('铸造NFT失败',JSON.stringify(err))
    })
}

export function getDisplayData(context, params){
    request({
        url:apis.getDisplayAPI,
        params:params
    }).then(res => {
        if(res.code){
            console.log('获取展览馆数据失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            if(res?.data?.items?.length){
                context.commit('setDisplayData', context.state.displayData.concat(res.data.items))
                context.commit('setDisplayPagination', res.data.pagination)
            }
        }
    }).catch(err=>{
        console.log('获取展览馆数据失败',JSON.stringify(err))
    })
}

export function userAuth(context, params){
    request({
        url:apis.userAuthAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('实名认证失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '实名认证失败',
                icon: 'error',
                duration: 2000
            })
        }else{
            context.commit('setAuth', true)
        }
    }).catch(err => {
        console.log('实名认证失败',JSON.stringify(err))
        mpx.showToast({
            title: '实名认证失败',
            icon: 'error',
            duration: 2000
        })
    })
}


export function phoneValidate(context, params){
    // phone参数
    request({
        url:apis.phoneValidateAPI,
        params:params,
    }).then(res => {
        if(res.code){
            console.log('手机号已经注册过了',JSON.stringify(res.msg))
            mpx.showToast({
                title: JSON.stringify(res.msg),
                icon: 'error',
                duration: 2000
            })
        }else{
            context.commit('setPhoneIsValidate', true)
        }
    }).catch(err => {
        console.log('手机号已经注册过了',JSON.stringify(err))
        mpx.showToast({
            title: '手机号已经注册过了',
            icon: 'error',
            duration: 2000
        })
    })
}

export function sendAuthSms(context, params){
    request({
        url:apis.sendAuthSmsAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('发送验证码失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '发送验证码失败，请重新发送',
                icon: 'error',
                duration: 2000
            })
        }
    }).catch(err => {
        console.log('发送验证码失败',JSON.stringify(err))
        mpx.showToast({
            title: '发送验证码失败，请重新发送',
            icon: 'error',
            duration: 2000
        })
    })
}

export function getAddresssList(context, params){
    request({
        url:apis.addressListAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('获取用户地址列表失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '获取地址列表失败',
                icon: 'error',
                duration: 1000
            })
        }else{
            res.data && context.commit('setAddressList',res.data)
        }
    }).catch(err => {
        console.log('获取用户地址列表失败',JSON.stringify(err))
        mpx.showToast({
            title: '获取地址列表失败',
            icon: 'error',
            duration: 1000
        })
    })
}

export function getAllArea(context, params){
    request({
        url:apis.getAllAreaAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('获取城市字典失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && wx.setStorageSync('area',res.data)
        }
    }).catch(err => {
        console.log('获取城市字典失败',JSON.stringify(err))
    })
}

export function getUserAddrList(context, params){
    request({
        url:apis.getUserAddrListAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('获取用户收件地址失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            if(res?.data?.list?.length){
                context.commit('setAddrList',context.state.addrList.concat(res.data.list))
                context.commit('setAddrPagination',{
                    pageNum:res.data.pageNum,
                    pageSize:res.data.pageSize,
                    pages:res.data.pages,
                    total:res.data.total
                })
            }
        }
    }).catch(err => {
        console.log('获取用户收件地址失败',JSON.stringify(err))
    })
}

export function getUserAddrById(context, params){
    request({
        url:apis.getUserAddrByIdAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('获取用户详细收件地址失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            res.data && context.commit('setUserAddrById',res.data)
        }
    }).catch(err => {
        console.log('获取用户详细收件地址失败',JSON.stringify(err))
    })
}

export function updateUserAddrById(context, params){
    request({
        url:apis.updateUserAddrAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(res.code){
            console.log('更新用户详细收件地址失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: res.msg,
                icon: 'error',
                duration: 2000
            })
        }else{
            mpx.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 1000
            })
            mpx.navigateBack({
                delta:1
            })
        }
    }).catch(err => {
        console.log('更新用户详细收件地址失败',JSON.stringify(err))
    })
}