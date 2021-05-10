# 机器学习

## 线性回归


## 决策树 decision tree


1. 信息熵

表示数据集的紊乱程度，数值越大越混乱。
 
$H(D) = - \sum_{i=1}^{n}{{p_k}\log_2{p_k}}$

熵的单位是比特 bit 或者 纳特 nat

2. 分类标准 

|方式|代表算法|属性选择|数据集偏好|
|-|-|-|-|
|信息增益|ID3|选择增益大的属性|对数值较多的数据集有偏好|
|增益率 |C4.5|增益率越大越好|数据量较小|
|基尼指数|CART|越小越好| |

- 信息增益 ID3

对可取值数据较多的属性有所偏好

$$Gain(D,a) = Ent(D) - \sum\frac{|D^{v}|}{|D|}Ent(|D^{v}|)$$

$$Ent(D) = \sum_{i=1}^{n}{{p_k}\log_2{p_k}}$$

- 增益率   C4.5

对可取值数据较少的属性有所偏好

$$Gain_ratio(D,a) = \frac{Gain(D,a)}{IV(a)}IV(a) = - \sum_{v=1}^{V}\frac{|D^{v}|}{|D|}\log_2{\frac{|D^{v}|}{|D|}}$$

- 基尼指数  CART

基尼值越小，数据集的纯度越高

$$Gini(D,a) =\sum\frac{|D^{v}|}{|D|}Ent(|D^{v}|)$$

3. 剪枝 

||优点|缺点|
|-|-|-|
|预剪枝|降低过拟合风险；训练时间少，测试时间开销少 |欠拟合风险|
|后剪枝|保留更多的分支，欠拟合风险小，泛化能力更好 |开销大，在生成决策树，自底向上对非叶结点进行逐一考察|


4. 其他 

- 连续属性离散化（二分法）
 1. 排序
 2. 划分数据集（划分点 t）
 3. 选取使 Gain(D，a) 最大的 t

$$Gain(D,a) = \max_{t\epsilon T_a}Gain(D,a,t)$$

- 缺失值

- 多变量决策树


## SVM

*支持向量机 Support Vector Machine*

即可以分类，也可以用来回归

正中间的超平面，容忍性好，鲁棒性强，泛化能力好

支持向量：距离最近的几个训练样本点

距离 d：点到支持向量的最小值

间隔 margin ：两条平行于

svm 找到最大 margin 的超平面

(x1，y1)到直线 Ax+By+C=0 距离：

$$\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}$$

拓展到 n 维平面的距离：

$$\frac{|w^Tx+b|}{||w||}$$

$$||w||=\sqrt{w_1^2+w_2^2+···+w_n^2}$$

若训练点距离平面大于 d，y=+1
若训练点距离平面小于 d，y= -1

支持向量机模型：

$$min_{w,b} \frac{1}{2}||w||^2$$

$s.t. y_i(w^Tx_i+b)\ge1  \qquad  i=1,2,3,···,m$





## 无监督学习

### 聚类分析

#### K-means

先将数据集分为 k 个簇。

**算法思路：**

1. 首先随机确认 k 个点为簇的中心点

2. 接着根据欧几里得距离计算每个样本距离这几个中心点的距离，离谁近就属于哪个簇。

3. 在第一轮迭代结束后，取每个集合的平均值，记为新的集合中心点，继续上一轮的计算。

4. 直至最后两轮迭代的相同或者差别不大时停止迭代。

**描述**

优点：

1. 算法迭代次数为 O(kmn)，k 个簇，m 个元素，迭代 n 次 。可以局部最优结束
2. 当每个簇的差别比较大时效果较好 

缺点：

1. 首先要确定几个簇 
2. 当元素有分类的属性时比较难判断 
3. 异常元素会造成较大的干扰 
4. 不适合凹型的簇 
5. 开始随机确定簇的中心点太粗糙

**改进**

- 数据预处理
    标准化数据
- 中心点确认
   

将传入的数据进行预处理，

**标量**

1. 欧几里得距离 
2. 曼哈顿距离 
3. 闵可夫斯基距离 
4. 皮尔逊系数(Pearson Correlation Coefficient)

## 强化学习



# sklearn

我认为sklearn这个库是入门机器学习的首选。

因为不管使用什么样的算法，在sklearn中训练模型的步骤永远都是一样的。

fit -> train -> predict

## 模型评估 

精度、混淆矩阵、auc/roc、召回率、f1