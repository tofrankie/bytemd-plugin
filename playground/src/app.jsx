import { Editor } from '@bytemd/react'
import alerts from 'bytemd-plugin-github-alerts'
import { useState } from 'react'
import 'bytemd/dist/index.css'
import 'bytemd-plugin-github-alerts/index.css'
import 'github-markdown-css/github-markdown.css'

const alertsMarkdown = `
## GitHub Alerts

> Text that is a quote

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
`

const plugins = [
  alerts(), // must be placed before @bytemd/plugin-breaks
]

export default function App() {
  const [value, setValue] = useState(alertsMarkdown)

  return <Editor value={value} plugins={plugins} onChange={setValue} />
}
