import React from 'react'
import {IoMdSpeedometer} from "react-icons/io"
import {MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {AiOutlinePieChart} from 'react-icons/ai'
import {BiTrendingUp} from 'react-icons/bi'
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
                <IoMdSpeedometer className/>
                <span className="smallText">
                  Dash Board
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdDeliveryDining className/>
                <span className="smallText">
                  My Order
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdOutlineExplore className/>
                <span className="smallText">
                 Explore
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BsTrophy className/>
                <span className="smallText">
                  Products
                </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
         SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <AiOutlinePieChart className/>
                <span className="smallText">
                  Dash Board
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <BiTrendingUp className/>
                <span className="smallText">
                  Trends
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdOutlineExplore className/>
                <span className="smallText">
                 Explore
                </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
                <MdOutlinePermContactCalendar className/>
                <span className="smallText">
                  Contacts
                </span>
            </a>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Sidebar
