# Image

The Image component is used to display an image on the page.

![Image Component](/images/juiceEditor/component-image.png)

You can see an example here: https://www.kuaiyizhi.cn/ideas/32C93F12-DD0C-487C-83FC-967CD07CBE2A

## Drawio Diagramming

### Source Code

<https://github.com/jgraph/drawio>

If the source code is updated, copy the `webapp` folder from the source to `drawio`.

- etc

### Principle

There's no need to modify the drawio source code. In embed mode, communication can be achieved through postMessage. See the `SmartDraw` part of the source code for details.

### Issues

- "Sticky notes" appear on the left side  
Clearing the browser's local storage will make them disappear
- Unable to open the diagram
Check the URL in this file: `src/entities/DrawAgent.ts`

### References

- <https://www.drawio.com/blog/embedding-walkthrough>  
- <https://www.drawio.com/doc/faq/embed-mode>  