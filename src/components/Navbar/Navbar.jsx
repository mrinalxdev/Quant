import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center p-[3rem]'>
      <div className="logoDiv">
        <div className="logo text-[25px] text-blueColor"><strong>Quant</strong></div>
      </div>

      <div className="menu flex gap-8">
      <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Jobs</li>
      <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Companies</li>
      <li className='menuList text-[#6f6f6f] hover:text-blueColor'>About</li>
      <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Contact</li>
      <li className='menuList text-[#6f6f6f] hover:text-blueColor'>Blogs</li>
      </div>
    </div>
  )
}

export default Navbar