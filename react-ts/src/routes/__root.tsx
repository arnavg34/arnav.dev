import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { useEffect } from 'react'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import "../index.css"

const RootComponent = () => {
  const location = useLocation()

  useEffect(() => {
    const id = location.pathname.slice(1) || 'hero'
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }, [location.pathname])

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
