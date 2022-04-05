export const host = "https://wx.yimutea.com"
//首页接口
export const getHomeListAPI = host + "/api/v1/frontPage/get"
//用户接口
export const loginAPI = host + "/api/v1/user/login"
//获取用户手机号
export const fillUserPhoneAPI = host + "/api/v1/user/fillUserPhone"
// 个人中心页面数据
export const userInfoAPI = host + "/api/v1/user/info"
// 用户藏品接口
export const userNFTAllAPI = host + "/api/v1/nft/all"
// 用户创作次数
export const userCreationAPI = host + "/api/v1/nft/creation/all"
// 根据id查询用户创作的某个nft
export const getNftByIdAPI = host + '/api/v1/nft'
// 获取用户所有优惠券
export const getUserCouponsAPI = host + '/api/v1/gift/getListByUserId?userId=1'
// 新建地址
export const addUserAddressAPI = host + '/api/v1/userAddress/add'
// 获取nft素材
export const getNFTMaterialAPI = host + '/api/v1/nft/material/all'
// 上传生成的nft图片
export const nftUploadAPI = host + '/api/v1/nft/upload'
// 铸造nft
export const NFTGenerateAPI = host + '/api/v1/nft/generate'
// 展览馆
export const getDisplayAPI = host + '/api/v1/nft/display/list'
// 实名认证
export const userAuthAPI = host + '/api/v1/user/auth'
// 实名认证获取手机验证码
export const sendAuthSmsAPI = host + '/api/v1/user/sendAuthSms'
// 电话号码校验
export const phoneValidateAPI = host + '/api/v1/user/phone/validate'
