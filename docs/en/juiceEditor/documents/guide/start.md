# Quick Start

This project is currently still in the development stage and is not yet stable. Please do not use it in a production environment.

## Installation

```shell
npm i @coffic/juice-editor
```

## Usage

First, import the JuiceEditor component.

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

// When you type 'editor.', the IDE will suggest available APIs
```

Then, you can use it like a normal HTML tag anywhere on the page.

```html
<my-editor></my-editor>
```
