[susy](http://susydocs.oddbird.net/en/latest/)
---
* [Susy 2.2 中文文档](http://www.w3cplus.com/preprocessor/susy-docs.html)

### QUICK START

将 Susy 导入到 Sass 文件：

```
  @import “susy”;
```

Susy 最基础的布局有两个简单的混合宏组成：

```
  // 建立一个布局上下文
  @include container;
  // 为元素设置布局效果 
  @include span(<width>);
```

 

### [Settings (全局设置)](http://susydocs.oddbird.net/en/latest/settings/)
  
  可以通过 [Sass Map](http://www.w3cplus.com/preprocessor/sass-maps.html) 或者 [shorthand syntax](http://susydocs.oddbird.net/en/latest/shorthand/) 来定义设置

  ```
    $susy: (
      columns: 12,
      gutters: 1/4,
      math: fluid,
      output: float,
      gutter-position: inside,
    );

    // or

    $shorthand: 12 1/4 fluid float inside;
  ```

##### Global Defaults
  ```
    $susy: (
      flow: ltr,
      math: fluid,
      output: float,
      gutter-position: after,
      container: auto,
      container-position: center,
      // 栅格数量
      columns: 4,
      // 栅格间距 
      gutters: .25,
      column-width: false,
      global-box-sizing: content-box,
      last-flow: to,
      debug: (
        image: hide,
        color: rgba(#66f, .25),
        output: background,
        toggle: top right,
      ),
      use-custom: (
        background-image: true,
        background-options: false,
        box-sizing: true,
        clearfix: false,
        rem: true,
      )
    );
  ```


  ```
    // keywords
    // All the keywords in Susy:
    $global-keywords: (
      container            : auto,
      math                 : static fluid,
      output               : isolate float,
      container-position   : left center right,
      flow                 : ltr rtl,
      gutter-position      : before after split inside inside-static,
      debug: (
        image              : show hide show-columns show-baseline,
        output             : background overlay,
      ),
    );

    $local-keywords: (
      box-sizing           : border-box content-box,
      edge                 : first alpha last omega,
      spread               : narrow wide wider,
      gutter-override      : no-gutters no-gutter,
      clear                : break nobreak,
      role                 : nest,
    );
  ```

### [Shorthand 简写](http://susydocs.oddbird.net/en/latest/shorthand/)

```
    // 创建一个 80em 宽的容器
  @include container(80em);

  // 使用 12 个纵列中的 3 个创建一个布局元素
  @include span(3 of 12);

  // 创建一个 960 栅格系统
  @include layout(12 (60px 20px) split static);

  // Span 3 isolated columns in a complex, asymmetrical grid, without gutters
  @include span(isolate 3 at 2 of (1 2 3 4 3 2 1) no-gutters);
```

  
- `Shorthand: $span $grid $keywords;`

span:一个布局元素可以使用任意长度。在某些情况下，如果值为无单位数字，意味着布局元素包裹的纵列数量。计算出的具体数值最终要根据所使用的函数和混合宏来判断。使用标准的 CSS TRBL 语法，在某些混合宏中甚至允许存在多个布局元素。

grid:由一个纵列参数和一个可以选的间距、纵列宽度参数。就像下面这样：

```
// 12 列栅格
$grid: 12;

// 12 列栅格以及三分之一栅格宽度的间距
$grid: 12 1/3;

// 12 列栅格，每个栅格 60px, 每个间距 10px
$grid: 12 (60px 10px);

// 不对称栅格，间距为一个基本栅格单位的四分之一
$grid: (1 2 3 2 1) .25;
```

keywords:使用 keywords 是最简单的方式了。大多数的参数都有简洁的关键字，而且无需顾虑关键字的顺序。相关的关键字包含在布局元素或栅格中都可以。（setting 里面的关键字）


#### function Or mixin

- Layout 将简写形式的配置转换为 map 形式。

```
/**
 * 语法格式: layout($layout, $clean)
 * $layout: <layout>
 * $clean: <boolean>
 */
```

  ```
  // function layout($layout)
    // 传给函数的参数
    $map: layout(auto 12 .25 inside fluid isolate);
    // 生成结果
    $map: (
      container: auto,
      columns: 12,
      gutters: .25,
      gutter-position: inside,
      math: fluid,
      output: isolate,
    );


    // 可以将一个 map 变量与一个缩写形式的配置合并：
    $map: layout(12 .25 inside);
    @include layout($map fluid no-gutters);

    // 或者用来合并两个 map 变量：

    $map1: 13 static;
    $map2: (6em 1em) inside;
    @include layout($map1 $map2);

  // mixin layout($layout, $clean)

  // 默认情况下，这些新的配置参数会添加到既有的全局配置中。使用 $clean 参数可以从零开始创建新的配置。

  @include layout(12 1/4 inside-static);

  ```

- With-Layout 为局部代码设置临时配置。

```
/**
 * 语法格式: with-layout($layout, $clean) {@content}
 * $layout: <layout>
 * $clean: <boolean>
 * @ontent: Sass content block
 */
```

```
@include with-layout(8 static) {
  // 临时配置生效
}
// 离开上段代码后，全局配置恢复效用
```

- Susy-Get 使用 susy-get 函数，可以随时获取布局配置参数：

```
/**
 * 语法格式: susy-get($key, $layout)
 * $key: Setting name
 * $layout: <layout>
 */
```

```
$large: layout(80em 24 1/4 inside);
$large-container: susy-get(container, $large);
```

获取类似 debug/image 的嵌套配置，需要使用列表传递完整路径给 $key 参数

`$debug-image: susy-get(debug image);`


- Span 

Susy 大多数的函数和混合宏都是用来计算或设置宽度和布局元素的。

  ```
    // Pattern:
    $span: $span at $location of $layout;

    // span: 3;
    // location: 4;
    // layout: (columns: 12, gutters: .25, math: fluid)
    $span: 3 at 4 of 12 .25 fluid;

    // Only $span is required in most cases
    $span: 30%;
  ```

其中，at 标志位于定位之前（除非定位是一个关键字）；位于 of 标识之后的都会被视为栅格排列的一部分。

有一些混合宏可以接受 CSS TRBL 模式的参数或者其他专有术语，用来设置多个布局元素。这些都会在函数/混合宏部分有记录。


### Getting Started

设置自己需要的`$susy` 变量。

  ```
    $susy: (
      columns: 12,
      gutters: .25,
      gutter-position: inside,
    )
  ```


`Susy` 布局 由以下两部分 `mixins` 构成

  ```
    @include container; // 创建布局环境
    @include span(<width>); // 设置布局元素
  ```

例:

  ```
    body { @include container(80em); }
    nav { @include span(25%); }
  ```

可以使用 `span` 来计算各元素的宽度

  ```
    nav { @include span(3 of 12); }
  ```

