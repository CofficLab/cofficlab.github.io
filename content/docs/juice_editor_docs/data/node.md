---
title: Node
description: JuiceEditor 的数据结构主要由 Node 组成，Node 是 JuiceEditor 中最基础的数据结构，所有的内容都是由 Node 组成的。
---

JuiceEditor 的数据结构主要由 Node 组成，Node 是 JuiceEditor 中最基础的数据结构，所有的内容都是由 Node 组成的。

## 定义

Node 是一个与编程语言无关的数据结构，为方便说明，用 TypeScript 来定义。

```ts
interface Node {
  type: string;
  html?: string;
  text?: string;
  attrs?: Record<string, any>;
  content?: Node[];
}
```

Node 是一个对象，它包含了以下几个属性：

- type: 节点类型
- html: 节点对应的 HTML 字符串
- text: 节点对应的文本字符串
- attrs: 节点对应的属性
- content: 节点包含的子节点

## 节点类型

JuiceEditor 中的节点类型众多，且可能会增加，主要的有：

- root：根节点，所有节点都包含在根节点中
- text：文本节点，是最基础的节点，无子节点
- paragraph：段落节点，包含文本节点
- heading：标题节点，包含文本节点
- list：列表节点
- quote：引用节点

## HTML

仅 root 节点有 html 属性，其他节点没有。

如：

```ts
const node: Node = {
  type: 'root',
  html: '<div data-type="root"><h1>Hello, world!</h1><p>This is a paragraph.</p></div>',
};
```

HTML 存储了文档的所有数据，可以和 Root 节点相互转换。

以上例子转换成 Root 节点后为：

```ts
{
  type: 'root',
  content: [
    {
        type: 'heading',
        attrs: { level: 1 },
        content: [{ type: 'text', text: 'Hello, world!' }]
    },
    {
        type: 'paragraph',
        content: [{ type: 'text', text: 'This is a paragraph.' }]
    }
  ]
};
```

将上述数据存入数据库，有时候需要将其扁平化，转换成多个 Node 的数组。

```ts
const nodes: Node[] = [
  { type: 'root' },
  { type: 'heading', attrs: { level: 1 } },
  { type: 'text', text: 'Hello, world!' },
  { type: 'paragraph' },
  { type: 'text', text: 'This is a paragraph.' },
];
```

在数据库中表现为多行数据：

| id  | type      | text                   | parent_id |
| --- | --------- | ---------------------- | --------- |
| 1   | root      | null                   | null      |
| 2   | heading   | null                   | 1         |
| 3   | text      | 'Hello, world!'        | 2         |
| 4   | paragraph | null                   | 1         |
| 5   | text      | 'This is a paragraph.' | 4         |
