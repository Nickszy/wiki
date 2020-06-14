(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{466:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据预处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据预处理"}},[t._v("#")]),t._v(" 数据预处理")]),t._v(" "),a("h4",{attrs:{id:"独热编码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#独热编码"}},[t._v("#")]),t._v(" 独热编码")]),t._v(" "),a("p",[t._v("借助 OneHotEncoder 处理数据，将数据变成二分类的")]),t._v(" "),a("p",[t._v("但 onehot 不能处理 string 的列，因此可以借助 LabelEncoder 或者 pd.get_dummies()，将 string 转换为 integers 类型。")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" sklearn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("preprocessing "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" LabelEncoder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("OneHotEncoder\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("one_hot")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        columns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" feature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        encoder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LabelBinarizer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        encoder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("feature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        transformed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" encoder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("transform"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("feature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ohe_df "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DataFrame"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("transformed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        ohe_df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("feature"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string-interpolation"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("f'_")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" ohe_df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("columns"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("concat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ohe_df"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("axis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("drop"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("feature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" axis"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" df\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);