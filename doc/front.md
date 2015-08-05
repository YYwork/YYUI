#front

## 添加 mixin

```
YY-body-front($front, $serif: sans-serif)
```

```
  body {
    @import YY-body-front($front, $serif); 
  }
```

## 添加默认
```
body {
  font-family: "Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial, sans-serif;
}

/* 非衬线字体*/
.y-sans-serif 


/* 衬线字体*/
.y-serif 


/* 等宽字体*/
.y-monospace 


/* 反锯齿平滑渲染*/
.y-smoothing 


/* 浏览器的默认平滑字体*/
.y-no-smoothing 

```
