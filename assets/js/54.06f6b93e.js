(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{314:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"django-orm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-orm"}},[t._v("#")]),t._v(" django-orm")]),t._v(" "),a("p",[t._v("这应该是一个跟sqlalchemy不相上下的一个第三方orm库，与django深度定制，十分有用。")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# model定义")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Post")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    question_text "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    author "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    uname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ptime "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    pub_date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" models"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DateTimeField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'date published'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MetaL")]),t._v("\n        db_tabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'post'")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#自定义数据库中的表名,默认为 f'{appname}_{classname}'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存")]),t._v("\nPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查")]),t._v("\nPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 全部查询，可迭代")]),t._v("\nPost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exclude"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id__lt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ptime'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'author'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("uname__contains"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("startswith"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("endswith"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"学习"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("tetx_isnull"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("pid__gte"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("lt"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'100'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("order_by"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'-published_date'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);