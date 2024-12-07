import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Hiring = () => {
    return (
        <>
            <div className='mx-5 mt-[30px]  2xl:mt-[20px] '>
                <h1 className="text-2xl md:text-3xl  text-center  font-bold ">Currently Hiring</h1>
            </div>
            <div className='my-10  "'>
                <JobAccordion />
            </div>
        </>
    )
}


const JobAccordion = () => {

    const [openAccordion, setOpenAccordion] = useState(0);

    return (
        <>
            <motion.div
                key={openAccordion}
                initial={{ height: '105px' }}
                animate={{ height: 'auto' }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 1 }}
                className={`mx-10 ${openAccordion ? 'bg-[#F8F8F8]' : 'bg-white'} border border-[#7C3EFF] rounded-2xl    cursor-pointer overflow-hidden shadow-[11px_14px_35px_#00000014]  bg-[#F8F8F8]`} >

                <div className='sm:flex p-5 '>
                    {/* Left side */}
                    <div className='sm:w-6/12' >

                        {!openAccordion ? <>


                            <div className='flex  items-center'>
                                <div className=' w-[90%]'>
                                    <p className='font-bold text-xl'>Junior Designer</p>
                                    <p className='text-sm leading-6'>A Realtor, also known as a Real Estate Agent, is a licensed professional responsible for representing clients in the buying, selling, or renting of residential...</p>

                                </div>

                                <motion.div
                                    key={openAccordion}
                                    initial={{ rotateZ: 0 }}
                                    animate={{ rotateZ: 360 + 270 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1 }}



                                    className='sm:hidden ml-auto size-[25px] bg-[#7C3EFF] rounded-full text-[10px] flex justify-center items-center   text-white ' onClick={() => { setOpenAccordion(!openAccordion) }}>
                                    {/* onClick={() => { setOpenAccordion(!openAccordion) }} */}
                                    <i className="fa-solid fa-chevron-down"></i>

                                </motion.div>

                            </div>

                        </> : <>

                            <div className='flex  items-center'>
                                <div className=' w-[90%]'>
                                    <p className='font-bold text-xl'>Junior Designer</p>
                                    <p className='text-sm leading-6'>A Realtor, also known as a Real Estate Agent, is a licensed professional responsible for representing clients in the buying, selling, or renting of residential...</p>

                                </div>

                                <motion.div
                                    key={openAccordion}
                                    initial={{ rotateZ: 0 }}
                                    animate={{ rotateZ: 360 + 270 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1 }}
                                    className='sm:hidden ml-auto size-[25px] bg-[#7C3EFF] rounded-full text-[10px] flex justify-center items-center   text-white ' onClick={() => { setOpenAccordion(!openAccordion) }}>
                                    <i className="fa-solid fa-chevron-down"></i>
                                </motion.div>

                            </div>
                            <p className='font-semibold text-base mt-5'>Responsibilites</p>

                            <div className="flex flex-col md:flex-row  leading-[21px]  text-[16px]">
                                <div className="w-full md:w-1/2">
                                    <ol className="ps-4 list-decimal">
                                        <li>Client Consultation: Assess client needs, preferences, and budgets.</li>
                                        <li>Property Research: Stay informed about the local real estate market and compile suitable property listings.</li>
                                        <li>Property Marketing: Create marketing strategies and listings for properties.</li>
                                        <li>Property Showings: Arrange and conduct property viewings.</li>
                                        <li>Negotiation: Assist clients in making offers and negotiate transaction terms.</li>
                                        <li>Transaction Management: Guide clients through paperwork and liaise with other professionals.</li>
                                        <li>Legal and Ethical Compliance: Follow real estate laws and ethical standards.</li>
                                        <li>Market Analysis: Provide property valuations and market insights.</li>
                                        <li>Networking: Build and maintain a network of industry contacts.</li>
                                    </ol>

                                    <div className="mt-3">
                                        <p className='font-semibold text-base'>Qualifications:</p>
                                        <ul className="ps-4 list-disc">
                                            <li>Active real estate license.</li>
                                            <li>Strong local market knowledge.</li>
                                            <li>Excellent communication and organizational skills.</li>
                                            <li>Proficiency in real estate tools.</li>
                                            <li>Sales and marketing skills are advantageous.</li>
                                        </ul>
                                    </div>
                                    <div className="block md:hidden">
                                        <div>
                                            <strong>Location</strong>
                                            <p className="mb-0">Dubai, UAE</p>
                                        </div>
                                        <div>
                                            <strong>Employment Type</strong>
                                            <p className="mb-0">Full Time</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </>}

                    </div>


                    {/* Right Side */}
                    <div className=' sm:w-6/12   ml-auto'>

                        {!openAccordion ? <>

                            <div className='hidden sm:flex justify-between items-center mr-auto '>
                                <div className=''>

                                    <p className='font-bold text-xl'>Location</p>
                                    <p className='text-sm leading-6'>Dubai, UAE</p>
                                </div>
                                <div>

                                    <p className='font-bold text-xl'>Employment Type</p>
                                    <p className='text-sm leading-6'>Full time</p>
                                </div>

                                <motion.div
                                    key={openAccordion}
                                    initial={{ rotateZ: 0 }}
                                    animate={{ rotateZ: 360 + 270 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 1 }}



                                    className='size-[25px] bg-[#7C3EFF] rounded-full text-[10px] flex justify-center items-center   text-white' onClick={() => { setOpenAccordion(!openAccordion) }}>
                                    <i className="fa-solid fa-chevron-down"></i>

                                </motion.div>
                            </div>
                        </> :
                            <>
                                {/*Upper Section  */}
                                <div className=' w-full  hidden sm:flex justify-between  mr-auto  items-center'>

                                    <div className=''>

                                        <p className='font-bold text-xl'>Location</p>
                                        <p className='text-sm leading-6'>Dubai, UAE</p>
                                    </div>
                                    <div>

                                        <p className='font-bold text-xl'>Employment Type</p>
                                        <p className='text-sm leading-6'>Full time</p>
                                    </div>

                                    <motion.div
                                        key={openAccordion}
                                        initial={{ rotateZ: 0 }}
                                        animate={{ rotateZ: 360 + 270 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 1 }}



                                        className='size-[25px] bg-[#7C3EFF] rounded-full text-[10px] flex justify-center items-center   text-white' onClick={() => { setOpenAccordion(!openAccordion) }}>
                                        {/* onClick={() => { setOpenAccordion(!openAccordion) }} */}
                                        <i className="fa-solid fa-chevron-down"></i>

                                    </motion.div>


                                </div>

                                {/* Form Section */}

                                <div className={`mt-10 sm:mt-36 sm:pl-10    relative w-full before:content-[''] before:absolute sm:before:w-[1px] before:bg-[#7C3EFF] before:h-[370px] before:left-[-10px] before:top-[10px]`}>


                                    <p className='font-semibold '>Apply Now</p>

                                    <div className='flex flex-col'>
                                        <label className='font-semibold text-[16px]'>Name</label>
                                        <input type="text" placeholder='Enter your name' className='px-4 py-2 sm:w-[250px]  rounded-2xl border placeholder:text-[16px] ' name="name" />

                                    </div>
                                    <div className='flex flex-col mt-3'>
                                        <label className='font-semibold text-[16px]'>Eamil Address</label>
                                        <input type="text" placeholder='Enter your email address' className='px-4 py-2 sm:w-[250px]  rounded-2xl border placeholder:text-[16px] ' name="name" />

                                    </div>
                                    <div className='flex flex-col mt-3'>
                                        <label className='font-semibold text-[16px]'>Contact Number</label>
                                        <input type="text" placeholder='Enter your contact number' className='px-4 py-2 sm:w-[250px]  rounded-2xl border placeholder:text-[16px] ' name="name" />

                                    </div>
                                    <div className=" mb-4 mt-3 flex flex-col">
                                        <label className="font-semibold text-[16px]">Resume (pdf, Docx)</label>
                                        <button type="button" className="btn text-[14px] btn-primary rounded mt-2 w-[180px]" style={{ fontSize: "14px" }}>Upload Resume</button>
                                    </div>

                                    <div className="mb-4 flex flex-col">
                                        <label className="font-semibold text-[16px]">Cover Letter</label>
                                        <textarea name="Message" className="px-4 py-2   rounded-2xl border placeholder:text-[16px] " placeholder="Type your message..." rows="3" required></textarea>
                                    </div>
                                    <button type="button" className="btn text-[14px] btn-primary rounded mt-2 w-[100px]" style={{ fontSize: "14px" }}>Submit</button>

                                </div>




                            </>

                        }

                    </div>
                </div>





            </motion.div>



        </>
    );
};

export default Hiring