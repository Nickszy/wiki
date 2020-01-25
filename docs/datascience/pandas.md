# Pandas

1. Series

一维数组表。由`pd.index``pd.value`这两个部分组成。

2. DataFrame

我用的最多的是`pd.DataFrame`这个二维的数据结构。

有点类似于excel中的一张表，`df.index``df.columns`,就是表的行名和列名。

[DataFrame API查找表](https://pandas.pydata.org/pandas-docs/stable/reference/frame.html)

## 基本操作

```python
df.shape
df.reshape((1,1))
df.sort_values(by=['colomns1','columns2'])
df = df.copy ()  #深拷贝
```

## 增删查改

```py
# 增
df.append(self, other, ignore_index=False, verify_integrity=False, sort=None)
df.concat([df1,df2],axis=0) # 两张表合起来 axis 0为加行，1为加列
DataFrame.groupby([,])
df.merge()
# 删
df.pop() # 返回删去的数据集
df.dropna()


# 查
df.at[,]
df.iat[,] # i 表示为用integer的表示方式定查找位置
df.loc[1,2]
df.iloc[]
df.ix[]

# 改
df.iloc[1,2] = 'xxx'
df.apply()
df.where()
df.
```


## 时间相关操作


```python
# 1. 直接转化
pd.to_time()
# 2. 利用time进行转化

```