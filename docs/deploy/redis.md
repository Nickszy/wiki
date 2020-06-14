# redis

redis 是一个内存型的 KV 数据库，它有高效的特点，同时支持 5 种数据储存的格式。

```shell
>>>redis-cli -a myredis
```

```sql
SET KEY VALUE
GET KEY
keys * // 获得所有key值
select 1  //进入某一个数据库
flushdb   // 清除数据库
flushall  // 清除实例
```
