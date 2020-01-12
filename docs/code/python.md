---
style: plain
---
# python

## 调用

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

## 库

### 自己写个库

1. 文件结构
```path
//文件夹树
├── LICENSE 
├── README.md 
├── MANIFEST.in 
├── lib
│ ├── __init__.py 
│ ├── workspace.py 
│ ├── database.py 
├── setup.cfg 
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

