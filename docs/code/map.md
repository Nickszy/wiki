---
sidebar:true
---


# 地图

## 高德地图

[开发](https://lbs.amap.com/api/javascript-api/summary)

```html
<script src="https://webapi.amap.com/maps?v=1.4.15&key=c2860f5c9b242c1ed9694d7bb304ef30"></script>

<div id="daodemap" style="width: 100%;height: 400px;"></div>
<script type="text/javascript">
    var map = new AMap.Map('daodemap', {
        resizeEnable: true,
        center:[121,30],
        zoom:10
    });
    AMap.plugin('AMap.ToolBar',function(){
        var toolbar = new AMap.ToolBar();
        map.addControl(toolbar)
    })
</script>
```

## 百度地图echarts版
[开发文档](http://lbsyun.baidu.com/index.php?title=jspopularGL)
```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-gl/dist/echarts-gl.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts-stat/dist/ecStat.min.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/dataTool.min.js"></script>
<script type="text/javascript" src="https://api.map.baidu.com/api?v=3.0&ak=9d9tdoPPP0qoG8YOVrIwa8lcQItSyfU7"></script>
<script type="text/javascript" src="../static/map/js/china.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/map/js/world.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/extension/bmap.min.js"></script>
<link href="//api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="//api.map.baidu.com/library/TrafficControl/1.4/src/TrafficControl_min.js"></script>

<div id='bmap' style="width:600px;height:400px;">
<script>
var bmap = echarts.init(document.getElementById("bmap"));
            options = {
                title:{
                    text: "上海"
                },
                bmap: {
                    // 百度地图中心经纬度
                    center: [{{city.lng}}, {{city.lat}}],
                    // 百度地图缩放
                    zoom: 11,
                    // 是否开启拖拽缩放，可以只设置 'scale' 或者 'move'
                    roam: true,
                    // 百度地图的自定义样式，见 http://developer.baidu.com/map/jsdevelop-11.htm
                    mapStyle:{style:'normal'}
                },
                visualMap: {
		            show: false,
		            top: 'top',
		            min: 0,
		            max: 100,
		            seriesIndex: 0,
		            calculable: true,
		            inRange: {
		                color: ['blue', 'blue', 'green', 'yellow', 'red']
		            }
		        },
                series: [{
                    type: 'heatmap',
                    // 使用百度地图坐标系
                    coordinateSystem: 'bmap',
                    // 数据格式跟在 geo 坐标系上一样，每一项都是 [经度，纬度，数值大小，其它维度...]
                    data: [ [120, 30, 1] ]
                }]
            };
            bmap.setOption(options);
            var map = bmap.getModel().getComponent('bmap').getBMap();
            map.addControl(new BMap.NavigationControl());
            map.addControl(new BMap.ScaleControl());
            map.addControl(new BMap.OverviewMapControl());
            map.addControl(new BMap.MapTypeControl(BMAP_MAPTYPE_CONTROL_DROPDOWN));
            map.setCurrentCity("上海");
            map.enableScrollWheelZoom(true);
            // 显示路况
            var ctrl = new BMapLib.TrafficControl({
                showPanel: true //是否显示路况提示面板
            });
            map.addControl(ctrl);
            ctrl.setAnchor(BMAP_ANCHOR_BOTTOM_RIGHT);

            // 定位
            var geolocationControl = new BMap.GeolocationControl();
            geolocationControl.addEventListener("locationSuccess", function(e){
                // 定位成功事件
                var address = '';
                address += e.addressComponent.province;
                address += e.addressComponent.city;
                address += e.addressComponent.district;
                address += e.addressComponent.street;
                address += e.addressComponent.streetNumber;
                // alert("当前定位地址为：" + address);
              });
              geolocationControl.addEventListener("locationError",function(e){
                // 定位失败事件
                alert(e.message);
              });
              map.addControl(geolocationControl);
</script>
```