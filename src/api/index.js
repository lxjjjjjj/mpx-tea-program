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
export const getUserCouponsAPI = host + '/api/v1/gift/getListByUserId'
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
// 用户收货地址列表
export const addressListAPI = host + '/api/v1/userAddress/list'
// 获取城市字典
export const getAllAreaAPI = host + '/api/v1/area/getAll'
// 获取地址列表
export const getUserAddrListAPI = host + '/api/v1/userAddress/list'
// 根据id跳转到地址详情
export const getUserAddrByIdAPI = host + '/api/v1/userAddress/getById'
// 修改已有地址
export const updateUserAddrAPI = host + '/api/v1/userAddress/update'
// 修改个人信息
export const editPersonInfoAPI = host + '/api/v1/user/updateUserInfo'
// 新增头像和微信名接口
export const fillUserInfoAPI = host + '/api/v1/user/fillUserInfo'