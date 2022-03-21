export function updateTabId (state, tabId = '') {
    state.currentTabId = tabId
  }
export function setHomeList (state,data){
  state.homeList = data.map(item => {
    const originalData = item
     return {
      swiperList:originalData,
      swiperCurrent:0
    }
  })
}
export function setFrontVersion (state,data){
  state.frontVersion = data
}
export function setAvatarUrl (state,data){
  state.avatarUrl = data
}
export function setNickName (state,data){
  state.nikeName = data
}
export function setPhoneNumberShow (state,data){
  state.getPhoneNumber = data
}
export function setSwitchTab (state,data){
  state.active_tab = data
}
export function setUserInfo (state,data){
  state.userInfo = data
}
export function setUserNFTAll (state,data){
  state.userNFTAll = data
}