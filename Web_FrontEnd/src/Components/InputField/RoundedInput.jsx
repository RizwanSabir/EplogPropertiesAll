import React from 'react';

const RoundedInput = React.forwardRef(({ placeholder, Label, ...rest }, ref) => {
  return (
    <>
      <label className="text-[16px] leading-[24px] font-semibold ml-3 mb-1.5">{Label}</label>
      <input
        ref={ref} // Forward the ref here
        type="text"
        className="border w-full border-gray-300 rounded-[8px] px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
        // placeholder={placeholder}
        {...rest} // Spread the rest of the props (e.g., from `register`)
      />
    </>
  );
});

export default RoundedInput;
