import request from '../api/request'
import * as apis from '../api/index'
import state from './state'
import mpx from '@mpxjs/core'
export function getHomeList(context, params){
    request({
        url:apis.getHomeListAPI,
        params
    }).then(res=>{
        if(Number(res.code)){
            console.log('获取首页数据失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            let frontPageList = []
            res?.data?.frontPageList && res.data.frontPageList.forEach(item => {
                if(!frontPageList[Number(item.type)-1]) {
                    frontPageList[Number(item.type)-1] = []
                } else {
                    frontPageList[Number(item.type)-1].push(item)
                }
            })
            res?.data?.frontPageList && context.commit('setHomeList',frontPageList)
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
        if(Number(res.code)){
            console.log('登陆失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '登陆失败',
                icon: 'error',
                duration: 2000
            })
        }else{
            wx.setStorageSync('token',res.data.token)
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
        if(Number(res.code)){
            console.log('获取手机号失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
        if(Number(res.code)){
            console.log('获取用户信息失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            res.data && context.commit('setUserInfo', res.data)
            res.data && context.commit('setIdentityType', res.data.identityType) 
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
        if(Number(res.code)){
            console.log('获取用户所有NFT失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
        if(Number(res.code)){
            console.log('获取用户创作次数失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
        if(Number(res.code)){
            console.log('通过id获取用户NFT失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            res.data && context.commit('setNFTByIdInfo', res.data)
        }
    }).catch(err=>{
        console.log('通过id获取用户NFT失败',JSON.stringify(err))
    })
}

export function getUserCoupons(context,params){
    const isNew = params.isNew
    delete params.isNew
    request({
        url: apis.getUserCouponsAPI,
        params,
        method:'POST'
    }).then(res => {
        if(Number(res.code)){
            console.log('获取用户优惠券失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            if(res?.data?.list?.length){
                if(isNew){
                    context.commit('setUserCoupons', res.data.list)
                }else{
                    context.commit('setUserCoupons', context.state.userCoupons.concat(res.data.list))
                }
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
        if(Number(res.code)){
            console.log('新增地址失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            mpx.showToast({
                title: '新建成功',
                icon: 'success',
                duration: 2000
            })
            mpx.navigateBack({
                delta:1
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
        if(Number(res.code)){
            console.log('获取NFT素材失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
        if(Number(res.code)){
            console.log('铸造NFT失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            mpx.showToast({
                title: '铸造成功',
                icon: 'success',
                duration: 2000
            })
            mpx.navigateBack({
                delta:1
            })
        }
    }).catch(err=>{
        console.log('铸造NFT失败',JSON.stringify(err))
    })
}

export function getDisplayData(context, params){
    const isNew = params.isNew
    delete params.isNew
    request({
        url:apis.getDisplayAPI,
        params:params
    }).then(res => {
        if(Number(res.code)){
            console.log('获取展览馆数据失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            if(res?.data?.items?.length){
                if(isNew){
                    context.commit('setDisplayData', res.data.items)
                }else{
                    context.commit('setDisplayData', context.state.displayData.concat(res.data.items))
                }
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
        if(Number(res.code)){
            console.log('实名认证失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '认证失败',
                icon: 'error',
                duration: 2000
            })
        }else{
            context.commit('setAuth', true)
            mpx.showToast({
                title: '认证成功',
                icon: 'error',
                duration: 2000
            })
            mpx.navigateBack({
                delta:1
            })
        }
    }).catch(err => {
        console.log('实名认证失败',JSON.stringify(err))
        mpx.showToast({
            title: '认证失败',
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
        if(Number(res.code)){
            console.log('手机号已经注册过了',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            context.commit('setPhoneIsValidate', true)
        }
    }).catch(err => {
        console.log('手机号已经注册过了',JSON.stringify(err))
        mpx.showToast({
            title: '已经注册',
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
        if(Number(res.code)){
            console.log('发送验证码失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '发送失败',
                icon: 'error',
                duration: 2000
            })
        }
    }).catch(err => {
        console.log('发送验证码失败',JSON.stringify(err))
        mpx.showToast({
            title: '发送失败',
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
        if(Number(res.code)){
            console.log('获取用户地址列表失败',JSON.stringify(res.msg))
            mpx.showToast({
                title: '获取失败',
                icon: 'error',
                duration: 1000
            })
        }else{
            res.data && context.commit('setAddressList',res.data)
        }
    }).catch(err => {
        console.log('获取用户地址列表失败',JSON.stringify(err))
        mpx.showToast({
            title: '获取失败',
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
        if(Number(res.code)){
            console.log('获取城市字典失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            if (res.data) {
                wx.setStorageSync('area',res.data)
                context.commit('setAllArea',res.data)
            }
        }
    }).catch(err => {
        console.log('获取城市字典失败',JSON.stringify(err))
    })
}

export function getUserAddrList(context, params){
    const isNew = params.isNew
    delete params.isNew
    request({
        url:apis.getUserAddrListAPI,
        params:params,
        method:"POST"
    }).then(res => {
        if(Number(res.code)){
            console.log('获取用户收件地址失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            if(res?.data?.list?.length){
                if(isNew){
                    context.commit('setAddrList',res.data.list)
                }else{
                    context.commit('setAddrList',context.state.addrList.concat(res.data.list))
                }
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
        if(Number(res.code)){
            console.log('获取用户详细收件地址失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
        if(Number(res.code)){
            console.log('更新用户详细收件地址失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
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
 
export function getMyNftTradeList(context, params){
    request({
        url:`https://wx.yimutea.com/api/v1/nft/${params.id}/trade/list`
    }).then(res => {
        if(Number(res.code)){
            console.log('获取用户nft交易记录失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            mpx.showToast({
                title: '获取成功',
                icon: 'success',
                duration: 1000
            })
            context.commit('setMyNftTradeList',res.data)
        }
    }).catch(err => {
        console.log('获取用户nft交易记录失败',JSON.stringify(err))
    })
}

export function editPersonInfo(context, params){
    request({
        url:apis.editPersonInfoAPI,
        params:params,
        method:'POST'
    }).then(res => {
        if(Number(res.code)){
            console.log('更新用户信息失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            mpx.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 1000
            })
            context.commit('setUserInfo',Object.assign(context.state.userInfo,{
                logo : params.logo,
                nickName : params.nickName,
                birthDate : params.birthDate,
                sex : params.sex,
                email : params.email
            }))
            mpx.navigateBack({
                delta:1
            })
        }
    }).catch(err => {
        console.log('更新用户信息失败',JSON.stringify(err))
    })
}

export function fillUserInfo(context, params){
    request({
        url:apis.fillUserInfoAPI,
        params:params,
        method:'POST'
    }).then(res => {
        if(Number(res.code)){
            console.log('补充用户微信名和头像失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            mpx.showToast({
                title: '更新成功',
                icon: 'success',
                duration: 1000
            })
        }
    }).catch(err => {
        console.log('补充用户微信名和头像失败',JSON.stringify(err))
    })
}

export function getDisplayNFTById(context, params){
    request({
        url:`${apis.getDisplayNFTByIdAPI}/${params.id}`
    }).then(res => {
        if(Number(res.code)){
            console.log('获取nft详情失败',JSON.stringify(res.msg))
            wx.showModal({
                title:res.msg,
                showCancel:false
            })
        }else{
            context.commit('setDisplayNFT',res.data)
        }
    }).catch(err => {
        console.log('获取nft详情失败',JSON.stringify(err))
    })
}