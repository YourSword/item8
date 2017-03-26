//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    // 轮播
    images: [
      '../../image/1.jpg',
      '../../image/2.jpg',
      '../../image/3.jpg',
      '../../image/4.jpg',
      '../../image/5.jpg',
      '../../image/6.jpg',
      '../../image/2.jpg'
    ],
    indicatorDots: true,    //显示面板指示点 
    autoplay: true,    //自动切换
    interval:5000,    //自动切换时间间隔
    duration:1000,    //滑动动画时长
    // nav
    navs: [
      {
        image: '../../image/x.jpg',
        text: '西藏'
      }, {
        image: '../../image/x.jpg',
        text: '新疆'
      }, {
        image: '../../image/x.jpg',
        text: '河南'
      }, {
        image: '../../image/x.jpg',
        text: '西安'
      }
    ],
    // item
    items: [
      {image: '../../image/w1.jpg'},
      {image: '../../image/w2.jpg'},
      {image: '../../image/w3.jpg'},
      {image: '../../image/w4.jpg'},
      {image: '../../image/w1.jpg'},
      {image: '../../image/w2.jpg'},
      {image: '../../image/w3.jpg'},
      {image: '../../image/w4.jpg'}
    ]
  },

  
  onLoad: function() {
    console.log( 'onLoad' )
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo( function( userInfo ) {
      //更新数据
      that.setData( {
        userInfo: userInfo
      })
    })
  }
})
