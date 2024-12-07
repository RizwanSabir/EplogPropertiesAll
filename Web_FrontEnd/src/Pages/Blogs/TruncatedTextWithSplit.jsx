import React, { useState } from 'react';

const TruncatedTextWithSplit = ({ text, maxLines = 10 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const splitText = (text) => {
        const lines = text.split('\n');
        if (lines.length > maxLines) {
            return {
                firstPart: lines.slice(0, maxLines).join('\n'),
                secondPart: lines.slice(maxLines).join('\n')
            };
        }
        return { firstPart: text, secondPart: '' };
    };

    const { firstPart, secondPart } = splitText(text);

    return (
        <div className='mt-3  nunito-sans-body-regular  leading-[18px] text-[14px]'>
            <p
                className={`  ${isExpanded ? '' : 'line-clamp-5'}`}
                style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: isExpanded ? 'none' : maxLines,
                }}
            >
                {firstPart}...  <button onClick={() => setIsExpanded(!isExpanded)} className="text-[#7C3EFF] ">
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
            </p>
            
            
        </div>
    );
};


export default TruncatedTextWithSplit;
