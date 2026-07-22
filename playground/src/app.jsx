import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import { ROUTES } from './constants'
import GithubAlertsPage from './pages/github-alerts'
import HomePage from './pages/index'
import MermaidPage from './pages/mermaid'

function AppShell() {
  return <Outlet />
}

const exampleRouteElements = {
  'github-alerts': <GithubAlertsPage />,
  mermaid: <MermaidPage />,
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      ...ROUTES.map(route => ({
        path: route.path,
        element: exampleRouteElements[route.id],
      })),
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
