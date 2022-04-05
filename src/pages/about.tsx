import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

export default function About() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex">
      <div className="mr-5">
        <p>use react-transition-group with tailwindcss</p>
        <button
          className="border bg-primary-500 px-6 py-2 shadow"
          onClick={() => {
            setIsOpen(!isOpen)
          }}
        >
          Toggle
        </button>
      </div>
      <CSSTransition
        unmountOnExit
        in={isOpen}
        timeout={200}
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-70',
          enterDone: 'opacity-100',
          exit: 'opacity-70',
          exitActive: 'opacity-25',
          exitDone: 'opacity-0',
        }}
      >
        <div className="h-40 w-40 bg-gray-300 shadow-lg transition-opacity duration-200"></div>
      </CSSTransition>
    </div>
  )
}
