import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

export default function HomePage() {
  return (
    <main className="home-page markdown-body">
      <h1>Bytemd Plugin Playground</h1>
      <p>这里提供按路由划分的最小示例入口，用来分别验证不同插件能力。</p>
      <ul>
        {ROUTES.map(route => (
          <li key={route.id}>
            <Link to={route.path}>{route.title}</Link>
            {` - ${route.description}`}
          </li>
        ))}
      </ul>
    </main>
  )
}
