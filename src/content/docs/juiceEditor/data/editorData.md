---
title: EditorData
---

EditorData contains all the data in the editor.

## Definition

EditorData is a language-agnostic data structure. For illustration, it's defined here using TypeScript.

```ts
interface EditorData {
  title: string;
  html: string;
  node: Node;
  wordCount: number;
  characterCount: number;
}
```

EditorData is an object with the following properties:

- title: Document title
- html: Document HTML string
- node: Document node object, an alternative representation of HTML
- wordCount: Word count of the document
- characterCount: Character count of the document

JuiceEditor automatically updates the data in EditorData when the document content changes and passes it externally.

## Example

```ts
const editorData: EditorData = {
  title: 'Hello, world!',
  html: '<div data-type="root"><h1>Hello, world!</h1><p>This is a paragraph.</p></div>',
  node: { 
    type: 'root', 
    content: [
      { 
        type: 'heading', 
        attrs: { level: 1 }, 
        content: [
          { type: 'text', text: 'Hello, world!' }
        ] 
      },
      { 
        type: 'paragraph', 
        content: [
          { type: 'text', text: 'This is a paragraph.' }
        ] 
      }
    ]
  },
  wordCount: 5,
  characterCount: 32,
};
```

## Conversion
