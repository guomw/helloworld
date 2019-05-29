## 概述

本示例演示如何使用支付宝小程序云应用作为后端服务器编写一个 HelloWorld 小程序。

示例代码中包括了小程序前端代码和 NodeJS 后端服务代码。其中，前端代码同样可作为 Alipay DevTools 中 Spring Boot 示例后端项目的前端代码。

## 前置条件
1. 拥有支付宝账号
2. [申请](https://openhome.alipay.com/platform/beta/applyTinyapp) 开通小程序开发者权限
3. [创建小程序](https://docs.alipay.com/mini/introduce/create)
4. [开通云服务](https://docs.alipay.com/mini/cloud-service/bnd2v4)

## 使用步骤
1. 创建云服务，选择NodeJS技术栈，并构建服务器环境，具体步骤参见 [创建云应用](https://docs.alipay.com/mini/cloud-service/rgrr6s)。
2. 关联云服务：点击 IDE 顶部“关联应用”，选择您的小程序，然后点击旁边的“云服务”，关联刚刚构建好的 NodeJS 环境。

![屏幕快照 2018-09-14 下午8.46.06.png | center | 799x65](https://cdn.nlark.com/lark/0/2018/png/26789/1536929219508-88dbbe86-8a8c-4cd5-8a43-fac188ee76fb.png "")

3. 打开 client/pages/index/index.js 文件，修改调用后端请求的域名。测试环境的域名可以从 IDE 云服务面板中应用环境页面获取。

![屏幕快照 2018-09-14 下午9.00.20.png | center | 799x274](https://cdn.nlark.com/lark/0/2018/png/26789/1536930061667-5b1f7825-5aa4-4b48-bc2e-36f4a5a1f862.png "")

4. 上传部署 server 端代码：点击 IDE 顶部云服务右边的工具图标，在下拉菜单中选择 **上传部署服务端代码**。

![屏幕快照 2018-09-14 下午8.47.15.png | center | 799x267](https://cdn.nlark.com/lark/0/2018/png/26789/1536929298934-2cbf0eb0-95a4-440e-9700-b8e8a6a64149.png "")

5. 在模拟器中运行 client 端查看效果。
   

![屏幕快照 2018-09-14 下午9.40.12.png | center | 379x671](https://cdn.nlark.com/lark/0/2018/png/26789/1536932434288-49419587-3c63-4524-94f6-5b37ef27c121.png "")


## 更多信息
更详细的步骤，参见以下两篇快速开始文档：

[基于 NodeJS 创建部署云应用](https://docs.alipay.com/mini/cloud-service/bwwxu1)

[基于 Spring Boot 创建部署云应用](https://docs.alipay.com/mini/cloud-service/mw4cfv)

