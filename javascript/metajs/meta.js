/**
 * 自适应开发
 * 固定 640px; 的宽度，viewport 640px 定宽，设计稿也是按照 640px 切。
 *
 * 让浏览器去缩放
 * 既然是缩放，那么就会失真，这是由于浏览器的自身渲染导致的。
 *
 * 参考：http://segmentfault.com/q/1010000002551392/a-1020000002551691
 *
 * 评价： 简单，粗暴，和pc页面一样的写，全是绝对定位。
 *
 */
var meta = {};
meta.baseWidth = 640;
meta._width = parseInt(window.screen.width);
meta.scale = meta._width / meta.baseWidth;
meta.ua = navigator.userAgent.toLowerCase();
meta.result = /android (\d+\.\d+)/.exec(meta.ua);
if (meta.result) {
  meta.version = parseFloat(meta.result[1]);
  if (meta.version > 2.3) {
    document.write('<meta name="viewport" content="width=640, minimum-scale = ' + meta.scale + ', maximum-scale = ' + meta.scale + ', target-densitydpi=device-dpi">');
  } else {
    document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
  }
} else {
  document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
