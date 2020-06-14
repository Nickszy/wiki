# Seaborn

更好看的matplotlib，它是基于 matplotlib 的一个 python 库，用它能画出非常好看的数据图表。

它的图片比matplotlib少很多，但是却要好看不少，有较多的参数都是默认设定好的。

![seaborn_tutorial](./seaborn_tutorial.png)

```py
import seaborn as sns
```

## boxplot

```py
# boxplot或者boxenplot或者violinplot参数类似
sns.boxplot(x='columns_name',y='columns_name',hue='columns_name',data=df)
```


### line