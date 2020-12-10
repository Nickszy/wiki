# HTTPS

因为安全性方面的考虑，给数据用上 HTTPS 还是很有必要的。

这里借助傻瓜式的 [certbot](https://certbot.eff.org/)来生产 SSL 证书，它是由 Let’s Encrypt 提供的服务。

这里写一下 cantos7 下的部署过程。

```shell
sudo yum install certbot python2-certbot-nginx

# 先暂停nginx
nginx -s stop 

# 配置（填写设置）
sudo certbot --nginx 

// 可选（若python请求报错）
pip install --upgrade --force-reinstall 'requests==2.6.0' urllib3  

# 手动更新
certbot renew

# 自动更新
echo "0 0,12 * * * root python -c 'import random; import time; time.sleep(random.random() * 3600)' && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null

# 查看证书配置
certbot certificates
```

ps: 如果 http 请求能够获得， https 请求无法访问，可以看一下安全组配置。

---
参考
1. [centos7 certbot nginx](https://www.jianshu.com/p/036f83be926f)
2. [certbot](https://certbot.eff.org/)