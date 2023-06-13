import { Outlet } from "react-router-dom"
import { Navbar } from "."
import { CategoryBar } from "./CategoryBar"

export const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <CategoryBar></CategoryBar>
      <Outlet></Outlet>
    </div>
  )
}
