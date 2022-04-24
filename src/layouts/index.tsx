import dayjs from 'dayjs'
import { Outlet, useNavigate } from 'react-router-dom'
import { useTransition } from 'react'
import Switch from '../components/Switch'
import useDarkMode from '../hooks/useDarkMode'

export default function Layout() {
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
  const [, startTransition] = useTransition()

  const navigate = useNavigate()

  const [darkMode, setDarkMode] = useDarkMode()

  return (
    <main className="flex min-h-screen flex-col bg-gray-100 px-4 py-10 font-serif text-gray-900 transition-colors dark:bg-slate-800 dark:text-gray-200">
      <div className="flex">
        <Switch value={darkMode} onChange={setDarkMode} />
        <span className="font-medium text-gray-700 dark:text-gray-200">
          {darkMode ? 'dark' : 'light'}
        </span>
      </div>
      <div className="flex-1">
        <Outlet />

        <ul className="flex flex-wrap space-x-4 pt-4">
          <li className="font-bold">Routes:</li>
          {routes.map((item) => (
            <li
              className="cursor-pointer text-primary-500 underline"
              key={item.name}
              onClick={() => {
                startTransition(() => {
                  navigate(item.to)
                })
              }}
            >
              {item.name}
            </li>
          ))}
        </ul>
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
