import alerts from 'bytemd-plugin-github-alerts'
import ExampleEditor from '../components/example-editor'
import ExampleLayout from '../components/example-layout'

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

export default function GithubAlertsPage() {
  return (
    <ExampleLayout title="GitHub Alerts" description="">
      <ExampleEditor
        initialValue={alertsMarkdown}
        plugins={[
          alerts(), // must be placed before @bytemd/plugin-breaks
        ]}
      />
    </ExampleLayout>
  )
}
