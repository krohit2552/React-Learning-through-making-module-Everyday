import React from 'react'
import {Outlet,Link} from "react-router-dom"

function Layout() {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to = '/'>Home</Link>
                </li>
                <li>
                    <Link to = '/blogs'>Blogs</Link>
                </li>
                <li>
                    <Link to = '/contact'>Contact</Link>
                </li>
                <li>
                    <Link to = '*'>NoPage</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
  )
}

export default Layout