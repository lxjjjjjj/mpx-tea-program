const state = {
    tabBarList: [
        {
            text:'首页',
            text_active:"首页",
            icon:'https://p.qqan.com/up/2021-1/202118103317306.jpg',
            icon_active:"https://p.qqan.com/up/2021-1/202118103317306.jpg",
            link:'./index',
            id:1,
            text_active_color:'red',
            text_color:'green'
        },
        {
            text:'藏品',
            text_active:"藏品",
            icon:'https://p.qqan.com/up/2021-1/202118103317306.jpg',
            icon_active:"https://p.qqan.com/up/2021-1/202118103317306.jpg",
            link:'./collect',
            id:2,
            text_active_color:'red',
            text_color:'green'
        },
        {
            text:'DIY',
            text_active:"DIY",
            icon:'https://p.qqan.com/up/2021-1/202118103317306.jpg',
            icon_active:"https://p.qqan.com/up/2021-1/202118103317306.jpg",
            link:'./diy',
            id:3,
            text_active_color:'red',
            text_color:'green'
        },
    ],
    currentTabId:1
}
  
export default state