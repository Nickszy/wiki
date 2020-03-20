# pandas_sql

pandas 可以借助其 io 中的 `read_sql` 和各个类型的 `to_sql` 方法来实现从数据库中获取数据，修改数据。

当然，数据库的类型有很多，pandas 借助了强大的 sqlalchemy 来满足 mysql，redis 等不同种类数据库的操作。当然 python 原生支持 sqlit3，因此这个可以直接用。

这里着重解释 DataFrame 的几个方法，其他的大同小异。

## [pandas.DataFrame.to_sql](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.to_sql.html#pandas-dataframe-to-sql)

`DataFrame.to_sql`(_self_, _name: str_, _con_, _schema=None_, _if_exists: str = 'fail'_, _index: bool = True_, _index_label=None_, _chunksize=None_, _dtype=None_, _method=None_) 

|参数|类型|默认|详细|
|-|-|-|-|
|name| str |/|Name of SQL table.|
|con|sqlalchemy.engine.Engine or sqlite3.Connection|/|Using SQLAlchemy makes it possible to use any DB supported by that library. Legacy support is provided for sqlite3.Connection objects. |
|schema| | | |
|if_exists|{‘fail’, ‘replace’, ‘append’}|「fail」| fail: Raise a ValueError. |
|index|bool|True| |
| | | | |

### 存入乱码

```text
engine = create_engine(str(r"mysql://%s:" + '%s' + "@%s/%s?charset=utf8") % (user, password, host, db))
```

## [pandas.read_sql](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_sql.html)



## [pandas.read_sql_query](https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.read_sql_query.html#pandas.read_sql_query)



## 坑

[python3 pandas to_sql填坑](http://www.rmworking.com/blog/2019/02/28/python3-pandas-tosql-tian-keng/)
