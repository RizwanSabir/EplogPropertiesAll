import React, { useState } from 'react'
import HeroContactSection from '../../Components/HeroContactSection/HeroSection'
import RoundedInput from '../../Components/InputField/RoundedInput';
import RoundedMesage from '../../Components/InputField/RoundedMesage';
import FooterMain from '../Footer/FooterMain';
import NewsLetter from '../Home/NewsLetter';
import Footer from '../Home/Footer';
import { useForm } from 'react-hook-form';
import PopOver from '../../Components/PopOver';

const ContactIndex = () => {
  return (

    <>
      <HeroContactSection />
      <div className=''>
        <div className=' flex flex-col md:flex-row justify-start  items-center md:ml-32 md:mr-10'>
          <ContactUs />
          <ContactDetails />
        </div>
        <NewsLetter />
        <Footer />
      </div>
    </>
  )
}


const ContactDetails = () => {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-5 mt-5 ">
      <div className="contact-details pl-0 md:pl-3 ">
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="/Svg/call-icon.svg"
            width="30"
            alt="Call Icon"
          />
          <div>
            <p className="contact-text">
              +971 55 247 7432
            </p>
            <p className="contact-text">
              +971 58 599 77432
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="/Svg/whatsapp-icon.svg"
            width="30"
            alt="WhatsApp Icon"
          />
          <div>
            <p className="contact-text">
              +971 58 883 4756
            </p>
            <p className="contact-text">
              +971 55 247 7432
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="/Svg/map-icon.svg"
            width="30"
            alt="Map Icon"
          />
          <p className="mb-0 contact-text">
            1118 & 1121 Tamani Arts Offices, Business Bay. Dubai UAE

          </p>
        </div>
        <div className="flex items-center gap-2 mb-3 md:mb-4">
          <img
            src="/Svg/email-icon.svg"
            width="30"
            alt="Email Icon"
          />
          <a className="contact-text" href="mailto:Admin@eplogproperties.com">
            admin@eplogproperties.com
          </a>
        </div>
      </div>
    </div>
  );
};


const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [popOverColor, setPopOverColor] = useState('bg-red-500'); // default to red
  const [showPopOver, setShowPopOver] = useState(false);

  const closePopOver = () => setShowPopOver(false);
  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage('');

    const payload = {
      clientSource: "Eplog Properties",
      extraData: {
        Subject: data.subject,
      },
      formId: "0bb607f0-5201-4578-a498-4ae16e901340",
      "formName": "Contact US Buy",
      leadType: "BUY",
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    };

    try {
      const response = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/webhook/v1/form', {
        method: 'POST',
        headers: {
          "X-PIXXI-TOKEN": "FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      setShowPopOver(true);
      setSuccessMessage('Message sent successfully!');
      setPopOverColor('bg-[#82DFDF]'); // Set color to green on success
      reset(); // Reset all form fields
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to send message. Please try again.');
      setShowPopOver(true);
      setPopOverColor('bg-red-500'); // Set color to red on error
      setShowPopOver(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pb-12 bg-gray-100">
      <div className="mx-2">
        <div className="flex flex-wrap">
          <div className="w-full mb-8">
            <h1 className="section-title">Contact us</h1>
            <p className="text-gray-600">Let’s get in touch and find you the best solution from the real estate.</p>
          </div>
          <div className="w-full md:w-2/3">
            <form onSubmit={handleSubmit(onSubmit)} className="w-full" aria-label="Contact form">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-6">
                  <RoundedInput
                    placeholder="Enter your Name"
                    Label="Name"
                    {...register('name', { required: true })}
                  />
                  {errors.name && <p className="text-red-500">Name is required</p>}
                </div>
                <div className="w-full md:w-1/2 px-4 mb-6">
                  <RoundedInput
                    placeholder="Enter your email address"
                    Label="Email"
                    {...register('email', { required: true })}
                  />
                  {errors.email && <p className="text-red-500">Email is required</p>}
                </div>
                <div className="w-full md:w-1/2 px-4 mb-6">
                  <RoundedInput
                    placeholder="Enter Contact Number"
                    Label="Contact Number"
                    {...register('phone', { required: true })}
                  />
                  {errors.phone && <p className="text-red-500">Phone is required</p>}
                </div>
                <div className="w-full md:w-1/2 px-4 mb-6">
                  <RoundedInput
                    placeholder="Your Interest"
                    Label="Subject"
                    {...register('subject')}
                  />
                </div>
                <div className="w-full px-4">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <RoundedMesage
                    placeholder="Type your message ..."
                    Label="Message"
                    {...register('message', { required: true })}
                  />
                  {errors.message && <p className="text-red-500">Message is required</p>}
                </div>
                <div className="w-full px-4 mt-5">
                  <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg" disabled={isLoading}>
                    {isLoading ? 'Sending...' : 'Submit'}
                  </button>
                </div>
              </div>
              {isLoading && <p className="text-center text-gray-500 mt-4">Please wait...</p>}
              {successMessage && <p className="text-center text-green-500 mt-4">{successMessage}</p>}
            </form>
          </div>
        </div>
      </div>
      {showPopOver && <PopOver msg={successMessage} closePopOver={closePopOver} color={popOverColor} />}

    </section>
  );
};


export default ContactIndex