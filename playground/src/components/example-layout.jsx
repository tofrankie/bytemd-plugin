import { NavLink } from 'react-router-dom'

export default function ExampleLayout({ title, description, toolbar, children }) {
  return (
    <section className="example-shell">
      <header className="example-header">
        <div className="example-meta">
          <NavLink to="/" className="back-link">
            返回首页
          </NavLink>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {toolbar ? <div className="example-toolbar">{toolbar}</div> : null}
      </header>

      <div className="example-body">{children}</div>
    </section>
  )
}
