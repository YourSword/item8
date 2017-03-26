Page({
  data: {
    title: '',
    items: [
    {"title":"好漂亮啊","imgs":["../../image/m1.jpg"],"id":302},
    {"title":"不知道","imgs":["../../image/m2.jpg"],"id":93},
    {"title":"这是哪里","imgs":["../../image/m3.jpg"],"id":69},
    {"title":"好漂亮啊","imgs":["../../image/m1.jpg"],"id":302},
    {"title":"不知道","imgs":["../../image/m2.jpg"],"id":93},
    {"title":"这是哪里","imgs":["../../image/m3.jpg"],"id":69},
    {"title":"好漂亮啊","imgs":["../../image/m1.jpg"],"id":302},
    {"title":"不知道","imgs":["../../image/m2.jpg"],"id":93},
    {"title":"这是哪里","imgs":["../../image/m3.jpg"],"id":69},
    {"title":"好漂亮啊","imgs":["../../image/m1.jpg"],"id":302},
    {"title":"不知道","imgs":["../../image/m2.jpg"],"id":93},
    {"title":"这是哪里","imgs":["../../image/m3.jpg"],"id":69}
    ]
  },
  //事件处理函数
  onLoad: function (options) {
    this.title = options.type || '列表'
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  },
})
