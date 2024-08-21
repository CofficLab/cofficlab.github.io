# Image

Image 组件用于在页面中显示一张图片。

![Image组件](/images/juiceEditor/component-image.png)

这里可以看到例子：https://www.kuaiyizhi.cn/ideas/32C93F12-DD0C-487C-83FC-967CD07CBE2A

## Drawio 画图

### 源码

<https://github.com/jgraph/drawio>

如果源码有更新，将源码中的`webapp`复制到`drawio`。

- etc

### 原理

无需修改drawio的源码，embed模式下可通过postMessage通信。具体看`SmartDraw`部分的源码。

### 问题

- 左侧出现了“便签”  
清空浏览器本地存储就消失了
- 画图打不开
检查这个文件：`src/entities/DrawAgent.ts` 中的 URL

### 参考资料

- <https://www.drawio.com/blog/embedding-walkthrough>  
- <https://www.drawio.com/doc/faq/embed-mode>  
