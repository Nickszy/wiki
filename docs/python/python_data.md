# 数据结构

python 作为一门动态语言，最具特色的就是其变量可以随时变更为任意一种数据类型。

在使用过程中，python程序一般都是基于其原生的基本数据类型 str list dict set等。

但是也有的库会因为特殊的需求开发出了如 ndarray , DataFrame 等新的数据类型和数据容器。

苦于有些数据结构不常见总是忘掉，我在这里就做一个整理，与君共勉。

|来源|数据结构|
|-|-|
|python|[str](#str) [list](#list) [tuple](#tuple) [dict](#dict) [set](#set)|
|Numpy| [ndarray](#ndarray)|
|pandas|[Series](#series) [DataFrame](#dataframe)|
|Django|[QuerySet](#queryset)|

## str

```py
s = 'dasdsda'
ss = s+s

#千万的数据拼接可用此方法
l = []
for n in range(0, 100000):
    l.append(str(n))
l = ' '.join(l)
```

字符串是不可变的（immutable）

可用单双 三引号 `''` `""` `''' '''` `""" """` 创建字符串

`'''...'''`中间可以输入多行内容

用 `\n` `\'`等表示转义

`r''`表示默认不转义

`'%s'%xx` = `'{}'.format(xx)` =`f'{xx}'`  #%d 整数 %s 字符串 %f 浮点数

str 可重新编码，默认 Unicode ，如 str.encode('utf-8')  

python 2.5 以上版本， 可使用`+=` 进行相加---时间复杂度 O（1），也可以结合 list 使元素链接起来


## list

```py
list = [1,2,4,5,6,7]
l = [l for l in range(10)]
l.append(11)

```

list 是动态的（mutable）。

list 每次扩容解释器都会分配给它更多的内存空间，大概模式是 0, 4, 8, 16, 25, 35, 46, 58, 72, 88, ...，时间复杂度 O（1）。

使用：
1. 增删改肯定是 list 占优
2. 一个元素需要用逗号额外说明 `(xx,)`

## tuple

```py
tuple = (1,2,3,4,5,6,7)
l = [1,2,3]
tuple2 = (1,2,3,l)
list.append(10)
print(tuple2)
>>> (1,2,3,[1,2,3,10])
```

tuple 是静态的（immutable），一旦创建就不能更改。但其储存的是指针，因此指针指向的内容可以变化，如上面的例子。

元组如果要进行增加的操作，只能赋值给另外一个变量，实际上是解释器重新建立了一个空间，然后将元组全部复制过去，时间 O (n)。

注：tuple 创建速度极快，如果生成数据后就不更改，tuple比list更合适


## dict

```
# dict
{'name': 'mike', 'dob': '1999-01-01', 'gender': 'male'}

# python3.7之后dict的内部储存形式
indices = [None, 1, None, None, 0, None, 2]   #配给给dict一定的空间，none表示这个空间还没有内容
entries = [
[1231236123, 'name', 'mike'],
[-230273521, 'dob', '1999-01-01'],
[9371539127, 'gender', 'male']
]
```

dict是有序的，dict中的key也不能有重复。

1. dict.get('key_name',default)
2. 可通过`remove()` `pop()`来进行操作

## set

set是无序的，因此set中的元素不能够有重复。

1. 通过`'value' in set`来判断元素是否在set中


## ndarray

## Series

## DataFrame

## QuerySet