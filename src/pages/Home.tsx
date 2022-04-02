import classNames from 'classnames'
import { useEffect, useState } from 'react'

function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    console.log(isOpen)
  })
  return (
    <div
      className={classNames(
        'flex text-ellipsis text-left text-xs text-red-500'
      )}
    >
      home
      <br />
      {__VERSION__}
      <br />
      {__DATE__}
      <br />
      {__ENV__}
    </div>
  )
}

export default Home
