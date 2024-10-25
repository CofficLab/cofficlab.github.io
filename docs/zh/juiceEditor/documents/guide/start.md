# 快速开始

该项目目前仍处于开发阶段，尚不稳定，请勿用于生产环境。

## 安装

```shell
npm i @coffic/juice-editor
```

## 使用

先引入 JuiceEditor 组件。

```js
import editor from '@coffic/juice-editor'

editor.onCreate(() => {
    console.log('editor created')
})
```

你可以在页面的任何位置，像普通的HTML标签一样使用它。

```html
<juice-editor></juice-editor>
```
