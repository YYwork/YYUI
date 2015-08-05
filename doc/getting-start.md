# DOC

## getting-start

### how to use mixin

#### 引入（只需引入一次）

```
  @import "YYUI";
```

#### 使用方法

``` 
  YY-xxx($param1: param1, $param2: param2, ...);
```

1. 使用默认

```
  .xx {
    @import "YY-xxx()";
  }
```

2. 修改参数

全部修改

```
  .xx {
    @import "YY-xxx('param1', 'param2', ...)";
  }
```

部分修改

```
  .xx {
    @import "YY-xxx($param1: 'param2')";
  }
```

## reset

```
  @import "YYUI-reset";
```

## print

```
  @import "YYUI-print";
```

## front

在代码中添加 [YYUI mixin](./front.md)

```
  YY-body-front($front, $serif: sans-serif)
  // $default-front: '"Microsoft YaHei", "Segoe UI", "Lucida Grande", Helvetica, Arial, FreeSans, Arimo, "Droid Sans", "wenquanyi micro hei", "Hiragino Sans GB", "Hiragino Sans GB W3", Arial';
  // $serif: sans-serif or serif;
```

如果要使用[ YYUI 默认 Front ](./front.md) 

```
  @import "YYUI-front";
```

## layout

