# 数据类型

python 作为一门动态语言，最具特色的就是其变量可以随时变更为任意一种数据类型。

在使用过程中，一般都是基于 puthon 原生的基本数据类型 int str list dict 等。

但是也有的库会因为特殊的需求开发出了如 MultiIndex，datetime，DataFrame 等新的数据类型和数据容器。

苦于有些数据类型不常见总是忘掉，我在这里就做一个整理，与君共勉。

## python 原生

###  基本数据类型

#### int 整型

1. 整数

#### float 浮点数


#### str 字符串

1. 可用单双引号 `''` `""` 表示不同的意思
1. 用 `\n` `\'`等表示转义 
2. `r''`表示默认不转义
3. `'%s'%xx` = `'{}'.format(xx)`   #%d 整数 %s 字符串 %f 浮点数
4. `'''...'''`中间可以输入多行内容 
5. 可重新编码，默认 Unicode ，如 str.encode('utf-8')  


#### bool 布尔值

1. 计算优先级 not -> and -> or

####  None 空值

就是啥都没有，不是 0，也不能做判断

###  data container 原生的数据容器

#### list

```py
l = [1,2,4,5,6,7]
col = l.index('3') #找元素的位置

```

#### tuple

其实用的还蛮少，跟 list 类似。

1. 定义好后就不能改变，主要应该是里面的指针被固定下来了。
2. 一个元素需要用逗号额外说明 `(xx,)`

#### dicts


## Pandas

### DataFrame

### Series

## Numpy


## Django-QuerySet


