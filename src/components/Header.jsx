
import React from "react";

const Header = ({ logoClass }) => {
  return (
    <header className="site-header fixed top-0 flex items-center w-screen py-4 lg:py-16 h-[80px] pl-4">
      <div className="container lg:mx-auto lg:w-3/5">
        <img className={`logo w-[170px] ${logoClass}`} src="https://connecteam.com/static/frontend-home-task/svg/logo.svg" alt="logo" />
      </div>
    </header>
  );
};

export default Header;
