import React from "react"



const Header = () => {
  return (
    <div className="site-header absolute top-0  flex items-center w-full h-[80px] pl-4 lg:hidden">
      <div className="container">
        <img className="w-[170px] invert" src="https://connecteam.com/static/frontend-home-task/svg/logo.svg" alt="logo" />
      </div>
    </div>
  )
}

export default Header
