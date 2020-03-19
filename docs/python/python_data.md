# 数据类型与结构

python 作为一门动态语言，最具特色的就是其变量可以随时变更为任意一种数据类型。

在使用过程中，一般都是基于 puthon 原生的基本数据类型 str list dict 等。

但是也有的库会因为特殊的需求开发出了如 datetime，ndarray,DataFrame 等新的数据类型和数据容器。

苦于有些数据结构不常见总是忘掉，我在这里就做一个整理，与君共勉。

## python 原生

|基础|container|
|-|- |
|数字（int/float/bool）|def|
|字符串(str)||
|dict||
|list||
|set||

### str 字符串

字符串是不可变的（immutable）

1. 可用单双 三引号 `''` `""` `''' '''` `""" """` 创建字符串
2. `'''...'''`中间可以输入多行内容
3. 用 `\n` `\'`等表示转义
4. `r''`表示默认不转义
5. `'%s'%xx` = `'{}'.format(xx)` =`f'{xx}'`  #%d 整数 %s 字符串 %f 浮点数
6. 可重新编码，默认 Unicode ，如 str.encode('utf-8')  
7. python 2.5 以上版本， 可使用`+=` 进行相加---时间复杂度 O（1），也可以结合 list 使元素链接起来
    ```
    l = []
    for n in range(0, 100000):
        l.append(str(n))
    l = ' '.join(l)
    ```

### list & tuple

```py
list = [1,2,4,5,6,7]
tuple = (1,2,3,4,5,6,7)

```

list 是动态的（mutable），tuple 是静态的（immutable）。

list 每次扩容解释器都会分配给它更多的内存空间，大概模式是 0, 4, 8, 16, 25, 35, 46, 58, 72, 88, ...

元组如果要进行增加的操作，只能赋值给另外一个变量，实际上是解释器重新建立了一个空间，然后将元组全部复制过去。

元组定义好后就不能改变，主要应该是里面的指针被固定下来了。

增加一个元素： list O (1)，tuple O (n)

使用：

1. 增删改肯定是 list 占优
2. tuple 创建极快，如果生成数据后就不更改，tuple 更合适
3. 一个元素需要用逗号额外说明 `(xx,)`

### dicts & set

dict 是

## Pandas

### DataFrame

### Series

## Numpy

## Django-QuerySet
