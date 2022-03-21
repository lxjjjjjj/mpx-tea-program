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
                resolve(res.data.data)
            },
            fail (reason) {
                reject(reason)
            }
        })
    })
}