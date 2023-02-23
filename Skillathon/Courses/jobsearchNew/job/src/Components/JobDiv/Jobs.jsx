import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

const Jobs  = () =>{
    return (
        <div> 
            
            <div className = "jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

                <div className="group group/item singlejob w-[250px] p-[20px] bg-white rounded[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                    <span className='flex justify-between items-center gap-4'>
                        <h1 className ='text-[16px] font-semibold text-textColor group-hover:text-red'>
                            Web Developer
                        </h1>
                   

                    <span className="flex items-center text-[#000] gap-1">
                        <BiTimeFive />Now
                    </span>

                    </span>

                    <h6 className ="text-[#000]">India</h6>

            <p className ='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-[#000]'>
                
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Provident, dignissimos accusamus autem minus assumenda
                  placeat quae ratione odit dolore expedita?
                  
            </p>

                </div>
            </div>

        </div>

    )
}

export default Jobs