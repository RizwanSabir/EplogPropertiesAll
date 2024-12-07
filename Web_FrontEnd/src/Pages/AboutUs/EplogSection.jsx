import React from 'react'

const EplogSection = () => {
    return (

        <>

            <section className="py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="w-full md:w-1/2 mb-5 md:mb-0">
                            <img
                                src="/Svg/left-img.svg"
                                alt=""
                                className="w-full"
                            />
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-6">
                            <p className="mb-4"></p>
                            <p>
                                Whether you are looking for home sale, buying, selling, and leasing properties, real estate website, or holiday homes for sale, our experienced team of realtors is here to guide you through every step of the process. We understand the importance of finding your dream home, and our commitment to excellence ensures that we deliver exceptional results.
                            </p>
                            <p></p>
                            <div className='mt-5'>
                                <a href="https://eplogproperties.com/contact-us/" className="bg-primary btn text-white py-2 px-5 rounded hover:bg-transparent hover:border-primary hover:text-primary" target="_self">
                                    Get In Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EplogSection