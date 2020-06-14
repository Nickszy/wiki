# linear_regression

虽然如今机器学习热度极高，新的算法层出不穷，但是线性回归与他们相比，有时效果更好，同时极其高效。

## 一元线性回归与多元线性回归

### spass

### 手写一个

### statsmodel





### sklearn

sklearn 中的 LinearRegression 就能实现线性回归的功能。

```py
# 1 导入 sklearn
import numpy as np
from sklearn.linear_model import LinearRegression
# 2 借助numpy生成数据

# 建立模型
model = LinearRegression()
model.fit(x,y)

# 预测
y_pred = model.predict(x_test)

# 或者
y_pred = model.intercept_ + model.coef_ * x
```

## 逐步回归法

### statsmodels

statsmodels 并没有自带逐步回归的模块，但我们可以借助它其他的代码实现此功能。

这里分享一个前向的逐步回归代码。

```py
import statsmodels.formula.api as smf

def forward_selected(data, response):
    """Linear model designed by forward selection.

    Parameters:
    -----------
    data : pandas DataFrame with all possible predictors and response

    response: string, name of response column in data

    Returns:
    --------
    model: an "optimal" fitted statsmodels linear model
           with an intercept
           selected by forward selection
           evaluated by adjusted R-squared
    """
    remaining = set(data.columns)
    remaining.remove(response)
    selected = []
    current_score, best_new_score = 0.0, 0.0
    while remaining and current_score == best_new_score:
        scores_with_candidates = []
        for candidate in remaining:
            formula = "{} ~ {} + 1".format(response,
                                           ' + '.join(selected + [candidate]))
            score = smf.ols(formula, data).fit().rsquared_adj
            scores_with_candidates.append((score, candidate))
        scores_with_candidates.sort()
        best_new_score, best_candidate = scores_with_candidates.pop()
        if current_score < best_new_score:
            remaining.remove(best_candidate)
            selected.append(best_candidate)
            current_score = best_new_score
    formula = "{} ~ {} + 1".format(response,
                                   ' + '.join(selected))
    model = smf.ols(formula, data).fit()
    return model
```

## 评价标准


