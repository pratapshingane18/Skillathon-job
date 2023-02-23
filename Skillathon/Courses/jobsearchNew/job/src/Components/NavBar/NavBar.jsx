import React from 'react'

const NavBar  = () =>{
    return (
        <div className="navBar flex justify-between items-center p-[3rem]">
            
            <div className="logoDiv">
                <h1 className="logo text-[25px] text-[#2a68ff]">
                    <strong> Job</strong> Search
                </h1>
            </div>

            <div className="menu flex gap-8">
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Companies 
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    About
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Contact
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    blog
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Sign In
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Sign Up
                </li>


            </div>
            
        </div>

    )
}

export default NavBar