# 快速开始

该项目目前仍处于开发阶段，尚不稳定，请勿用于生产环境。

## 安装

```shell
npm i @coffic/juice-editor
```

## 使用

先引入 JuiceEditor 组件。

```js
import { EditorFactory, Editor } from '@coffic/juice-editor'

const editor = EditorFactory.register('my-editor', {
    onBeforeCreate: () => {
        console.log('onBeforeCreate for label my-editor')
    },
    onCreate: (editor: Editor) => {
        console.log('onCreate for label my-editor')

        editor.enableLog()
    }
})

// 当你在编辑器中输入 'editor.' 时，IDE 会提示可用的 API
```

你可以在页面的任何位置，像普通的HTML标签一样使用它。

```html
<my-editor></my-editor>
```
