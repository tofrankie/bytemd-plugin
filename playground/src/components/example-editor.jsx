import { Editor } from '@bytemd/react'
import { useState } from 'react'

export default function ExampleEditor({ initialValue, plugins, editorKey }) {
  const [value, setValue] = useState(initialValue)

  return <Editor key={editorKey} value={value} plugins={plugins} onChange={setValue} />
}
