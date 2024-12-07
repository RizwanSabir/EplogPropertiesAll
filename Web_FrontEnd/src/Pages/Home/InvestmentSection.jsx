import React from 'react'

const InvestmentSection = () => {
  return (
    <>
    <section className=" md:py-12 ">
    <div className="max-w-[1140px]  mx-auto px-2 md:px-4 investment-section"> 
        <div className="flex ">
            <div className="learn-more-box bg-title-color text-white flex items-center  justify-around p-[1px] md:p-[30px] rounded-[48px] w-[250px] md:w-[304px] h-[100px] lg:h-[132px] ml-auto">
                <div >
                    <p className="  text-base md:text-2xl font-semibold leading-tight">
                        Institutional<br/>
                        Investment
                    </p>
                </div>
                <div className="mt-4 text-center">
                    <a href="https://eplogproperties.com/contact-us/" target="_self" className="inline-block">
                        <i className="fa fa-arrow-right text-2xl"></i><br/>
                        <span className="text-sm font-medium">Get In Touch</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

    
    </>
  )
}

export default InvestmentSection