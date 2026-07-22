# bytemd-plugin-mermaid

[![npm](https://img.shields.io/npm/v/bytemd-plugin-mermaid.svg)](https://npm.im/bytemd-plugin-mermaid)

A bytemd plugin that supports Mermaid diagram.

## Usage

```js
import { Editor } from 'bytemd'
import mermaid from 'bytemd-plugin-mermaid'

new Editor({
  target: document.body,
  props: {
    plugins: [
      mermaid(),
      // ... other plugins
    ],
  },
})
```

## Credits

Forked from [@bytemd/plugin-mermaid](https://github.com/pd4d10/bytemd/tree/main/packages/plugin-mermaid) ❤️

## License

MIT License © [Frankie](https://github.com/tofrankie)
