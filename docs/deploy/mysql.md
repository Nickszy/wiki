# MySQL

用法：sql语句、索引、事务

深究： 连接池 引擎


## DDL

### 密码

```sql
# 登录
mysql -u name -p

# 修改密码
use mysql;
update user set authentication_string=password("新密码") where user="root"; # 5.7以后版本

flush privileges; # 刷新权限


```
### 数据库

```sql
# 创建数据库
create database demo;
CREATE DATABASE IF NOT EXISTS demo DEFAULT CHARSET utf8 COLLATE utf8_general_ci;
#删除数据库
drop database demo;
#使用某数据库
use demo;
```

### 数据表

```sql
# 创建数据表
CREATE TABLE table_name (column_name column_type);

CREATE TABLE IF NOT EXISTS `runoob_tbl`(  
`runoob_id` INT UNSIGNED AUTO_INCREMENT,  
`runoob_title` VARCHAR(100) NOT NULL, 
`runoob_author` VARCHAR(40) NOT NULL,  
`submission_date` DATE, 
PRIMARY KEY (  `runoob_id`  )  
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
#删除数据表
DROP TABLE table_name ;
```

## DML

### 增删查改

```SQL
# 增
INSERT INTO table_name 
( field1, field2,...fieldN ) 
VALUES 
( value1, value2,...valueN );
#查
SELECT [DISTINCT] column_name,column_name
FROM table_name 
[WHERE Clause]  
[LIMIT N][ OFFSET M]
#改
UPDATE table_name 
SET field1=new-value1, field2=new-value2 
[WHERE Clause]
# 删
DELETE FROM table_name [WHERE Clause]
```

### 多表查询 join

```sql
*   **INNER JOIN（内连接,或等值连接）**：获取两个表中字段匹配关系的记录。
*   **LEFT JOIN（左连接）：**获取左表所有记录，即使右表没有对应匹配的记录。
*   **RIGHT JOIN（右连接）：** 与 LEFT JOIN 相反，用于获取右表所有记录，即使左表没有对应匹配的记录。

select * from a 
left join b
on a.id = b.id
```

### 条件子句

一般跟随在 where 之后，用来筛选范围

```sql
# =

# 模糊查询用 like
where field1 LIKE condition1 [AND [OR]] filed2 =  'somevalue'
# 正则表达式
WHERE name REGEXP '^st'; # ^开头 $结尾
# 缺失值
where uname is not null[is null]；
```

### 查询优化

explain

### 输出效果

```sql
# 排序
ORDER BY field1 [ASC [DESC][默认 ASC]],  [field2...]  [ASC [DESC][默认 ASC]]
# group by

# 多条查询放一起 UNION
UNION [ALL] # 不添加all可自动删重
```

### 窗口函数

```text
<窗口函数> over (partition by <用于分组的列名>
                order by <用于排序的列名>)
```

1） 专用窗口函数，包括后面要讲到的rank, dense_rank, row_number等专用窗口函数。

2） 聚合函数，如sum. avg, count, max, min等

因为窗口函数是对where或者group by子句处理后的结果进行操作，所以**窗口函数原则上只能写在select子句中**。

[参考](https://zhuanlan.zhihu.com/p/92654574
)
## DCL 

用户和权限设置

不能总是用超级管理员的身份去操作数据库。


## 事务

还没写


## 其他

### 数据库的基本设置

```mysql
set global time_zone='+8:00';  #设置数据库的时区
```

### 利用Python 对数据库进行操作

一种是在python中写sql代码，然后传入mysql中；另一种是借助SQLalchemy或者django-model等ORM库实现对数据库的操作。

```shell
# python3
pip install mysqlclient
```

python操作的其他几种方式：

- [pandas+SQLalchemy对数据库进行操作](../python/pandas+sqlalchemy)


---

参考
1. [DDL/DML/DCL区别概述](https://www.cnblogs.com/kawashibara/p/8961646.html)

