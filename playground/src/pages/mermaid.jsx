import mermaid from 'bytemd-plugin-mermaid'
import { useState } from 'react'
import ExampleEditor from '../components/example-editor'
import ExampleLayout from '../components/example-layout'

const mermaidMarkdown = `
## Mermaid Theme

切换下方主题后，编辑器会重新初始化 \`bytemd-plugin-mermaid\`，用于观察 Mermaid 原生主题差异。

\`\`\`mermaid
flowchart TD
  A[Mermaid Theme] --> B{dark?}
  B -->|yes| C[Mermaid Dark Theme]
  B -->|no| D[Mermaid Default Theme]
\`\`\`
`

export default function MermaidPage() {
  const [theme, setTheme] = useState('default')

  return (
    <ExampleLayout
      title="Mermaid"
      description=""
      toolbar={
        <div className="mode-switcher" role="group" aria-label="切换 mermaid 主题">
          {['default', 'dark'].map(value => (
            <button
              key={value}
              type="button"
              className={value === theme ? 'is-active' : undefined}
              onClick={() => setTheme(value)}
            >
              {value === 'default' ? '默认' : '深色'}
            </button>
          ))}
        </div>
      }
    >
      <ExampleEditor
        editorKey={theme}
        initialValue={mermaidMarkdown}
        plugins={[
          mermaid({
            theme,
          }),
        ]}
      />
    </ExampleLayout>
  )
}
