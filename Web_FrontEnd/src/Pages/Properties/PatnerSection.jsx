import React from 'react';

const PatnerSection = () => {
    return (
        <>
            <div className="relative mx-10  xxs:mt-[250px] xs:mt-[200px] sm:mt-[200px] mdm:mt-[200px] xl:mt-[200px]">
                <div className="max-w-[1140px]  mx-auto px-4  relative overflow-hidden rounded-xl mb-10 pb-32 ">
                    <div className="flex flex-col items-center w-full justify-center mt-8 z-20 ">
                        <h1 className="section-title-small  text-[20px] md:text-[30px] ">Trusted By</h1>

                        {/* Logo container */}
                        <div className=" md:my-4 w-full overflow-x-auto hide-scrollbar md:mr-28">

                            <div className="grid grid-cols-2 xs:grid-cols-3 gap-y-3 mdm:gap-y-5  items-center justify-items-center justify-around  mx-auto  sm:w-[600px]  mdm:w-[800px]  bg-slate-100 py-5 mdm:py-10 rounded-xl">
                                <div className='outline-[1px] p-1 mdm:p-2 flex justify-center items-center rounded-lg outline  mdm:h-[70px]'>
                                    <img

                                        src="/Svg/dubai-properties.svg"
                                        
                                        className=" w-[60px] h-[60px] md:w-[100px] p-1 shrink-0"
                                        alt="Dubai Properties"
                                    />
                                </div>

                                <div className='outline-[1px]  flex justify-center items-center rounded-lg outline  h-[60px] w-[70px] md:w-[120px]'>

                                    <img
                                     className=" !w-[50px] md:!w-[120px]  md:p-2 shrink-0"
                                        src="/Svg/nakheel.svg"
                                        
                                        alt="Nakheel"
                                    />
                                </div>

                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className=" w-[50px] md:w-[100px] p-1 shrink-0"
                                        src="/Svg/meraas.svg"
                                        width 
                                       
                                       
                                        alt="Meraas"
                                    />
                                </div>

                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className=" !w-[50px] h-[60px] md:!w-[100px] p-1 shrink-0"
                                        src="/Svg/damac.svg"
                                        
                                        alt="Damac"
                                    />
                                </div>
                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                        className=" w-[50px] md:w-[100px] p-1 shrink-0"
                                        src="/Svg/danube-properties.svg"
                                        width="100"

                                        alt="Danube Properties"
                                    />
                                </div>
                                <div className='outline-[1px] p-2 flex justify-center items-center rounded-lg outline  h-[70px]'>

                                    <img
                                    className=" w-[50px] md:w-[100px] p-1 shrink-0"
                                        src="/Svg/emaar.svg"
                                        width="100"
                                       
                                        alt="Emaar"
                                    />
                                </div>
                            </div>
                        </div>

                        <img src="/Media/Patner.png" className='absolute -z-10 md:mt-10 md:h-[400px] xs:h-[300px] h-[400px] w-full xs:w-fit xs:right-0' alt="" />
                    </div>
                </div>


            </div>


        </>
    );
};

export default PatnerSection;
