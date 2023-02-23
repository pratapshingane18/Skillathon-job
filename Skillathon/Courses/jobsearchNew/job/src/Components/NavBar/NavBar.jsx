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
                    <a href='jobsearchNew\job\src\Job.jsx'>Home</a>
                </li>
                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Job
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Courses
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Scholarships
                </li>

                <li className="menuList text-[#6f6f6f] hover:text-blueColor">
                    Mentors
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