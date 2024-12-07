import React from 'react';

const RoundedMesage = React.forwardRef(({ placeholder, ...rest }, ref) => {
  return (
    <div className="form-group">
      <textarea
        ref={ref} // Forward the ref here
        className="border w-full border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
        rows="3"
        maxLength="400"
  
        {...rest} // Spread the rest of the props (e.g., from `register`)
      ></textarea>
    </div>
  );
});

export default RoundedMesage;
