import { Outlet } from "react-router-dom"
import { Navbar } from "."

export const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  )
}
