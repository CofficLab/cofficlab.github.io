---
title: LocalDB
description: LocalDB 插件是 JuiceEditor 的本地数据库，用于存储编辑器中的数据。
---

LocalDB 实现了以下功能：

- 系统加载完毕后，从 LocalStorage 读取数据，通过 API 将内容写入内核
- 当编辑器内容有更新时，将新内容写入 LocalStorage
