# 压力测试

##  ab

### 安装

```
yum -y install httpd-tools
```

### 使用

```shell
ab -c 5 -n 1000 http://lala.coldpoker.xyz/jd/
```

利用

-n 测试几次（Number of requests to perform for the benchmarking session. The default is to just perform a single request which usually leads to non-representative benchmarking results.）

-c 模拟多少客户端（Number of multiple requests to perform at a time. Default is one request at a time.）

-T 内容类型。这个一般和-p 一起使用（Content-type header to use for POST data.）

-p 包含POST参数的文件（File containing data to POST.）

### 结果分析

- 失败率
- 每秒处理
- 时间处理分布

## webbench


