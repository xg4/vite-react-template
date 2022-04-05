import dayjs from 'dayjs'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  const routes = [
    {
      to: '/',
      name: 'Home',
    },
    {
      to: '/about',
      name: 'About',
    },
    {
      to: '/404',
      name: '404',
    },
  ]
  return (
    <main className="flex min-h-screen flex-col bg-gray-100 px-4 py-10 font-serif text-gray-900">
      <div className="flex-1">
        <Outlet />

        <div className="space-x-4 pt-4">
          <span className="font-bold">Routes:</span>
          {routes.map((item) => (
            <Link
              className="text-primary-500 underline"
              key={item.name}
              to={item.to}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-wrap justify-between text-xs">
        <p>app version: {__APP_VERSION__}</p>
        <p>app env:{__APP_ENV__}</p>
        <p>app branch:{__APP_BRANCH__}</p>
        <p>build date: {dayjs(__BUILD_DATE__).format('YYYY-MM-DD HH:mm:ss')}</p>
      </div>
    </main>
  )
}

export default Layout
