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
            context.commit('setUserNFTAll', res.nftList)
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
        url: apis.getNftByIdAPI,
        params
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
        params
    }).then(res => {
        if(res.errno){
            console.log('获取用户优惠券失败',JSON.stringify(res))
        }else{
            context.commit('setUserCoupons', res)
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