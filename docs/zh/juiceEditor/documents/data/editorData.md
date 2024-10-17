# EditorData

EditorData 包含了所有编辑器中的数据。

## 定义

EditorData 是一个与编程语言无关的数据结构，为方便说明，用 TypeScript 来定义。

```ts
interface EditorData {
  title: string;
  html: string;
  node: Node;
  wordCount: number;
  characterCount: number;
}
```

EditorData 是一个对象，它包含了以下几个属性：

- title: 文档的标题
- html: 文档的 HTML 字符串
- node: 文档的节点对象，是 HTML 的另一种表示方式
- wordCount: 文档的单词数
- characterCount: 文档的字符数

当文档内容发生变化时，JuiceEditor 会自动更新 EditorData 中的数据，并传递到外部。

## 示例

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
  wordCount: 1,
  characterCount: 1,
};
```

## 转换

