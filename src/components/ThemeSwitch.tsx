import useTheme from '../hooks/theme'

export default function ThemeSwitch() {
  const [theme, toggle] = useTheme()

  return (
    <div className="flex">
      <div className="relative mr-2 inline-block w-10 select-none align-middle">
        <input
          checked={theme === 'dark'}
          onChange={toggle}
          type="checkbox"
          name="toggle"
          id="Blue"
          className="absolute right-4 block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white outline-none duration-200 ease-in checked:right-0 checked:bg-slate-500 focus:outline-none"
        />
        <label
          htmlFor="Blue"
          className="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300"
        ></label>
      </div>
      <span className="font-medium text-gray-700 dark:text-gray-200">
        {theme}
      </span>
    </div>
  )
}
