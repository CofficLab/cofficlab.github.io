---
title: Node
---

Node represents the document structure in JuiceEditor.

## Definition

Node is a language-agnostic data structure. For illustration, it's defined here using TypeScript.

```ts
interface Node {
  type: string;
  attrs?: Record<string, any>;
  content?: Node[];
}
```

A Node object has the following properties:

- type: Node type
- attrs: Node attributes (optional)
- content: Child nodes (optional)

## Example

```ts
const node: Node = {
  type: 'root',
  content: [
    {
      type: 'heading',
      attrs: { level: 1 },
      content: [{ type: 'text', text: 'Hello, world!' }],
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'This is a paragraph.' }],
    },
  ],
};
```
