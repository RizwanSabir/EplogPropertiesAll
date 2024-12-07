
import React, { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../Components/Loaders/CustomLoader";
import ScrollProperty from "../../Components/ScrollProperty/ScrollProperty";

const TrendingProperties = () => {

    let [User, setUser] = useState(['New Projects', 'NEW']);
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;


    return (
        <>

            <section className="px-10 sm:px-[50px] ">
                <div className="max-w-[1140px]  mx-auto">
                    <div className=" flex justify-between items-center ">
                        <div className="w-full flex items-center justify-between mdm:gap-10">
                            <h1 className="section-title-small grow w-[190px] text-[25px] leading-[20px] mdm:leading-[40px] sm:text-[20px] md:text-[40px] ">
                                Trending
                                Properties
                            </h1>
                            <div className="line hidden md:flex">
                                <img
                                    src="/Svg/dashed-line-black.svg"
                                    className="w-full"
                                    alt="dashed-line"
                                />
                            </div>
                            <a
                                href={`${url}/properties/`}
                                className=" w-[150px]  text-[12px] sm:text-[17px] md:text-[20px] font-bold leading-[19.23px]  btn-primary text-center sm:py-2 bg-blue-500 text-white py-1 px-1 sm:px-2 rounded-[14px]"
                            >
                                View All
                            </a>
                        </div>
                    </div>
                </div>

                <div className=" max-w-[1140px]  mx-auto flex flex-col sm:flex-row items-center justify-between gap-y-4 sm:gap-10  mdm:mt-10  ">
                    <div className="w-[272px]  flex items-center  ">
                    </div>
                    {/*  back and forth batton */}
                </div>
                <ScrollProperty Page={1} />
            </section>
        </>
    )
}


export default TrendingProperties