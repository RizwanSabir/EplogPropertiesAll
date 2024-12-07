import React, { useState } from 'react';

const TruncatedTextWithSplit = ({ text, maxLines = 10 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to split the text into two parts if it exceeds maxLines
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
        <div className='text-[15px] leading-[22px] '>
            <p
                className={`mt-3   ${isExpanded ? '' : 'line-clamp-5'}`}
                style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    WebkitLineClamp: isExpanded ? 'none' : maxLines,
                }}
            >
                {firstPart}
            </p>
            {isExpanded && secondPart && (
                <p className="mt-3  ">
                    {secondPart}
                </p>
            )}
            <button onClick={() => setIsExpanded(!isExpanded)} className="text-[#7C3EFF] mt-2">
                {isExpanded ? 'Read Less' : 'Read More'}
            </button>
        </div>
    );
};

export default TruncatedTextWithSplit;
