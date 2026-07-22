# bytemd-plugin-mermaid

[![npm](https://img.shields.io/npm/v/bytemd-plugin-mermaid.svg)](https://npm.im/bytemd-plugin-mermaid)

A bytemd plugin that supports Mermaid diagram.

## Usage

```bash
pnpm add bytemd @bytemd/react bytemd-plugin-mermaid
```

````js
import { Editor } from '@bytemd/react'
import mermaid from 'bytemd-plugin-mermaid'
import { useState } from 'react'
import 'bytemd/dist/index.css'

const plugins = [
  mermaid({
    theme: 'dark',
  }),
]

export default function App() {
  const [value, setValue] = useState('```mermaid\nflowchart TD\nA[Dark mode] --> B[Mermaid]\n```')

  return <Editor value={value} plugins={plugins} onChange={setValue} />
}
````

## Options

Mermaid options are passed through to `mermaid.initialize()`. For example, use `theme: 'dark'` to render diagrams with Mermaid's built-in dark theme.

## Credits

Forked from [@bytemd/plugin-mermaid](https://github.com/pd4d10/bytemd/tree/main/packages/plugin-mermaid) ❤️

## License

MIT License © [Frankie](https://github.com/tofrankie)
