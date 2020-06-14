# matplotlib

[matplotlib/gallery](https://matplotlib.org/gallery/index.html)

图标非常的多，大概分为几类：

*   [Lines, bars and markers](https://matplotlib.org/gallery/index.html#lines-bars-and-markers)
*   [Images, contours and fields](https://matplotlib.org/gallery/index.html#images-contours-and-fields)
*   [Subplots, axes and figures](https://matplotlib.org/gallery/index.html#subplots-axes-and-figures)
*   [Statistics](https://matplotlib.org/gallery/index.html#statistics)
*   [Pie and polar charts](https://matplotlib.org/gallery/index.html#pie-and-polar-charts)
*   [Text, labels and annotations](https://matplotlib.org/gallery/index.html#text-labels-and-annotations)
*   [Pyplot](https://matplotlib.org/gallery/index.html#pyplot)
*   [Color](https://matplotlib.org/gallery/index.html#color)
*   [Shapes and collections](https://matplotlib.org/gallery/index.html#shapes-and-collections)
*   [Style sheets](https://matplotlib.org/gallery/index.html#style-sheets)
*   [Axes Grid](https://matplotlib.org/gallery/index.html#axes-grid)
*   [Axis Artist](https://matplotlib.org/gallery/index.html#axis-artist)
*   [Showcase](https://matplotlib.org/gallery/index.html#showcase)
*   [Animation](https://matplotlib.org/gallery/index.html#animation)
*   [Event handling](https://matplotlib.org/gallery/index.html#event-handling)
*   [Front Page](https://matplotlib.org/gallery/index.html#front-page)
*   [Miscellaneous](https://matplotlib.org/gallery/index.html#miscellaneous)
*   [3D plotting](https://matplotlib.org/gallery/index.html#d-plotting)
*   [Our Favorite Recipes](https://matplotlib.org/gallery/index.html#our-favorite-recipes)
*   [Scales](https://matplotlib.org/gallery/index.html#scales)
*   [Specialty Plots](https://matplotlib.org/gallery/index.html#specialty-plots)
*   [Ticks and spines](https://matplotlib.org/gallery/index.html#ticks-and-spines)
*   [Units](https://matplotlib.org/gallery/index.html#units)
*   [Embedding Matplotlib in graphical user interfaces](https://matplotlib.org/gallery/index.html#embedding-matplotlib-in-graphical-user-interfaces)
*   [Userdemo](https://matplotlib.org/gallery/index.html#userdemo)
*   [Widgets](https://matplotlib.org/gallery/index.html#widgets)


## pyplot

这是 matplotlib 中绘制图片的文件。

```py
import matplotlib.pyplot as plt
plt.style.use('ggplot')  # 使用ggplot的colormap
```


# 创建窗口

```
plt.figure(figsize=(15,10)) # 创建图像窗口
```

## 几种栅格化方法

```

# subplot
# 指明绘图区域
# 每次声明之后就可以切换地址
plt.subplot(2,2,1)   # 多图绘制，2行2列第一个图
plt.subplot('221')   # 另外一个图

# subplots
# 直接生成不同的区域
fig, (ax1, ax2) = plt.subplots(1, 2, sharey=True)
fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2)

# subplot2grid
plt.subplot2grid((3,3),(1,2),rowspan=2,colspan=2)  
```


# 绘制图表

```py
plt.scarter()
plt.plot()
plt.bar()
plt.text()
plt.table()
plt.arrow()
```

## 进阶

### 文字

text

###  Figure

### Axis

### Colormap




