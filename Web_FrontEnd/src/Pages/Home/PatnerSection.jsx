import React from 'react';
import './index.css' // Import custom styles for hiding the scrollbar

const PatnerSection = () => {
    return (
        <>
            <div className="relative">
                <div className="max-w-[1140px] mx-auto px-4">
                    <div className="flex flex-col items-center w-full justify-center mt-8">
                        <h1 className="text-sm font-semibold">Trusted By</h1>

                        {/* Logo container */}
                        <div className="my-4 w-full overflow-x-auto hide-scrollbar">
                            <div className="flex justify-between   space-x-14 ">
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/dubai-properties.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Dubai Properties"
                                />
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/nakheel.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Nakheel"
                                />
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/meraas.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Meraas"
                                />
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/danube-properties.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Danube Properties"
                                />
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/damac.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Damac"
                                />
                                <img
                                    src="https://eplogproperties.com/wp-content/uploads/2023/10/emaar.svg"
                                    width="100"
                                    className="shrink-0"
                                    alt="Emaar"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dotted Line */}
                <div className="absolute bottom-0 left-0 w-[64%]">
                    <img
                        src="https://eplogproperties.com/wp-content/themes/dtheme/assets/images/dashed-line.svg"
                        alt="Dotted line"
                    />
                </div>
            </div>
        </>
    );
};

export default PatnerSection;
