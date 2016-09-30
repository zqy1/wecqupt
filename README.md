We重邮
===

### 目录结构
```
wecqupt
  ├─ app.json       // 全局配置文件，决定页面文件的路径、窗口表现、设置网络超时时间、设置多tab等     
  ├─ app.js         // 全局js，如执行App()函数来初始化注册小程序
  ├─ app.wxss       // 全局样式
  ├─ utils          // 模块化文件夹，利用module.exports暴露接口，通过require(url)使用模块接口
  │    └─ util.js
  └─ pages          // 页面文件夹
       ├─ index       // index页面
       │    ├─ index.wxml
       │    ├─ index.wxss
       │    └─ index.js
       └─ other       // other页面
            ├─ other.wxml
            ├─ other.wxss
            └─ other.js
```

### 资料

* （重要）官方开发文档：https://mp.weixin.qq.com/debug/wxadoc/dev/
* 开发工具：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
* 更多资料：https://github.com/Aufree/awesome-wechat-weapp