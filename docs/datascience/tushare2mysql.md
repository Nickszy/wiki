# 将tushare中的数据导入到mysql中

思路：
1. 链接数据库 
2. 在 tushare 中查询数据 
3. 将数据存入数据库中 

## 法一：Pandas+SQLAlchemy

```py

# 导入必要模块
import pandas as pd
from sqlalchemy import create_engine

# 初始化数据库连接，使用mysqlclient模块
# 例：用户名：root, 密码:123456, 端口：3306,数据库：tushare
engine = create_engine('mysql://root:123456@localhost:3306/tushare')

# 查询语句，选出demo表中的所有数据
sql = '''
      select * from demo;
      '''

# read_sql_query的两个参数: sql语句， 数据库连接
df = pd.read_sql_query(sql, engine)

# 输出employee表的查询结果
print(df)

# 新建pandas中的DataFrame, 只有id,num两列
df = pd.DataFrame({'id':[1,2,3,4],'num':[12,34,56,89]})

# 将新建的DataFrame储存为MySQL中的数据表，不储存index列
df.to_sql('list', engine, index= False)

print('Read from and write to Mysql table successfully!')
```
[🔗Python之使用Pandas库实现MySQL数据库的读写](https://segmentfault.com/a/1190000014210743)

### 存入乱码

```text
engine = create_engine(str(r"mysql+mysqldb://%s:" + '%s' + "@%s/%s?charset=utf8") % (user, password, host, db))
```

## 法二：pymysql

[🔗用Tushare下载所有股票数据](https://zhuanlan.zhihu.com/p/26495046)

## 自动运行


Q:如何定期自动更新？

A:你可以试试Windows的计划任务，定期运行Python的脚本即可，Python脚本运行的时候根据运行时间获取对应近一周/一月的数据，去重以后做持久化保存。
