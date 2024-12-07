import React from 'react'
import './index.css';
const LandDevelopement = () => {
  return (
   <>
   
   <section className="section bg-[url('/Media/lang-bg.svg')] bg-center bg-[var(--fonts-color)] pb-0 h-fit lg:h-[640px] pt-[40px]">
  <div className="flex flex-col sm:flex-row gap-y-5    items-center justify-end sm:absolute sm:right-[17%] sm:gap-[23px] -top-[60px]">
    <div className="learn-more-box text-start  bg-title-color text-white flex items-center  justify-around p-[1px] md:p-[30px] rounded-[48px] w-[250px] md:w-[304px] h-[100px] lg:h-[132px] sm:ml-auto">
      <p className="mb-0">
        Business Setup,<br />
        Legal Services<br />
        &amp; Golden Visa
      </p>
      <div className="arrow text-center">
        <a href="https://calendly.com/eplogproperties/30min">
          <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>
    </div>

    <div className=" bg-yellow text-black bg-title-color  flex items-center  justify-around p-[1px] md:p-[30px] rounded-[48px] w-[250px] md:w-[250px] h-[100px] lg:h-[132px] sm:ml-auto text-start">
      <p className="mb-0">
        Developers <br />
        Advisory
      </p>
      <div className="arrow text-center">
        <a href="https://calendly.com/eplogproperties/30min">
          <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>
    </div>
  </div>

<div className=' mt-5 lg:mt-10 h-full'>
  
<div
    className=" bg-no-repeat bg-left w-full h-[280px] xxs:h-[400px] sm:h-[450px] md:h-[450px] lg:h-[520px] md:absolute bg-contain  "
    style={{
      backgroundImage:
        "url('/Media/land-developement.svg')",
    }}
  ></div>

  <div className="  mt-5  lg:flex  h-full  justify-center items-center">
    <div className=" flex flex-col md:flex-row mt-5">
      <div className="w-full md:w-1/2"></div>
      <div className="w-[80%]   md:w-[60%] mt-0 lg:mt-5 ">
        <h1 className="section-title text-white">
          Land acquisition &amp;<br />
          land development
        </h1>
        <p className="mt-3 text-white">
          Our property handover and snagging services are meticulously designed
          to offer complete peace of mind.
        </p>
        <p className="mt-4 text-white">
          We conduct an exhaustive inspection to identify and document any
          issues, ensuring every aspect of your property is in top condition
          before handover.
        </p>

        <a
          href="https://calendly.com/eplogproperties/30min"
          className="btn btn-primary block w-[200px] text-center mt-10 mb-0 mb-md-4 "
        >
          Free Consultancy
        </a>
      </div>
    </div>
  </div>
</div>
</section>

   
   </>
  )
}

export default LandDevelopement