fis.match('*.js', {
  useHash: false, // default is true
  // 指定压缩插件 fis-optimizer-uglify-js
  optimizer: fis.plugin('uglify-js', {
    // option of uglify-js
  })
});

fis.match('*.css', {
  useHash: false, //default is `true`
  // compress css invoke fis-optimizer-clean-css
  optimizer: fis.plugin('clean-css', {
    // option of clean-css
  })
});

fis.match('*.html', {
  //invoke fis-optimizer-html-minifier
  optimizer: fis.plugin('html-minifier')
});

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor')
});
