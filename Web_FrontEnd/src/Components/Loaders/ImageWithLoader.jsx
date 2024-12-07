import React, { useState } from 'react';
import CustomLoader from './CustomLoader';

const ImageWithLoader = ({ url, alt = 'Image' }) => {
    const [isLoaded, setIsLoaded] = useState(true);

    const handleImageLoad = () => {
        setIsLoaded(false);
    };

    return (
        <div className="w-full h-auto">
            {isLoaded ? (
               <CustomLoader/>
            ):
            <img
                src={url}
                alt={alt}
                className={`w-full h-auto ${isLoaded ? '' : 'hidden'}`}
                onLoad={handleImageLoad}
            />}
        </div>
    );
};

export default ImageWithLoader;
