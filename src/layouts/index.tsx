import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="flex flex-col">
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/404">not found</Link>
        <Link to="/home">home</Link>
      </div>
      <Outlet />
    </>
  )
}

export default Layout
