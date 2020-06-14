# 数据预处理





#### 独热编码

借助 OneHotEncoder 处理数据，将数据变成二分类的

但 onehot 不能处理 string 的列，因此可以借助 LabelEncoder 或者 pd.get_dummies()，将 string 转换为 integers 类型。

```python
from sklearn.preprocessing import LabelEncoder,OneHotEncoder

def one_hot(df,columns=None):
    if columns:
        columns = df.columns
    for feature in columns:
        encoder = LabelBinarizer()
        encoder.fit(df[feature])
        transformed = encoder.transform(df[feature])
        ohe_df = pd.DataFrame(transformed,index=df.index)
        ohe_df.columns = [feature+f'_{i}' for i in ohe_df.columns]
        data = pd.concat([df, ohe_df],axis=1).drop([feature], axis=1)
    return df
```
