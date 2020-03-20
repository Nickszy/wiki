# NumPy

## 生成 array

    numpy.array(object, dtype =  None, copy =  True, order =  None, subok =  False, ndmin =  0)

| 名称 | 描述 |
| --- | --- |
| object | 数组或嵌套的数列 |
| dtype | 数组元素的数据类型，可选 |
| copy | 对象是否需要复制，可选 |
| order | 创建数组的样式，C为行方向，F为列方向，A为任意方向（默认） |
| subok | 默认返回一个与基类类型一致的数组 |
| ndmin | 指定生成数组的最小维度 |


```python
import numpy as np
a = np.array([1,23,4,4],dtype=float)

# ndarray的属性
a.shape
a.ndim  # 维度
a.reshape()
a.ravel()  # 扁平化
a.transpose()  # 转置 a.T
```
### 其他创建方式

```
numpy.empty(shape, dtype =  float, order =  'C')
numpy.zeros(shape, dtype =  float, order =  'C')
numpy.ones(shape, dtype =  None, order =  'C')
numpy.arange(start, stop, step, dtype)
np.linspace(start, stop, num=50, endpoint=True, retstep=False, dtype=None) #等差数列
np.logspace(start, stop, num=50, endpoint=True,  base=10.0, dtype=None) # 等比数列
```

### 索引

```python
b = np.array([[1,2,3,4,5,5],[2,3,4,5,6,7]])

b[:,2]  # 取第3列

```

### 合并

```python
a.vstack()
a.hstack()
```


## 函数

### random

### arrange
### linspace
