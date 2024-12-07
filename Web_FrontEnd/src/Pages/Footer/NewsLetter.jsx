import { useState } from 'react';
import './index.css';
// import sendEmail from '../../utils/sendEmail';
import PopOver from '../../Components/PopOver';

// import nodemailer from 'nodemailer'

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showPopOver, setShowPopOver] = useState(false);
  const [popOverColor, setPopOverColor] = useState('bg-red-500'); // default to red

  const handleCloseModal = () => setShowModal(false);
  const closePopOver = () => setShowPopOver(false);

  const validateEmail = (email) => {
    // Simple regex for email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const sendEmailNewsletter = async () => {
    const url = `${import.meta.env.VITE_REACT_APP_BASE_URL}`;
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError('');
    try {
      // await sendEmail(email, "NewsLetter Request", url);
      setSuccess("Email  has been register.");
      setShowPopOver(true);
      setPopOverColor('bg-[#82DFDF]'); // Set color to green on success
    } catch (error) {
      setError("Failed to send verification email. Please try again.");
      setShowPopOver(true);
      setPopOverColor('bg-red-500'); // Set color to red on error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmailNewsletter();
  };

  return (
    <>
      <section className="newsletter-section py-20 rounded-t-xl ">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex justify-center">
            <div className="flex flex-col sm:flex-row items-center justify-center max-w-3xl w-full mx-10 lg:mx-0">
              <p className="w-full fz-18 mb-5 sm:mb-0 flex justify-center sm:justify-end sm:mr-5">
                Subscribe to our newsletter
              </p>

              <form
                onSubmit={handleSubmit}
                className="w-full "
                aria-label="Contact form"
                noValidate
              >
                <div className="w-full rounded-full overflow-hidden flex justify-center items-center bg-white">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 focus:outline-none rounded-full input-group-text"
                    placeholder="Enter your email address"
                    required
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="input-group-text"
                  >
                    <em className="fa fa-paper-plane"></em>
                  </button>
                </div>
                {error && <p className="error-text">{error}</p>}
                {success && <p className="success-text">{success}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      {showPopOver && <PopOver msg={success} closePopOver={closePopOver} color={popOverColor} />}

    </>
  );
};

export default NewsLetter;
