# Image

The Image component is used to display an image on the page.

![Image Component](/images/juiceEditor/component-image.png)

You can see an example here: <https://www.kuaiyizhi.cn/ideas/32C93F12-DD0C-487C-83FC-967CD07CBE2A>

## Draw a Picture

![Draw a Picture](/images/juiceEditor/draw.mov)

With additional configuration, you can enable drawing functionality on the page.

### Install Extension Package

```shell
npm i @coffic/juice-editor-draw
```

### Copy Static Files

```shell
cp -r node_modules/@coffic/juice-editor-draw/dist ./public/draw
```

### Configuration

You need to tell JuiceEditor how to access the static files you just copied.

```js
editor.setDrawLink('http://localhost:8080/draw/index.html?')
```
