# kaggle

`kaggle`是最负盛名的数据科学网站，国内类似的有`天池`，但是相对来说国外的网站会比国内的社区氛围好很多。

总得来说kaggle目前分为几个模块，

## competitions



##  Kaggle-cli

### cli安装

```cmd
pip install kaggle
```

2. open your kaggle account
3. create a new API Token
4. download `kaggle.json`
5. import kaggle -> Error
6. copy `kaggle.json` into `C:/user/xxx/.kaggle/`

### use cli

```shell

kaggle competitions list

#下载数据

kaggle competitions download titanic

# 下载之前写好的kernel

kaggle kernels list -m // 查询

kaggle kernels pull <name> -p <where> -m //下载

kaggle kernels push -p <where> /folder中需要有metadata
```

more details [Kaggel-API](https://github.com/Kaggle/kaggle-api#initialize-metadata-file-for-a-kernel)
