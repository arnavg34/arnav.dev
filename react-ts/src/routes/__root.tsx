import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import NavBar from "../components/NavBar";
import Hero from "../components/Hero"
import "../index.css"
export const Route = createRootRoute({
  component: () => (
    <>
    <NavBar />
    <Hero />
    {/* <hr />
    <Outlet /> */}
    <TanStackRouterDevtools />
  </>
  ),
})
