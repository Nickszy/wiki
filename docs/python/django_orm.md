# django-orm

这应该是一个跟sqlalchemy不相上下的一个第三方orm库，与django深度定制，十分有用。

```py
# model定义

class Post(models.Model):
    question_text = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    uname = models.CharField(max_length=200)
    ptime = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    class MetaL
        db_tabel='post'  #自定义数据库中的表名,默认为 f'{appname}_{classname}'

# 保存
Post.save()

# 查
Post.objects.all()  # 全部查询，可迭代
Post.objects.exclude(id__lt='100').values('ptime','author').filter(uname__contains/startswith/endswith="学习",tetx_isnull=True).filter(pid__gte/lt='100').order_by('-published_date')

```