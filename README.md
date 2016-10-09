We重邮
===

### 目录结构
```
wecqupt
  ├─ app.json       // 全局配置文件，决定页面文件的路径、窗口表现、设置网络超时时间、设置多tab等     
  ├─ app.js         // 全局js，如执行App()函数来初始化注册小程序
  ├─ app.wxss       // 全局样式
  ├─ utils          // 模块化文件夹，利用module.exports暴露接口，通过require(path)使用模块接口
  │    └─ util.js   // 模块化例子
  ├─ images         // 图片文件夹
  └─ pages          // 页面文件夹
       ├─ index     // 主页
       │    ├─ index.wxml
       │    ├─ index.wxss
       │    └─ index.js
       ├─ news      // 资讯
       │    ├─ news.wxml
       │    ├─ news.wxss
       │    └─ news.js
       ├─ more      // 更多
       │    ├─ more.wxml
       │    ├─ more.wxss
       │    └─ more.js
       └─ core      // 主页功能文件夹
            ├─ kebiao     // 课表
            │    ├─ kebiao.wxml
            │    ├─ kebiao.wxss
            │    └─ kebiao.js
            └─ other      // 其他
                 └─ ..
```
```
// 路由

```

### 参考资料

* （重要）官方开发文档：https://mp.weixin.qq.com/debug/wxadoc/dev/
* 开发工具：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
* 更多资料：https://github.com/Aufree/awesome-wechat-weapp
* 设计指南：https://mp.weixin.qq.com/debug/wxadoc/design
* 布局例子：https://github.com/hardog/wechat-app-flexlayout

#### v1.0功能
* 查询
  * **课表查询**
  * **成绩查询**
  * **考试查询**
  * **空教室查询**
  * **学生查询**
  * **一卡通余额**
  * **借阅信息**
  * **学费信息**
  * **水电费查询**
  * **物业报修**
* 资讯
  * **教务公告**
  * **OA公告**
  * **会议通知**
  * **学术讲座**
  * **综合新闻**
