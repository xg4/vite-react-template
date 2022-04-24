interface SwitchProps {
  value: boolean
  onChange: (value: boolean) => void
}

export default function Switch({ value, onChange }: SwitchProps) {
  return (
    <div className="relative mr-2 inline-block w-10 select-none align-middle">
      <label className="block h-6 cursor-pointer overflow-hidden rounded-full bg-gray-300">
        <input
          checked={value}
          onChange={() => {
            onChange(!value)
          }}
          type="checkbox"
          className="absolute right-4 block h-6 w-6 cursor-pointer appearance-none rounded-full border-4 bg-white outline-none duration-200 ease-in checked:right-0 checked:bg-slate-500 focus:outline-none"
        />
      </label>
    </div>
  )
}
