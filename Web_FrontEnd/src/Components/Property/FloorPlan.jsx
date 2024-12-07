import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FloorPlan = ({ floorPlans }) => {

  // State to track selected bedroom type
  const [selectedType, setSelectedType] = useState(floorPlans[0]?.name);
  const [selectedPlan, setSelectedPlan] = useState(null); // To handle the selected plan for modal

  // Extract unique bedroom types for button generation
  const uniqueTypes = [...new Set(floorPlans.map((plan) => plan.name))];

  // Filter floor plans based on selected type
  const filteredPlans = selectedType
    ? floorPlans.filter((plan) => plan.name === selectedType)
    : floorPlans;

  // Function to close the modal
  const closeModal = () => setSelectedPlan(null);

  return (
    <div>
      {/* Navbar for Bedroom Types */}
      <NavBar data={uniqueTypes} selectedType={selectedType} setSelectedType={setSelectedType} />

      {/* Display filtered floor plans */}
      <div className="mt-4">
        {filteredPlans.map((plan) => {
          const { id, imgUrl, area, name, price, title } = plan;

          return (
            <div key={id} className="flex mb-8">
              {/* Left side - Image */}
              <div className="w-10/12" onClick={() => setSelectedPlan(plan)}>
                {imgUrl && imgUrl.length > 0 && (
                  <img src={'https://dataapi.pixxicrm.ae' + imgUrl[0]} alt={title || 'Floor Plan'} className="w-full h-auto cursor-pointer" />
                )}
              </div>

              {/* Right Side - Non-null properties in grid */}
              <div className="w-1/2 ml-5">

                {title && (
                  <div>
                    <strong>Name:</strong>{title}
                  </div>
                )}
                {name && (
                  <div>
                    <strong>Bedrooms</strong> {name}
                  </div>
                )}
                {area && (
                  <div>
                    <strong>Area:</strong> {area} sqft
                  </div>
                )}

              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Full-Screen Image */}
      {selectedPlan && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-50 bg-white bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute text-black text-[100px] font-bold"
            >
              &times;
            </button>
            <img
              src={'https://dataapi.pixxicrm.ae' + selectedPlan.imgUrl[0]}
              alt={selectedPlan.title || 'Full-Screen Floor Plan'}
              className="rounded size-[500px]"
            />
            <div className="text-white text-center mt-4">
              <strong>{selectedPlan.title}</strong> - {selectedPlan.name}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

const NavBar = ({ data, selectedType, setSelectedType }) => {

  const [User, setUser] = useState(selectedType)
  return (
    <>

      <div className="flex flex-row mx-auto my-2   text-[8px]   bg-white rounded-full z-40 border-[1px]  ">
        <div className="flex flex-row bgColor py-1 w-full justify-around items-center rounded-3xl ">
          {
            data.map((user) => {
              return (
                user === selectedType ?
                  (<WhiteBackground key={user} user={user} setUser={setSelectedType}>
                    <motion.div className="absolute w-full bg-[#82DFDF] h-full top-0 left-0   rounded-full   -z-10" layoutId="underline" ></motion.div>
                  </WhiteBackground>


                  ) : <WhiteBackground key={user} user={user} setUser={setSelectedType} />

              );
            })
          }
        </div>
      </div>
    </>
  )
}

const WhiteBackground = ({ user, setUser, children }) => {
  return (
    <motion.div key={user} onClick={() => { setUser(user) }} className={`   relative z-30 cursor-pointer px-2`}>
      <h1 className=''>{user}</h1>
      {children}


    </motion.div>
  );
};
export default FloorPlan;
