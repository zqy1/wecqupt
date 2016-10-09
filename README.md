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
       │    ├─ more.wxml    // 更多 (含绑定用户)
       │    ├─ more.wxss
       │    ├─ more.js
       │    ├─ info.wxml    // 用户信息
       │    ├─ info.wxss
       │    ├─ info.js
       │    ├─ about.wxml   // 关于
       │    ├─ about.wxss
       │    └─ about.js
       └─ core      // 主页功能文件夹
            ├─ kb       // 课表
            │    ├─ kb.wxml
            │    ├─ kb.wxss
            │    └─ kb.js
            └─ other    // 其他
                 └─ ..
```

### 参考资料

* （重要）官方开发文档：https://mp.weixin.qq.com/debug/wxadoc/dev/
* 开发工具：https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html
* 更多资料：https://github.com/Aufree/awesome-wechat-weapp
* 设计指南：https://mp.weixin.qq.com/debug/wxadoc/design
* flex布局
  * 语法篇：http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
  * 实例篇：http://www.ruanyifeng.com/blog/2015/07/flex-examples.html

## v1.0
### 功能及页面
> 共15个页面，3个主tabnav页面

| 编号 | 功能        | 路径                        |
|:---:| ----------- | -------------------------- |
| 1   | **【主页】** | pages/index/index(.wxml)   |
| 10  | 课表查询     | pages/core/kb/kb           |
| 11  | 成绩查询     | pages/core/cj/cj           |
| 12  | 考试查询     | pages/core/ks/ks           |
| 13  | 空教室查询   | pages/core/kjs/kjs         |
| 14  | 学生查询     | pages/core/xs/xs           |
| 15  | 一卡通余额   | pages/core/ykt/ykt         |
| 16  | 借阅信息     | pages/core/jy/jy           |
| 17  | 学费信息     | pages/core/xf/xf           |
| 18  | 水电费查询   | pages/core/sdf/sdf         |
| 19  | 物业报修     | pages/core/bx/bx           |
| 2   | **【资讯】** | pages/news/news            |
|     | 教务公告     | (同上)                      |
|     | OA公告      | (同上)                      |
|     | 会议通知     | (同上)                      |
|     | 学术讲座     | (同上)                      |
|     | 综合新闻     | (同上)                      |
| 3   | **【更多】** | pages/more/more (含绑定用户) |
| 30  | 用户信息     | pages/more/info            |
| 31  | 关于        | pages/more/about           |
|     | 反馈        | (跳转至github - new issue)  |

### 分工

| who    | todo0                       |
|:------:| --------------------------- |
| 闵聪    | 项目架构，页面1、2、3          |
| 莫梦竟成 | 视觉设计交互                 |
| 杨奇奇   | 视觉设计交互                 |
| 刘浩     | 后台接口完善（基于i重邮）      |
| 宋思辰   | 页面10、13、14               |
| 吴鹏举   | 页面11、12、17               |
| 苏丹     | 页面15、16、18               |
| 王晓宇   | 页面19、30、31               |