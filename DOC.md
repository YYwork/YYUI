DOC
---

## getting-started (开始)

    Install Ruby
    Install sass
  
  * [SASS](http://sass-lang.com/)
  * [Compass](http://compass-style.org/)

  ```
  $ gem update --system

  $ gem install compass

  $ compass create <myproject>

  $ compass install susy

  ```

## Overview (概览)

### CSS reset


  * [Normalize](https://github.com/necolas/normalize.css/)

  ```
    <link href="//cdn.bootcss.com/normalize/3.0.3/normalize.css" rel="stylesheet">
  ```

  
  `@import "normalize";`
  
### Cross-browser compatibility

  * [html5shiv -- 让 IE6-8 识别 HTML5 新的元素](https://github.com/aFarkas/html5shiv/tree/master/dist)
  * [Respond -- 让 IE6-8 支持 CSS3 Media Query](https://github.com/scottjehl/Respond/tree/master/dest)
  * [Selectivizr -- 让 IE6-8 支持 CSS3 伪类和属性选择器](https://github.com/keithclark/selectivizr)

  ```
    <!--[if lt IE 9]>
      <script src="//cdn.bootcss.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="//cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
      <script src="//cdn.bootcss.com/selectivizr/1.0.2/selectivizr-min.js"></script>
    <![endif]-->
  ```

## Layout (布局)
  
  * [susy](http://susy.oddbird.net/)

  `@import "susy";`


  ```
  $ compass install susy
  ```

  * [DOC susy](./doc/susy.md)


## Typography (排版)

