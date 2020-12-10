(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{542:function(t,s,a){"use strict";a.r(s);var n=a(23),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"数据结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[t._v("#")]),t._v(" 数据结构")]),t._v(" "),a("p",[t._v("python 作为一门动态语言，最具特色的就是其变量可以随时变更为任意一种数据类型。")]),t._v(" "),a("p",[t._v("在使用过程中，python程序一般都是基于其原生的基本数据类型 str list dict set等。")]),t._v(" "),a("p",[t._v("但是也有的库会因为特殊的需求开发出了如 ndarray , DataFrame 等新的数据类型和数据容器。")]),t._v(" "),a("p",[t._v("苦于有些数据结构不常见总是忘掉，我在这里就做一个整理，与君共勉。")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("来源")]),t._v(" "),a("th",[t._v("数据结构")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("python")]),t._v(" "),a("td",[a("a",{attrs:{href:"#str"}},[t._v("str")]),t._v(" "),a("a",{attrs:{href:"#list"}},[t._v("list")]),t._v(" "),a("a",{attrs:{href:"#tuple"}},[t._v("tuple")]),t._v(" "),a("a",{attrs:{href:"#dict"}},[t._v("dict")]),t._v(" "),a("a",{attrs:{href:"#set"}},[t._v("set")])])]),t._v(" "),a("tr",[a("td",[t._v("Numpy")]),t._v(" "),a("td",[a("a",{attrs:{href:"#ndarray"}},[t._v("ndarray")])])]),t._v(" "),a("tr",[a("td",[t._v("pandas")]),t._v(" "),a("td",[a("a",{attrs:{href:"#series"}},[t._v("Series")]),t._v(" "),a("a",{attrs:{href:"#dataframe"}},[t._v("DataFrame")])])]),t._v(" "),a("tr",[a("td",[t._v("Django")]),t._v(" "),a("td",[a("a",{attrs:{href:"#queryset"}},[t._v("QuerySet")])])])])]),t._v(" "),a("h2",{attrs:{id:"str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#str"}},[t._v("#")]),t._v(" str")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dasdsda'")]),t._v("\nss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("s\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#千万的数据拼接可用此方法")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("字符串是不可变的（immutable）")]),t._v(" "),a("p",[t._v("可用单双 三引号 "),a("code",[t._v("''")]),t._v(" "),a("code",[t._v('""')]),t._v(" "),a("code",[t._v("''' '''")]),t._v(" "),a("code",[t._v('""" """')]),t._v(" 创建字符串")]),t._v(" "),a("p",[a("code",[t._v("'''...'''")]),t._v("中间可以输入多行内容")]),t._v(" "),a("p",[t._v("用 "),a("code",[t._v("\\n")]),t._v(" "),a("code",[t._v("\\'")]),t._v("等表示转义")]),t._v(" "),a("p",[a("code",[t._v("r''")]),t._v("表示默认不转义")]),t._v(" "),a("p",[a("code",[t._v("'%s'%xx")]),t._v(" = "),a("code",[t._v("'{}'.format(xx)")]),t._v(" ="),a("code",[t._v("f'{xx}'")]),t._v("  #%d 整数 %s 字符串 %f 浮点数")]),t._v(" "),a("p",[t._v("str 可重新编码，默认 Unicode ，如 str.encode('utf-8')")]),t._v(" "),a("p",[t._v("python 2.5 以上版本， 可使用"),a("code",[t._v("+=")]),t._v(" 进行相加---时间复杂度 O（1），也可以结合 list 使元素链接起来")]),t._v(" "),a("h2",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[t._v("#")]),t._v(" list")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" l "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("range")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("list 是动态的（mutable）。")]),t._v(" "),a("p",[t._v("list 每次扩容解释器都会分配给它更多的内存空间，大概模式是 0, 4, 8, 16, 25, 35, 46, 58, 72, 88, ...，时间复杂度 O（1）。")]),t._v(" "),a("p",[t._v("使用：")]),t._v(" "),a("ol",[a("li",[t._v("增删改肯定是 list 占优")]),t._v(" "),a("li",[t._v("一个元素需要用逗号额外说明 "),a("code",[t._v("(xx,)")])])]),t._v(" "),a("h2",{attrs:{id:"tuple"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tuple"}},[t._v("#")]),t._v(" tuple")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("tuple")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\ntuple2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("l"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("list")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("append"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tuple2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("tuple 是静态的（immutable），一旦创建就不能更改。但其储存的是指针，因此指针指向的内容可以变化，如上面的例子。")]),t._v(" "),a("p",[t._v("元组如果要进行增加的操作，只能赋值给另外一个变量，实际上是解释器重新建立了一个空间，然后将元组全部复制过去，时间 O (n)。")]),t._v(" "),a("p",[t._v("注：tuple 创建速度极快，如果生成数据后就不更改，tuple比list更合适")]),t._v(" "),a("h2",{attrs:{id:"dict"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dict"}},[t._v("#")]),t._v(" dict")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("# dict\n{'name': 'mike', 'dob': '1999-01-01', 'gender': 'male'}\n\n# python3.7之后dict的内部储存形式\nindices = [None, 1, None, None, 0, None, 2]   #配给给dict一定的空间，none表示这个空间还没有内容\nentries = [\n[1231236123, 'name', 'mike'],\n[-230273521, 'dob', '1999-01-01'],\n[9371539127, 'gender', 'male']\n]\n")])])]),a("p",[t._v("dict是有序的，dict中的key也不能有重复。")]),t._v(" "),a("ol",[a("li",[t._v("dict.get('key_name',default)")]),t._v(" "),a("li",[t._v("可通过"),a("code",[t._v("remove()")]),t._v(" "),a("code",[t._v("pop()")]),t._v("来进行操作")])]),t._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[t._v("#")]),t._v(" set")]),t._v(" "),a("p",[t._v("set是无序的，因此set中的元素不能够有重复。")]),t._v(" "),a("ol",[a("li",[t._v("通过"),a("code",[t._v("'value' in set")]),t._v("来判断元素是否在set中")])]),t._v(" "),a("h2",{attrs:{id:"ndarray"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ndarray"}},[t._v("#")]),t._v(" ndarray")]),t._v(" "),a("h2",{attrs:{id:"series"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#series"}},[t._v("#")]),t._v(" Series")]),t._v(" "),a("h2",{attrs:{id:"dataframe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataframe"}},[t._v("#")]),t._v(" DataFrame")]),t._v(" "),a("h2",{attrs:{id:"queryset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#queryset"}},[t._v("#")]),t._v(" QuerySet")])])}),[],!1,null,null,null);s.default=e.exports}}]);