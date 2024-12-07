import { useState } from "react";
import { useForm } from "react-hook-form";
import { VscGlobe } from "react-icons/vsc";
import PopOver from "../../Components/PopOver";



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
  
const BookVisit = ({ PropertyData, propertyId, Type }) => {
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
          <p
              className="bg-[#82DFDF] mx-auto text-xl text-center rounded-3xl mt-3 p-2 text-black font-bold py-3 cursor-pointer w-[200px]"
              onClick={handleOpenModal}
          >
              Book a Visit
          </p>

          <Modal show={showModal} onClose={handleCloseModal}>
              <div className="flex items-center justify-between ">
                  <h2 className="text-2xl font-semibold">Book a Visit</h2>
                  <button className="text-[#82DFDF] ml-auto text-xl" onClick={handleCloseModal}>
                      ✖
                  </button>
              </div>
              <p className="mb-4">Fill out the form to schedule your visit.</p>

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

                  <div className="grid grid-cols-2 gap-x-2">
                      <label className="block mb-2">
                          Subject:
                          <input type="text" className="border p-2 w-full" {...register('subject')} />
                      </label>
                      <label className="block mb-2">
                          Contact Number:
                          <input type="tel" className="border p-2 w-full" {...register('phone', { required: true })} />
                          {errors.phone && <p className="text-red-500">Phone is required</p>}
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


  export default BookVisit
  
  