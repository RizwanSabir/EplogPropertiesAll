
import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';
import { div } from "framer-motion/client";
import ScrollProperty from "../../Components/ScrollProperty/ScrollProperty";

import { Link } from "react-router-dom"

const ExploreProperties = () => {

    let [User, setUser] = useState(['New Projects', 'NEW']);
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;

    return (
        <>

            <section className="section px-[50px] bg-slate-500">
                <h1 className="section-title-small text-white text-center mx-auto text-[25px] leading-[20px] mdm:leading-[40px] sm:text-[35px] md:text-[40px] ">
                    Explore Properties
                </h1>
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center mt-10">
                        <div className="max-w-[1140px]  mx-auto flex flex-col sm:flex-row items-center justify-center gap-10  mdm:mt-10">
                            <div className="w-[272px]  flex items-center  ">

                            </div>
                        </div>
                    </div>
                </div>


                <ScrollProperty User={User} Page={1} Image={{ default: true }} />
                <div className="max-w-[1140px] mx-auto">
                    <Link
                        to="/properties"
                        className="bg-white w-[200px] h-[50px] rounded-full ml-auto flex justify-center gap-x-3 items-center hover:cursor-pointer"
                    >
                        <span className="text-[16px] font-bold leading-[19.23px]">
                            View All
                        </span>
                        <div className="bg-black size-[35px] rounded-full text-white flex justify-center items-center">
                            <i className="fa-solid fa-arrow-right"></i>
                        </div>
                    </Link>
                </div>
            </section>
        </>
    )
}





const NavBar = ({ User, setUser }) => {
    let users = [['Buy', 'SELL'], ['New Projects', 'NEW'], ['Rent', 'RENT']]

    return (
        <>
            <div className="flex  flex-row justify-center   text-[10px] leading-[25px] sm:leading-[30px]  w-full sm:text-[12px]  sm:w-[250px]  border  rounded-full">
                <div className="flex flex-row  py-1 w-full justify-around items-center rounded-3xl bg-white">
                    {
                        users.map((user) => {
                            return (


                                user[0] === User[0] ?
                                    (<WhiteBackground key={user} user={user} setUser={setUser}>
                                        <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="explore" ></motion.div>
                                    </WhiteBackground>


                                    ) : <WhiteBackground key={user} user={user} setUser={setUser} />

                            );
                        })
                    }
                </div>
            </div>
        </>
    )
}

const WhiteBackground = ({ user, setUser, children }) => {
    return (
        <motion.div key={user} onMouseEnter={() => { setUser(user) }} className={`poppins-regular px-4 py-1   relative z-30 cursor-pointer`}>
            <h1 >{user[0]}</h1>
            {children}
        </motion.div>
    );
};

export default ExploreProperties