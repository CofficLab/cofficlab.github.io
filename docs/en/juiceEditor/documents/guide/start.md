# Quick Start

This project is currently still in the development stage and is not yet stable. Please do not use it in a production environment.

## Installation

```shell
npm i @coffic/juice-editor
```

## Usage

First, import the JuiceEditor component.

```js
import editor from '@coffic/juice-editor'

editor.onCreate(() => {
    console.log('editor created')
})
```

Then, you can use it like a normal HTML tag anywhere on the page.

```html
<juice-editor></juice-editor>
```
