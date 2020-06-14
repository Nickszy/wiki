# 魔法函数

每一个类底下都会有一些`__init__` `__call__`这样的方法命名。

这些是 python 内置的函数。

比如在函数创建的时候就会运行 `__init__` `__new__` 的内容。

对象之间的比较 加减法 也是通过 `__add__` `__gte__` 等方法就能够完成。


[11\. (译)Python魔法方法指南](https://pyzh.readthedocs.io/en/latest/python-magic-methods-guide.html#id28)

##  __main__

__name__是内置变量，表示模块名称的意思。

当在某个文件夹目录下输入 python run ，python 会默认执行__main__文件中的 run 函数。

```py
if __name__ == '__main__'
```
