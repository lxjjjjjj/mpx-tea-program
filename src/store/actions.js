import request from '../api/request'
import * as apis from '../api/index'
import state from './state'
import mpx from '@mpxjs/core'
export function getHomeList(context, params){
    request({
        url:apis.getHomeListAPI,
        params
    }).then(res=>{
        context.commit('setHomeList',res.frontPageList)
        context.commit('setFrontVersion',res.frontVersion)
    }).catch(err=>{
        console.log('获取首页数据失败',err)
    })
}
export function Login(context, params){
    request({
        url:apis.loginAPI,
        params
    }).then(res=>{
        console.log('res',res)
    })
}
export function fillUserPhone(context, params){
    request({
        url: apis.fillUserPhoneAPI,
        params
    }).then(res=>{
        if(res.errno){
            console.log('获取手机号失败',JSON.stringify(err))
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
        if(res.errno){
            console.log('获取用户信息失败',JSON.stringify(res))
        }else{
            context.commit('setUserInfo', res)
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
        if(res.errno){
            console.log('获取用户所有NFT失败',JSON.stringify(res))
        }else{
            context.commit('setUserNFTAll', res)
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
        if(res.errno){
            console.log('获取用户创作次数失败',JSON.stringify(res))
        }else{
            context.commit('setUserCreateTimes', res)
        }
    }).catch(err=>{
        console.log('获取用户创作次数失败',JSON.stringify(err))
    })
}

export function getNFTById(context,params){
    request({
        url: apis.getNftByIdAPI + `/${params.id}`,
    }).then(res => {
        if(res.errno){
            console.log('通过id获取用户NFT失败',JSON.stringify(res))
        }else{
            context.commit('setNFTByIdInfo', res)
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
        if(res.errno){
            console.log('获取用户优惠券失败',JSON.stringify(res))
        }else{
            context.commit('setUserCoupons', res.list)
            context.commit('setCouponPagination', {
                pageNum: res.pageNum,
                pageSize: res.pageSize,
                pages: res.pages,
                total: res.total
            })
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
        if(res.errno){
            console.log('新增地址失败',JSON.stringify(res))
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
        if(res.errno){
            console.log('获取NFT素材失败',JSON.stringify(res))
        }else{
            const materialNameMap = res.map(item => {
                return item.name
            })
            context.commit("setNFTMaterial", res)
            context.commit("setNFTTab", materialNameMap)  
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
        if(res.errno){
            console.log('铸造NFT失败',JSON.stringify(res))
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
        if(res.errno){
            console.log('获取展览馆数据失败',JSON.stringify(res))
        }else{
            context.commit('setDisplayData', context.state.displayData.concat(res.items))
            context.commit('setDisplayPagination', res.pagination)
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
        if(res.errno){
            console.log('实名认证失败',JSON.stringify(res))
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
        if(res.errno){
            console.log('手机号已经注册过了',JSON.stringify(res))
            mpx.showToast({
                title: '手机号已经注册过了',
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
            console.log('发送验证码失败',JSON.stringify(res))
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
            console.log('获取用户地址列表失败',JSON.stringify(res))
            mpx.showToast({
                title: '获取地址列表失败',
                icon: 'error',
                duration: 1000
            })
        }else{
            context.commit('setAddressList',res)
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
            console.log('获取城市字典失败',JSON.stringify(res))
        }else{
            wx.setStorageSync('area',res)
        }
    }).catch(err => {
        console.log('获取城市字典失败',JSON.stringify(err))
    })
}