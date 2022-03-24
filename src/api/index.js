export const host = "https://wx.yimutea.com"
//首页接口
export const getHomeListAPI = host + "/api/v1/frontPage/get"
//用户接口
export const loginAPI = host + "/api/v1/user/login"
export const fillUserPhoneAPI = host + "/api/v1/user/fillUserPhone"
export const userInfoAPI = host + "/api/v1/user/info"
// 用户藏品接口
export const userNFTAllAPI = host + "/api/v1/nft/all"
// 用户创作次数
export const userCreationAPI = host + "/api/v1/nft/creation/all"
// 根据id查询用户创作的某个nft
export const getNftByIdAPI = host + '/api/v1/nft'
// 获取用户所有优惠券
export const getUserCouponsAPI = host + '/api/v1/user/coupons'