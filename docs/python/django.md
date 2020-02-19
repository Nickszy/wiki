# django

## url 配置

一般来说，都是通过 url 去调用视图函数。

主要是由 `urls.py`进行控制，非常的简单，只要会正则表达式就行了。

具体的介绍可以

The `urlpatterns` list routes URLs to views. For more information please see:

    https://docs.djangoproject.com/en/3.0/topics/http/urls/

### 1. 导入视图函数文件：
1. 从当前应用中导入一个视图函数 
2. 在路径模式中将 url 与视图函数匹配起来 

```py
1. Add an import:  from my_app import views
2. Add a URL to urlpatterns:  path('', views.home, name='home')
```

### 2. 类-视图

1. 从其他应用中导入一个视图类 
2. 链接 url 与视图类（用 as_view() 的方式）
Class-based views
```python
    1. Add an import:  from other_app.views import Home

    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
```
### 3. 用 include 将 url 引导

1. 从 django 的 urls 中引入 path 和 include 方法 
2. 写入 url 导出的地址 

 ```python
 Including another URLconf
1. Import the include() function: from django.urls import include, path
2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
 ``` 
 
### 示例

```
from django.contrib import admin
from django.urls import path,include
from . import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('demo/',include('demo.urls')),
    path('', views.home)
]
```

## views.py


## templates

#### 模板函数


## model

### 数据库

```cmd
# python3
pip install mysqlclient
```

```mysql
set global time_zone='+8:00';
```

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'demo',
        'HOST': '127.0.0.1',
        'USER':'root',
        'PORT':'3306',
        'PASSWORD':'123456'
  }
}
```