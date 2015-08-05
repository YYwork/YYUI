[susy](http://susydocs.oddbird.net/en/latest/)
---

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
      columns: 4,
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

### [Shorthand 速记](http://susydocs.oddbird.net/en/latest/shorthand/)

  ```
    // Establish an 80em container
    @include container(80em);

    // Span 3 of 12 columns
    @include span(3 of 12);

    // Setup the 960 Grid System
    @include layout(12 (60px 20px) split static);

    // Span 3 isolated columns in a complex, asymmetrical grid, without gutters
    @include span(isolate 3 at 2 of (1 2 3 4 3 2 1) no-gutters);
  ```

  
- `Shorthand: $span $grid $keywords;`

  ```
    // 12-column grid
    $grid: 12;

    // 12-column grid with 1/3 gutter ratio
    $grid: 12 1/3;

    // 12-column grid with 60px columns and 10px gutters
    $grid: 12 (60px 10px);

    // asymmetrical grid with .25 gutter ratio
    $grid: (1 2 3 2 1) .25;
  ```

- Layout

  ```
    // grid: (columns: 4, gutters: 1/4, column-width: 4em);
    // keywords: (math: fluid, gutter-position: inside-static, flow: rtl);
    $small: 4 (4em 1em) fluid inside-static rtl;
  ```

- Span

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

