var photoBrowser;
var imgPathArray = [];
var openImageFlag;
apiready = function() {
  api.parseTapmode();
  photoBrowser = api.require("photoBrowser");
  if (api.systemType == "android") {
    api.addEventListener({ //监听返回键事件，适用于Android
      name: "keyback"
    }, function(ret, err) {
      Back();
    });
  }
};

function openImage(imgIndex) {
  openImageFlag = "1"; //打开图片标志，1表示已打开
  photoBrowser.open({
    images: imgPathArray,
    activeIndex: imgIndex,
    bgColor: "#000"
  }, function(ret, err) {
    if (ret) {
      if (ret.eventType == "click") { //单击图片
        photoBrowser.close(); //关闭图片浏览器
        openImageFlag = "0"; //打开图片标志，0表示已关闭
      }
    } else {
      alert("打开图片出错：" + JSON.stringify(err));
    }
  });
}
//android平台下点击返回按钮
function Back() {
  if (openImageFlag == "1") { //打开图片
    photoBrowser.close(); //关闭图片浏览器
    openImageFlag = "0"; //打开图片标志，0表示已关闭
  } else {
    api.closeWin();
  }
}
