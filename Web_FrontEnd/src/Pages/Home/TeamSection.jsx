import React from 'react'

const TeamSection = () => {
  return (
    <>

      <section className="section  ">
        {/* Desktop section :: BEGIN */}
        <div className="team-data hidden md:block">
          <div className="team  team-1 w-1/2">
            <img src="https://eplogproperties.com/wp-content/uploads/2023/10/1-1.svg" alt="Team Member 1" />
          </div>
          <div className="team team-2 w-1/2">
            <img src="https://eplogproperties.com/wp-content/uploads/2023/10/2-1.svg" alt="Team Member 2" />
          </div>
          <div className="about-team  md:leading-[26px] md:text-[19px] w-full text-center text-white">
            <h1 className="text-white font-bold lg:text-[35px] lg:leading-[36.47px] lg:tracking-[-1.5px]">
              Meet Our Expert <br /> Real Estate Team
            </h1>
            <p className="mt-3 mb-4">
              We're a passionate group of real estate professionals dedicated to providing you with top-notch service and expertise.
              With years of experience in the UAE real estate market, we've honed our skills and built a deep understanding of the industry.
            </p>
            <p className="mt-3 mb-5">
              What sets us apart is our commitment to your needs and our unwavering focus on delivering exceptional results. Whether
              you're buying, selling, or investing, you can trust our team to guide you with integrity, knowledge, and a friendly approach.
              Your real estate journey is our priority, and we're here to make it a seamless and enjoyable experience.
            </p>
            <a href="https://calendly.com/eplogproperties/30min" className="btn bg-primary text-white py-2 px-4 rounded-lg">
              Get in Touch
            </a>
          </div>


        </div>
        {/* Desktop section :: END */}

        {/* Mobile section :: BEGIN */}
        <div className="block md:hidden">

          <div className="about-team  md:leading-[26px] md:text-[19px] w-full  text-white">
            <h1 className="text-white font-bold lg:text-[35px] lg:leading-[36.47px] lg:tracking-[-1.5px]">
              Meet Our Expert <br /> Real Estate Team
            </h1>
            <p className="mt-3 mb-4">
              We're a passionate group of real estate professionals dedicated to providing you with top-notch service and expertise.
              With years of experience in the UAE real estate market, we've honed our skills and built a deep understanding of the industry.
            </p>
            <p className="mt-3 mb-5">
              What sets us apart is our commitment to your needs and our unwavering focus on delivering exceptional results. Whether
              you're buying, selling, or investing, you can trust our team to guide you with integrity, knowledge, and a friendly approach.
              Your real estate journey is our priority, and we're here to make it a seamless and enjoyable experience.
            </p>
            <a href="https://calendly.com/eplogproperties/30min" className="btn bg-primary text-white py-2 px-4 rounded-lg">
              Get in Touch
            </a>
          </div>
          <div className=" bg-[#3ED1FF] align-bottom cursor-pointer relative h-full  flex justify-start">
            <img
              src="https://eplogproperties.com/wp-content/uploads/2023/10/1-1.svg"
              alt="Saliq Zahoor"
              className=" h-[200px] transform rotate-y-188 w-[200px]"
            />


            <div className="ml-4  flex flex-col justify-center">
              <h3 className=" text-[22px] font-bold leading-[21.5px]">Saliq Zahoor</h3>
              <p className="text-[22px] font-bold leading-[21.5px] mt-2">Founder</p>
            </div>
          </div>

          <div className=" bg-[#3ED1FF] align-bottom cursor-pointer relative h-full  flex justify-start">

            <img
              src="https://eplogproperties.com/wp-content/uploads/2023/10/2-1.svg"
              alt="Saliq Zahoor"
              className=" h-[200px] transform rotate-y-188 w-[200px]"
            />
            <div className="ml-4  flex flex-col justify-center">
              <h3 className="text-[22px] font-bold leading-[21.5px]  ">Anife</h3>
              <p className="text-[22px] font-bold leading-[21.5px] mt-2">Co-founder</p>
            </div>
          </div>
        </div>
        {/* Mobile section :: END */}
      </section>

    </>
  )
}

export default TeamSection