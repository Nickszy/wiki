
# 爬虫

## Requests库

[官方网站](https://requests.readthedocs.io/en/master/)

这是一个非常人性化的库，上手非常的容易，使用它去爬一些没有做反爬处理的网站非常的优雅。

它总共也就只有几个文件

其中在api.py这个文件中有几个class的定义。其中request是后面几个方法get,post,session,head,put,delete,options去调用session.request的一个方法封装，用`with as`的方式非常的优雅。



```py
import requests

# out
url
headers
params
cookies
stream
timeout

requests.get()
requests.post()


# 接受端
r.url
r.status_code
r.text
r.header

```

## aiohttp

[官方网站](https://docs.aiohttp.org/en/stable/)

与requests不同的是，它支持异步请求。


## selenium

虽然说它可以模拟浏览器进行登录，但是需要渲染数据，也太慢了吧。

而且做反爬处理的网站也会针对这个在做限制。





### mitmproxy

无头

[https://mitmproxy.org/](https://mitmproxy.org/)

- Install pipx.
  - python3 -m pip install --user pipx
  - python3 -m pipx ensurepath
- pipx install mitmproxy







