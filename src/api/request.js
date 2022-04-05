import mpx from '@mpxjs/core'
import LoginPage from '../pages/login?resolve'
export default ({url,params,method="GET"}) => {
    return new Promise((resolve,reject)=>{
        wx.request({
            url: url,
            data: params,
            method: method,
            header: {
                'content-type': 'application/json'
            },
            success (res) {
                if (res.statusCode === 403) {
                    mpx.navigateTo({
                        url:LoginPage
                    })
                } else {
                    resolve(res.data.data)
                }
            },
            fail (reason) {
                reject(reason)
            }
        })
    })
}