import React from 'react'
import './index.css'

const EplogSection = () => {
  return (
    <>
      <div className={`bg-right bg-no-repeat md:bg-[url("/Media/buy-sell.svg")] relative text-[10px] lg:text-[20px]`}>
        <section className="py-12 max-w-[1140px] mx-auto">
          <div className=" w-full  px-4">
            <div className="flex w-full flex-wrap">
              <div className="w-full md:w-1/2">
                <img
                  src="/Media/mobile-buy-sell-image.svg"
                  className="block md:hidden mb-5 ml-auto"
                  alt=""
                />
                <h1 className="text-[52px] font-bold" style={{ lineHeight: '57px', letterSpacing: '-3px' }}>
                  Buy &amp; Sell
                  <br />
                  With Ease
                </h1>
                <p className="mt-3">
                  At Eplog we simplify property transactions in the UAE. Whether you're buying or
                  selling, our goal is to make the process easy, efficient, and stress-free.
                </p>
                <div className="flex flex-wrap mt-5">
                  <div className="w-full md:w-1/2 mb-5 border-b border-gray-300 md:border-none">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://eplogproperties.com/wp-content/uploads/2023/10/icon1.svg"
                          width="30"
                          alt=""
                        />
                        <h4 className="text-xl font-semibold">
                          Effortless
                          <br />
                          Transactions
                        </h4>
                      </div>
                      <p>We streamline the process, so you can buy or sell without the hassle.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-5 border-b border-gray-300 md:border-none">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://eplogproperties.com/wp-content/uploads/2023/10/icon2.svg"
                          width="30"
                          alt=""
                        />
                        <h4 className="text-xl font-semibold">
                          Minimize
                          <br />
                          Stress
                        </h4>
                      </div>
                      <p>Let us handle the details while you focus on your real estate goals.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-5 border-b border-gray-300 md:border-none">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://eplogproperties.com/wp-content/uploads/2023/10/icon3.svg"
                          width="30"
                          alt=""
                        />
                        <h4 className="text-xl font-semibold">
                          Your Success,
                          <br />
                          Our Mission
                        </h4>
                      </div>
                      <p>We're committed to helping you achieve your property dreams with ease.</p>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mb-5 ">
                    <div className="p-4">
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src="https://eplogproperties.com/wp-content/uploads/2023/10/icon4.svg"
                          width="30"
                          alt=""
                        />
                        <h4 className="text-xl font-semibold">
                          Guidance You
                          <br />
                          Can Trust
                        </h4>
                      </div>
                      <p>Rely on our expertise to make informed decisions.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mt-5">
                <a href="https://calendly.com/eplogproperties/30min" className="btn bg-primary text-white py-2 px-4 rounded">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EplogSection
