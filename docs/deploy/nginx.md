# Nginx


[http://tengine.taobao.org/book/chapter_02.html](http://tengine.taobao.org/book/chapter_02.html)

## 常用命令

```shell
启动服务：start nginx 
停止服务：nginx -s stop 
重新加载：nginx -s reload  (配置文件被修改后需要执行它)

nginx -t // 测试修改后的nginx.conf文件是否可用

# 提示80端口无法绑定，用命令 netstat -ntpl 查看端口占用情况
netstat -ntpl

# 另外一种方法
systemctl reload nginx  // 重新加载
systemctl restart nginx // 重启nginx
systemctl stop nginx // 停止

# 列出占用端口的程序的pid号，并使用以下命令杀掉所有占用端口的程序
# pid_number为那个pid号
sudo kill -9 pid_number 
```
