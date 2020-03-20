# 调用与包

## import

在编写python文件时总免不了要调用到第三方的包和自己学好的文件。

#### 自定义文件

**同一文件目录下**

在b.py文件中用下面两条语句即可完成对a.py文件中func( )函数的调用

```python
import a #引用同目录下文件`a.py`
a.func( )
```

```python
import lib.b //需在lib中新建`_init_.py`文件
b.func()
```

**不同文件目录下**

若不在同一目录，python查找不到，必须进行查找路径的设置，将模块所在的文件夹加入系统查找路径

```python
import sys
sys.path.append('a.py所在的路径')
//上个级别子文件
# import os
# o_path = os.getcwd()
# sys.path.append(o_path)
from xxx import a
a.func()
```

[更详细](https://blog.csdn.net/qq_32897143/article/details/79960432)

## 软件储存库

大家最熟悉的就是 Pypi 了，全称是Python Package Index，是python官方的第三方软件包储存库，pip在内的某些软件包管理器使用PyPI作为软件包及其依赖项的默认源。

### 自己发布一个软件包

1. 文件结构

```shell
//文件夹树
├── LICENSE 
├── README.md 
├── MANIFEST.in 
├── example_pkg
│ ├── __init__.py 
│ ├── workspace.py 
│ ├── database.py 
├── tests/
├── setup.py
```

2. 程序打包
```
python setup.py sdist 
```

具体可参考 [PyPA 官方示例](https://github.com/pypa/sampleproject)

3. 发布到 PyPI

先到[PyPI网站](https://pypi.python.org/pypi?%3Aaction=submit_form)注册项目，后用`twine`上传打包好的代码

[更多详细](https://www.jianshu.com/p/81d20ccf5d13)

