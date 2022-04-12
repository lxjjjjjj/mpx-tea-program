export function updateTabId (state, tabId = '') {
    state.currentTabId = tabId
  }
export function setHomeList (state, data){
  state.homeList = data.map(item => {
    const originalData = item
     return {
      swiperList:originalData,
      swiperCurrent:0
    }
  })
}
export function setFrontVersion (state, data){
  state.frontVersion = data
}
export function setAvatarUrl (state, data){
  state.avatarUrl = data
}
export function setNickName (state, data){
  state.nikeName = data
}
export function setPhoneNumberShow (state, data){
  state.getPhoneNumber = data
}
export function setSwitchTab (state, data){
  state.active_tab = data
}
export function setUserInfo (state, data){
  state.userInfo = data
}
export function setUserNFTAll (state, data){
  state.userNFTAll = data
}
export function setUserCreateTimes (state, data){
  data.forEach(item=>{
    item.desc = Number(item.desc)
  })
  state.userCreateTimes = data
}
export function setNFTByIdInfo (state, data){
  state.nftInfo = data
}
export function setUserCoupons (state, data){
  state.userCoupons = data
}
export function setNFTMaterial (state, data){
  state.NFTMaterial = data
}
export function setNFTTab (state, data){
  state.NFTTab = data
}
export function setNFTUploadUUID (state, data){
  state.uuid = data
}
export function setDisplayData (state, data){
  state.displayData = data
}
export function setDisplayPagination (state, data){
  state.displayPagination = data
}
export function setCouponPagination (state, data){
  state.couponPagination = data
}
export function setAuth (state, data){
  state.auth = data
}
export function setPhoneIsValidate(state, data){
  state.phoneIsValidate = data
}
export function setAddressList(state, data){
  state.addressList = data
}
export function setAddrList(state, data){
  state.addrList = data
}
export function setAddrPagination(state, data){
  state.addrPagination = data
}
export function setUserAddrById(state, data){
  state.userIdAddress = data
}
export function setToken(state, data){
  state.token = data
}
export function setMyNftTradeList(state, data){
  state.myNftTradeList = data
}