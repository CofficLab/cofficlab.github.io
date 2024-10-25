# Image

Image 组件用于在页面中显示一张图片。

![Image组件](/images/juiceEditor/component-image.png)

这里可以看到例子：https://www.kuaiyizhi.cn/ideas/32C93F12-DD0C-487C-83FC-967CD07CBE2A

## 绘图

![Draw a Picture](/images/juiceEditor/draw.mov)

经过额外的配置，可以实现在页面中绘图的功能。

### 安装扩展包

```shell
npm i @coffic/juice-editor-draw
```

### 复制静态文件

```shell
cp -r node_modules/@coffic/juice-editor-draw/dist ./public/draw
```

### 配置

你需要告诉 JuiceEditor 如何访问刚刚复制的静态文件。

```js
editor.setDrawLink('http://localhost:8080/draw/index.html?')
```
