import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SearchBar from '../Properties/SearchBar';
import { AnimatePresence, motion } from 'framer-motion';
import ContactUs from '../Footer/ContactUs';
import Footer from '../Footer/Footer';
import NewsLetter from '../Footer/NewsLetter';
import { useSearchParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import CustomLoader from '../../Components/Loaders/CustomLoader';
import ScrollProperty from '../../Components/ScrollProperty/ScrollProperty';
import Navbar from '../../Components/NavBar';
import './index.css'
import PopOver from '../../Components/PopOver';

const baseURL = import.meta.env.VITE_REACT_APP_BASE_URL;


const formatDate = (dateString) => {
  if (!dateString) return ''; // Handle empty or undefined input

  const date = new Date(dateString);

  // Format the date
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
};
const ViewBlog = ({ HeroText }) => {
  const [searchParams] = useSearchParams();
  let [PropertyDetail, setPropertyDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const propertyId = searchParams.get('propertyId');

  const [PostComment, setPostComment] = useState(false)


  useEffect(() => {
    const fetchDevelopers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/api/blogs/viewblog/674fff51c1320cc29979844f`);

        if (response.status === 200) {
          console.log("Blog data is ")
          console.log(response.data)
          setPropertyDetail(response.data)
        } else {
          console.error("Failed to fetch developers");
        }
      } catch (error) {
        console.error("Error fetching developers:", error);
      } finally {
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
        <div className="pt-2 text-[14px] px-4 h-fit">


          {/* Top Navigation on Small Screen  */}
          <div className='flex mdm:hidden'>

            <TopNavigationTab />

          </div>

          {/* Banner section */}
          <div className=" w-full "  >
            <div className=" px-[10px] overflow-hidden mx-auto text-[10px] h-full  bg-white">
              {/* Top Hero Section */}
              <div className="row h-full flex">
                <TopNavigationTabLarge />
              </div>

              <div className='w-[800px] mx-auto'>
                <div className='flex flex-col  lg:items-end space-y-5 lg:justify-end lg:space-x-5 text-[14px] '>
                  {/* Category */}
                  <div className=' flex justify-center  mx-auto w-full  overflow-hidden md:w-full    '>
                    <Category category={PropertyDetail.category} />
                  </div>
                </div>
                {/* Title */}

                <div className='mt-5 space-y-3 text-center'>
                  <p className='text-[40px] items-center    my-5 raleway-heading-bold leading-[52px]'>{PropertyDetail.title}</p>
                </div>

                <div className='flex justify-between gap-x-5  leading-[15px] items-center my-5'>
                  <div className='flex gap-x-2  items-center'>
                    <img className='size-[40px] rounded-full' src="https://picsum.photos/200/300" alt="" />
                    <div>
                      <p className='text-[15px]'>{PropertyDetail.user.name}</p>
                      <div className='flex text-[#6B6B6B] text-[11px] gap-x-2 items-center'>
                        <p className=''>5 min Read</p>
                        <p>.</p>
                        <p> {formatDate(PropertyDetail.dateCreated)}</p>
                      </div>
                    </div>
                  </div>

                  <div className='flex gap-x-2 items-center'>

                    <p className=' text-lg'><i className="fa-regular fa-comment"></i></p>
                    <p>{PropertyDetail.comments?.length}</p>
                  </div>


                </div>

                {/* Property Pictures */}
                <div className='flex flex-col justify-center items-center  lg:flex-row  '>

                  {/* Left side */}
                  <div className='flex flex-col lg:gap-x-6 mt-2  mx-auto  '>
                    <div className='w-full mx-auto'>
                      <div className=' rounded-3xl overflow-hidden h-full pb-2'>
                        <div className='w-full h-full rounded-2xl overflow-hidden'>

                          <img className='w-full h-full object-cover' src={baseURL + "/" + PropertyDetail.featuredImage} alt="Main" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=''>

                  {/* Property Description */}
                  <div className='    mx-auto  lg:w-full overflow-hidden md:w-full      mt-5  '>
                    <div className='text-[15px] '>
                      <div className='mt-3 !nunito-sans-body-regular leading-[28px] text-[14px] flex flex-col gap-y-6'>
                        <p className='w-[800px]' dangerouslySetInnerHTML={{ __html: PropertyDetail.blogText }} />
                      </div>

                      <CommentProtion BlogId="674fff51c1320cc29979844f" />
                      <div className="mt-10">

                        <div className='h-[1px] px-4 w-full bg-slate-300  my-10'></div>
                        <p className='text-[40px] items-center  font-bold  px-4'>Customers Also Viewed </p>
                        <div className='pt-5'>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <ScrollProperty User={["New Projects", "NEW"]} Page={1} />
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

const CommentProtion = ({ BlogId }) => {
  const [Refresh, setRefresh] = useState(false)
  return (
    <>
      <CommentsSection blogID={BlogId} key={Refresh} />
      <AddComment BlogId={BlogId} Refresh={Refresh} setRefresh={setRefresh} />

    </>
  )

}

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


const AddComment = ({ PropertyData, BlogId, Type, Refresh, setRefresh }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverColor, setPopOverColor] = useState('bg-red-500'); // default to red
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const closePopOver = () => setShowPopOver(false);

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      // Make the Axios call to the backend API route
      console.log("Blog id is ")
      console.log(BlogId)
      const response = await axios.post(`${baseURL}/api/blogs/add-comment/${BlogId}`, {
        name: data.name,
        email: data.email,
        comment: data.message,
      });

      // Handle success
      setIsLoading(false);
      setSuccessMessage('Comment posted successfully!');
      setPopOverColor('bg-green-500');  // Set to green for success
      setShowPopOver(true);

      // Reset form fields after successful submission
      reset();
      setRefresh(!Refresh)
      handleCloseModal();
    } catch (error) {
      setIsLoading(false);
      setSuccessMessage('An error occurred while posting your comment.');
      setPopOverColor('bg-red-500');  // Set to red for error
      setShowPopOver(true);
    }
  };

  return (
    <div>
      <div className="flex justify-center px-4 mt-5">
        <button type="button" className="btn bg-primary text-white py-2 px-4 rounded-lg" onClick={handleOpenModal}>
          Post Comment
        </button>
      </div>

      <Modal show={showModal} onClose={handleCloseModal}>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">Leave a Comment</h2>
          <button className="text-[#82DFDF] ml-auto text-xl" onClick={handleCloseModal}>
            ✖
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-2 gap-x-2">
            <label className="block mb-2">
              Name:
              <input
                type="text"
                className="border p-2 w-full"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </label>
            <label className="block mb-2">
              Email:
              <input
                type="email"
                className="border p-2 w-full"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </label>
          </div>

          <label className="block mb-4">
            Message:
            <textarea
              className="border p-2 w-full"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-500">{errors.message.message}</p>}
          </label>

          <button
            type="submit"
            className="bg-primary text-white py-2 px-4 rounded-lg w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </Modal>

      {showPopOver && <PopOver msg={successMessage} closePopOver={closePopOver} color={popOverColor} />}
    </div>
  );
};








const Category = ({ category }) => {
  console.log("Category are");
  console.log(category);

  return (
    <>
      <a>
        <div className="bg-gray-100">
          {/* Whole Upper */}
          <div className="p-2">
            {/* Outer div */}
            <div className="mt-2 lg:w-full mx-auto flex justify-between">
              {/* Left side */}
              <div className="space-y-3 font-bold flex space-x-3 flex-wrap">
                <div></div>
                {/* Check if category is an array */}
                {Array.isArray(category) ? (
                  category.map((cat) => (
                    <div key={cat.value} className="flex items-center justify-between border rounded-lg px-2 py-1 border-[#7C3EFF] text-[#7C3EFF]">
                      <span className="text-gray-600">{cat.value}</span>
                    </div>
                  ))
                ) : (
                  <div key={category?.value} className="flex items-center justify-between border rounded-lg px-2 py-1 border-[#7C3EFF] text-[#7C3EFF]">
                    <span className="text-gray-600">{category?.value}</span>
                  </div>)}
              </div>
            </div>
            {/* Add beds and more */}
          </div>
        </div>
      </a>
    </>
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

const Comment = ({ author, date, content, avatarUrl }) => (
  <div className=''>
    <div className="p-4 bg-white rounded-lg text-[#212529] mb-4  card border-[1px] border-[#F4F4F4]">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0">
          <img
            src={"https://picsum.photos/200/300"}
            alt={`${author}'s avatar`}
            className="size-[60px] rounded-lg object-cover"
          />
        </div>
        <div className="flex-1 min-w-0 inter-body-light">
          <div className="flex items-center gap-2 mb-1 font-bold">
            By
            <span className="text-[#7C3EFF] hover:text-blue-800 font-medium ">
              {author}
            </span>
            <span className="text-gray-500 text-sm">
              on {date}
            </span>
          </div>
          <p className="text-gray-800 text-[14px] text-[#212529] leading-[21px] nunito-sans-body-regular">
            {content}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CommentsSection = ({ blogID }) => {
  const [comments, setComments] = useState([]);  // Initialize the comments state
  const [isLoading, setIsLoading] = useState(true);  // Loading state to show loading message
  const [error, setError] = useState(null);  // Error state to handle errors during the fetch

  // Fetch comments when the component mounts
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Send GET request to fetch comments by blogID
        const response = await axios.get(`${baseURL}/api/blogs/comments/${blogID}`);
        console.log("Response is ")
        console.log(response)
        setComments(response.data.comments);  // Assuming the response has a 'comments' field
        setIsLoading(false);
      } catch (error) {
        setError('Failed to load comments. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchComments();
  }, [blogID]);  // Dependency array ensures the effect runs when blogID changes

  // Render the comments or loading/error message
  return (
    <div className="mt-5">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 inter-heading-bold">Comments</h2>
      {isLoading ? (
        <p>Loading comments...</p>  // Show a loading message while fetching comments
      ) : error ? (
        <p className="text-red-500">{error}</p>  // Show an error message if there's an error
      ) : (
        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <Comment
                key={index}
                author={comment.name}
                date={formatDate(comment.dateCreated)}  // Assuming you have a 'dateCreated' field
                content={comment.comment}
                avatarUrl={comment.avatarUrl || "/api/placeholder/48/48"}  // Use a default avatar if not available
              />
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>  // Message when there are no comments
          )}
        </div>
      )}
    </div>
  );
};


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

export default ViewBlog;















