import mpx from '@mpxjs/core'
import LoginPage from '../pages/login?resolve'
import oopsPage from '../pages/oops?resolve'
import store from '../store'
export default ({url,params,method="GET"}) => {
    return new Promise((resolve,reject)=>{
        // wx.showLoading({
        //     title: '加载中',
        //     mask: true
        // })
        wx.request({
            url: url,
            data: params,
            method: method,
            header: {
                'content-type': 'application/json',
                'authorization':`${wx.getStorageSync('token')}`
            },
            success (res) {
                // wx.hideLoading()
                if (res.statusCode === 403) {
                    mpx.navigateTo({
                        url: LoginPage
                    })
                } else if(String(res.statusCode).startsWith('5')){
                    mpx.navigateTo({
                        url: oopsPage
                    })
                } else {
                    resolve(res.data)
                }
            },
            fail (reason) {
                console.log('reason',reason)
                // wx.hideLoading()
                mpx.navigateTo({
                    url: LoginPage
                })
                reject(reason)
            }
        })
    })
}