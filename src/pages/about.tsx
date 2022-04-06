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
        timeout={250}
        classNames={{
          enter: 'animate-fade-in',
          exit: 'animate-fade-out',
        }}
      >
        <div className="h-40 w-40 bg-gray-300 shadow-lg"></div>
      </CSSTransition>
    </div>
  )
}
