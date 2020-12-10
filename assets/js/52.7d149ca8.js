(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{503:function(t,r,e){"use strict";e.r(r);var a=e(23),p=Object(a.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"初识-linux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识-linux"}},[t._v("#")]),t._v(" 初识 linux")]),t._v(" "),e("p",[t._v("参考资料：linux："),e("a",{attrs:{href:"http://linux.vbird.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("鸟哥的私房菜"),e("OutboundLink")],1),t._v("、进阶-> apue《环境高级编程》")]),t._v(" "),e("h2",{attrs:{id:"下载与安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载与安装"}},[t._v("#")]),t._v(" 下载与安装")]),t._v(" "),e("p",[t._v("遇到最多的就是通过命令行去下载安装")]),t._v(" "),e("p",[t._v("rpm是由红帽公司开发的软件包管理方式，使用rpm我们可以方便的进行软件的安装、查询、卸载、升级等工作。但是rpm软件包之间的依赖性问题往往会很繁琐,尤其是软件由多个rpm包组成时。")]),t._v(" "),e("p",[t._v("Yum（全称为 Yellow dog Updater, Modified）是一个在Fedora和RedHat以及SUSE中的Shell前端软件包管理器。基於RPM包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软体包，无须繁琐地一次次下载、安装。")]),t._v(" "),e("p",[t._v("rpm 是linux的一种软件包名称，以.rmp结尾，安装的时候语法为：rpm -ivh，rpm包的安装有一个很大的缺点就是文件的关联性太大，有时候装一个软件要安装很多其他的软件包，很麻烦，所以为此RedHat小红帽开发了yum安装方法，他可以彻底解决这个关联性的问题，很方便，只要配置两个文件即可安装，安装方法是：yum -y install ，yum并不是一中包，而是安装包的软件。")]),t._v(" "),e("p",[t._v("简单点说, rpm 只能安装已经下载到本地机器上的rpm 包. yum能在线下载并安装rpm包,能更新系统,且还能自动处理包与包之间的依赖问题,这个是rpm 工具所不具备的。")]),t._v(" "),e("p",[e("strong",[t._v("yum与apt-get的相同点：")])]),t._v(" "),e("p",[t._v("apt-get属于ubuntu、Debian的包管理工具")]),t._v(" "),e("p",[t._v("yum则属于Redhat、Centos包管理工具")]),t._v(" "),e("h2",{attrs:{id:"常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[t._v("#")]),t._v(" 常用命令")]),t._v(" "),e("h3",{attrs:{id:"top"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#top"}},[t._v("#")]),t._v(" top")]),t._v(" "),e("p",[t._v("类似于 windows 的任务管理器，可查看进程运行情况")]),t._v(" "),e("h3",{attrs:{id:"ps-ef-grep-project-name"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ps-ef-grep-project-name"}},[t._v("#")]),t._v(" ps -ef|grep project_name")])])}),[],!1,null,null,null);r.default=p.exports}}]);