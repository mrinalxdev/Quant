import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <h2>Planetery.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>

            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
