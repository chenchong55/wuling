function openImage(e){openImageFlag="1",photoBrowser.open({images:imgPathArray,activeIndex:e,bgColor:"#000"},function(e,o){e?"click"==e.eventType&&(photoBrowser.close(),openImageFlag="0"):alert("打开图片出错："+JSON.stringify(o))})}function Back(){"1"==openImageFlag?(photoBrowser.close(),openImageFlag="0"):api.closeWin()}var photoBrowser,imgPathArray=[],openImageFlag;apiready=function(){api.parseTapmode(),photoBrowser=api.require("photoBrowser"),"android"==api.systemType&&api.addEventListener({name:"keyback"},function(){Back()})};