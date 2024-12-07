import React from 'react'
import RoundedInput from '../../Components/InputField/RoundedInput'
import RoundedMesage from '../../Components/InputField/RoundedMesage'

const ContactUs = () => {
  return (
    <>
    
    <section className="py-12 bg-gray-100">
    <div className="mx-2 sm:mx-10 md:ml-[100px] ">
        <div className="flex flex-wrap -center">
            <div className="w-full mb-8">
                <h1 className="section-title">Contact us</h1>
                <p className="text-gray-600">Let’s get in touch and find you the best solution from the real estate.</p>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2">
            
                <form action="/#wpcf7-f295-o2" method="post" className="w-full" aria-label="Contact form" novalidate="novalidate">
                  
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full md:w-1/2 px-4 mb-6">
                         
                            <RoundedInput placeholder={"Enter your Name"} Label={"Name"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Enter your email address"} Label={"Email"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Enter Contact Number"} Label={"Contact Number"}/>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-6">
                            <RoundedInput placeholder={"Your Interest"} Label={"Subject"}/>
                        </div>
                        <div className="w-full px-4">
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                           <RoundedMesage placeholder={"Type your message ..."} Label={"Message"}/>
                        </div>
                        <div className="w-full px-4  mt-5">
                            <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg">Submit</button>
                        </div>
                    </div>
                    <div className="wpcf7-response-output" aria-hidden="true"></div>
                </form>
            </div>
        </div>
    </div>
</section>

    
    
    </>
  )
}

export default ContactUs