import { useLocation } from 'react-router-dom'

function getPageTitle(pathname: string) {
  if (pathname === '/') return 'Dashboard'
  if (pathname === '/users') return 'Users'
  if (pathname === '/orders') return 'Orders'
  return 'Dashboard'
}

export function Header() {
  const { pathname } = useLocation()
  const title = getPageTitle(pathname)

  return (
    <header className="header">
      <div>
        <p className="header__eyebrow">Business Analytics Dashboard</p>
        <h1 className="header__title">{title}</h1>
      </div>

      <div className="header__profile">
        <div className="header__avatar">OP</div>
      </div>
    </header>
  )
}