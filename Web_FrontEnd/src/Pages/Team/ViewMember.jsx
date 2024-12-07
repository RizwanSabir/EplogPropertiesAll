import { useEffect, useRef, useState } from 'react';


import SearchBar from '../Properties/SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import ContactUs from '../Footer/ContactUs';
import Footer from '../Footer/Footer';
import NewsLetter from '../Footer/NewsLetter';
import { useNavigate, } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

import FloorPlan from '../../Components/Property/FloorPlan';
import PaymentPlan from '../../Components/Property/PaymentPlan';
import SliderComponent from '../../Components/Property/SliderComponentNew';
import CustomLoader from '../../Components/Loaders/CustomLoader';
import { div } from 'framer-motion/client';
import TruncatedText from '../../Components/Property/TruncatedText';
import SliderComponentNew from '../../Components/Property/SliderComponentNew';
import ScrollProperty from '../../Components/ScrollProperty/ScrollProperty';

import Navbar from '../../Components/NavBar';
import RoundedInput from '../../Components/InputField/RoundedInput';
import RoundedMesage from '../../Components/InputField/RoundedMesage';

import './index.css'
import PopOver from '../../Components/PopOver';
import Blog from '../Properties/Blog';
import Podcasts from '../Properties/Podcasts';


const ViewMember = ({ HeroText }) => {
  const [showModal, setShowModal] = useState(false);
  const [searchParams] = useSearchParams();
  let [PropertyDetail, setPropertyDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const propertyId = searchParams.get('propertyId');

  const [PostComment, setPostComment] = useState(false)

  const [ShowVideo, setShowVideo] = useState(false)


  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const toggleYouTubeVideo = () => {
    setShowVideo(!ShowVideo); // Toggle the state
  };

  useEffect(() => {
    const fetchDevelopers = async () => {
      setLoading(true);
      try {
        const DevelopersList = await fetch(`https://dataapi.pixxicrm.ae/pixxiapi/v1/1010001489431`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-PIXXI-TOKEN': 'FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-'
          },
        });

        const DevelopersData = await DevelopersList.json();
        if (DevelopersData.statusCode === 200) {

          setPropertyDetail(DevelopersData.data)

        } else {
          console.error("Failed to fetch developers");
        }
      } catch (error) {
        console.error("Error fetching developers:", error);
      }
      finally {
        setLoading(false);

      }
    };
    fetchDevelopers();
  }, [searchParams, propertyId]);


  return (
    <>

      {loading ? (
        <div className='flex justify-center items-center w-full h-screen'>
          <div className='mt-10'>
            <CustomLoader />
          </div>
        </div>
      ) : (<>

        <div className="d-flex align-items-start gap-3 flex">


        </div>
        <div className="pt-2 text-[14px] px-4 h-fit">


          {/* Top Navigation on Small Screen  */}
          <div className='flex mdm:hidden'>

            <TopNavigationTab />

          </div>

          {/* Banner section */}
          <div className=" w-full "  >
            <div className="  overflow-hidden mx-auto text-[10px] h-full  bg-white">
              {/* Top Hero Section */}

              <div className="row h-full flex">
                <TopNavigationTabLarge />
              </div>


              <div className='w-[1000px] mx-auto'>

                <div className='flex flex-col  lg:items-end space-y-5 lg:justify-end lg:space-x-5 text-[14px] '>
                </div>
                {/* Title */}

                <div className='grid grid-cols-2 mt-10 gap-x-10'>
                  {/* Top Left */}
                  <div className='leading-[40px] shrink-0'>
                    <div className='mt-5  text-left'>
                      <p className='text-[40px] items-center   raleway-heading-bold '>{"Rizwan Sabir"}</p>
                    </div>
                    <div style={{ color: '#7C3EFF' }} className='flex gap-x-6'>
                      <p className='text-[18px]'>Real State Agent</p>
                      <div className="flex items-center gap-4 text-[14px]">
                        <i className="fa-regular fa-envelope"></i>
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram-square"></i>
                      </div>
                    </div>
                    {/* About me */}
                    <div className='leading-[14px]'>
                      <p className='text-[18px] my-5'>Real State Agent</p>

                      <div className='mt-3  nunito-sans-body-regular  leading-[28px] text-[14px]'>

                        <p className=''>{"Apartment for sale in 8 Boulevard Walk, Mohammad Bin Rashid Boulevard Eplog properties proudly stunning this unfurnished 1-bedroom apartment at 8 BLVD Walk, located in the heart of Downtown. Living in a great location, with the Boulevard in walking distance. Light living room with fully equipped closed kitchen. "}</p>
                        <br />


                      </div>

                    </div>
                    <AddComment />
                  </div>
                  {/* Div Right */}
                  <VideoSection/>


                </div>



                {/* Property Pictures */}
                <div className='flex flex-col justify-center items-center  lg:flex-row  '>

                  {/* Left side */}

                </div>

                <div className=''>
                  {/* Left Hand Side */}

                  {/* Property Description */}
                  <div className='    mx-auto  lg:w-full overflow-hidden md:w-full      mt-5  '>
                    <div className='text-[15px] '>
                      <div className="mt-10">

                        <div className='h-[1px] px-4 w-full bg-slate-300  my-10'></div>
                        <p className='text-[30px] items-center  font-bold  px-4'>Rizwan's Property Project </p>
                        <div className='pt-5'>
                        </div>

                      </div>
                      <ScrollProperty User={["New Projects", "NEW"]} Page={1} />
                      <Blog Text="Rizwan's Blog" />
                      <Podcasts />




                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>


        </div>


       
        <NewsLetter />
        <Footer />
      </>)
      }


    </>
  );
};






const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto z-50">
        {children}
      </div>
    </div>
  );
};

const AddComment = ({ PropertyData, propertyId, Type }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverColor, setPopOverColor] = useState('bg-red-500'); // default to red

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const closePopOver = () => setShowPopOver(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage('');

    const payload = {
      agentId: PropertyData.agentId,
      propertyId: propertyId,
      clientSource: "Eplog Properties",
      extraData: { Subject: data.subject, Message: data.message },
      formId: "9ec22cdf-5dac-4a2a-b17a-a50f58af98fb",
      leadType: Type,
      name: data.name,
      email: data.email,
      phone: data.phone,
    };

    try {
      const response = await fetch('https://dataapi.pixxicrm.ae/pixxiapi/webhook/v1/form', {
        method: 'POST',
        headers: {
          "X-PIXXI-TOKEN": "FjuseQnHvSZy4jTqs8EN6uHfRz85YGv-",
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSuccessMessage('Message sent successfully!');
        setShowPopOver(true);
        setPopOverColor('bg-[#82DFDF]'); // Set color to green on success
        reset();
      } else {
        setSuccessMessage('Failed to send message. Please try again.');
        setShowPopOver(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setSuccessMessage('Failed to send message. Please try again.');
      setShowPopOver(true);
      setPopOverColor('bg-red-500'); // Set color to red on error
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>

      <div className="flex  justify-left ">
        <button type="submit" className="btn bg-primary text-white py-2 px-4 rounded-lg" onClick={handleOpenModal}>
          Send Message
        </button>
      </div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="flex items-center justify-between ">
          <h2 className="text-2xl font-semibold">Leave a Comment</h2>
          <button className="text-[#82DFDF] ml-auto text-xl" onClick={handleCloseModal}>
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-2">
            <label className="block mb-2">
              Name:
              <input type="text" className="border p-2 w-full" {...register('name', { required: true })} />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </label>
            <label className="block mb-2">
              Email:
              <input type="email" className="border p-2 w-full" {...register('email', { required: true })} />
              {errors.email && <p className="text-red-500">Email is required</p>}
            </label>
          </div>


          <label className="block mb-4">
            Message:
            <textarea className="border p-2 w-full" {...register('message', { required: true })} />
            {errors.message && <p className="text-red-500">Message is required</p>}
          </label>

          <button type="submit" className="bg-primary text-white py-2 px-4 rounded-lg w-full" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </Modal>

      {showPopOver && <PopOver msg={successMessage} closePopOver={closePopOver} color={popOverColor} />}
    </div>
  );
};




const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div>
      {/* Div Right */}
      <div className="relative cursor-pointer" onClick={() => setShowVideo(true)}>
        {/* Image Section */}
        <div className="w-full mx-auto">
          <div className="rounded-3xl overflow-hidden h-full pb-2">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                className="w-full h-[350px] object-cover"
                src={`/images/Person.jpg`}
                alt="Main"
              />
            </div>
          </div>
        </div>

        {/* Play Button */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ color: "#82DFDF", fontSize: "100px" }}
        >
          <i className="fas fa-play"></i>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#7F7F7F] bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-[80%] h-[80%]">
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-white bg-red-500 rounded-full size-[40px] flex justify-center items-center leading-[0px] tracking-[0px]" 
              onClick={() => setShowVideo(false)} >
             <i className="fa-solid fa-x"></i>
            
            </button>

            {/* Video */}
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/your_video_id"
                title="Video Modal"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};





const TopNavigationTab = () => {


  return <>

    {/* Logo of Brand */}
    <div className="col-6  pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5 flex items-center">
      <a href="https://eplogproperties.com">
        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" className="lg:hidden" alt="" />
      </a>
    </div>

    {/* Nav Bar */}
    <div className="  col-6  flex justify-end">
      <Navbar />
    </div>

  </>
}

const TopNavigationTabLarge = () => {
  return <>
    {/* Logo of Brand */}
    <div className="hidden mdm:flex col-6 relative pl-5 pb-10 lg:pb-14 sm:pl-9 lg:pt-5  items-center">
      <a href="https://eplogproperties.com">
        <img src="https://eplogproperties.com/wp-content/uploads/2023/10/logo-bloack.svg" width="180" alt="" />
      </a>
    </div>

    {/* Nav Bar */}
    <div className=" hidden mdm:flex col-6 relative flex justify-end">
      <Navbar />
    </div>

  </>
}


export default ViewMember;
