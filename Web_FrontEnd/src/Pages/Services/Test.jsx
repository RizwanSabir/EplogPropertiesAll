import React, { useState } from 'react'
import {AnimatePresence,motion} from 'framer-motion'
import './Index.css'

const ServiceSection = () => {
    return (

        <>
            <div className='mdm:grid mdm:grid-cols-2 w-full  '>
                <ServiceBox />
            </div>


        </>
    )
}


const ServiceBox = () => {

    const [openAccordion, setOpenAccordion] = useState(1);

   

    return (
        <div className="service-box w-[290px] sm:w-[500px] mdm:w-full mx-auto  px-[30px] h-fit   py-10">
            <h4 className="counter hidden mdm:block text-4xl font-bold">01</h4>
            <div className='  mdm:hidden flex justify-between '>
                        <p className="mb-0 service-title mdm:font-bold ">
                            Buying, Selling &amp;<br /> Leasing Properties
                        </p>
                        <div className='  bg-[#7C3EFF] size-[30px] mdm:hidden rounded-full flex justify-center items-center text-white' onClick={() => { setOpenAccordion(!openAccordion) }}>
                            <div className='p-10'>
                                <i className=" p-10 fa-solid fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

<AnimatePresence>

{openAccordion?
            <motion.div className="mdm:flex    w-full "
            
            
            initial={{ height: 0,opacity:0 }}
            animate={{ height: 'auto' ,opacity:1}}
            exit={{ height: 0,opacity:1}}
            transition={{ duration: 0.3 }}
            >
                <div className=' mdm:w-[40%]  '>
                    <div className='flex justify-between '>
                        <p className="hidden mdm:block mb-0 service-title mdm:font-bold ">
                            Buying, Selling &amp;<br /> Leasing Properties
                        </p>
                      
                    </div>
                    <img
                    className='mt-5 xs:mt-0'
                        src="https://eplogproperties.com/wp-content/uploads/2023/10/step-1.svg"
                        alt="Step 1"
                    />
                </div>
                <div className='lg:px-10 mdm:w-[60%]'>
                    <p>
                        At Eplog Properties, we offer comprehensive services for buying,
                        selling, and leasing properties in Dubai.
                    </p>
                    <p className='mt-5'>
                        Whether you’re looking to purchase your dream home, sell your
                        existing property, or find a suitable rental, our experienced team
                        is here to assist you.
                    </p>
                    <div className='mt-5'>
                        <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                            Browse Properties
                        </a>
                    </div>
                </div>
            </motion.div>:''}
</AnimatePresence>

        </div>
    );
};



export default ServiceSection