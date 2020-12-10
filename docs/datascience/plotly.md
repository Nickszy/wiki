# plotly

有些时候 plotly 无法在 jupyter 中显示，是因为它会将 plotly 绘制的图自动上传，因此我们只要在绘图之前添加以下参数，设置成不联系就好了。

```py
import plotly.offline as of
of.offline.init_notebook_mode(connected=False)
```
