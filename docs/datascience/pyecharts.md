# Pyecharts

这个是由 echarts 进化而来的 python 库，可以直接导出 JavaScript 。

与 Django flask 等框架一起食用更佳。

[更多请看](../python/pyecharts)

## 图表的结构

```python
from pyecharts.charts import Bar  # 引入图表的class
from pyecharts import options as opts  # 导入设置options包
# V1 版本开始支持链式调用  
# 你所看到的格式其实是 `black` 格式化以后的效果  
# 可以执行 `pip install black` 下载使用 
bar =  ( 
  Bar(initoptions = xxx)  
  .add_xaxis(['衬衫','羊毛衫','雪纺衫','裤子','高跟鞋','袜子'])  
  .add_yaxis('商家A',[5,20,36,10,75,90])
  .set_global_opts(title_opts=opts.TitleOpts(title="主标题", subtitle="副标题"))  
  # 或者直接使用字典参数  
  # .set_global_opts(title_opts={"text": "主标题", "subtext": "副标题"})  
) 
  bar.render()
```

## 图表输出

1. 渲染成为网页 

```python
demo.render(path='demo.html')
```

2. 渲染出图片 

总共有三种方式：`selenium`, `phantomjs` 和 `pyppeteer`。

以下为 selenium 的示例。

```python
from pyecharts.render import make_snapshot
from snapshot_selenium import snapshot
...

demo=(
...
...
...
)
demo.make_snapshot(
    engine: Any,
    file_name: str,output_name: str,
    delay: float = 2,pixel_ratio: int = 2,
    is_remove_html: bool = False,
    browser: str = "Chrome",**kwargs)
```


## 说明

- 数据格式

pyecharts 比较奇葩，需要把数据类型都转换成 python 自己的 int，float 类型，不能直接使用 numpy 中的类型


