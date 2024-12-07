import { useRef, useState } from 'react';

const Testimonial = () => {
  const testimonialsData = [
    {
      ratingImage: 'https://eplogproperties.com/wp-content/uploads/2023/10/stars.svg',
      testimonial:
        'Saliq is an exceptional real estate agent. He guided us through our property purchase journey from A to Z. He is straightforward, experienced, willing to answer all questions, and great with follow-ups.',
      userImage: 'https://eplogproperties.com/wp-content/uploads/2023/12/1686281713672.jpeg',
      userName: 'Afif Heloui',
      userTitle: 'Principal, Black Stone',
    },
    {
      ratingImage: 'https://eplogproperties.com/wp-content/uploads/2023/10/stars.svg',
      testimonial:
        'Saliq is an exceptional real estate agent. He guided us through our property purchase journey from A to Z. He is straightforward, experienced, willing to answer all questions, and great with follow-ups.',
      userImage: 'https://eplogproperties.com/wp-content/uploads/2023/12/1686281713672.jpeg',
      userName: 'Afif Heloui',
      userTitle: 'Principal, Black Stone',
    },
    {
      ratingImage: 'https://eplogproperties.com/wp-content/uploads/2023/10/stars.svg',
      testimonial:
        'Saliq is an exceptional real estate agent. He  guided us through our property purchase journey from A to Z. He is straightforward, experienced, willing to answer all questions, and great with follow-ups. ' + "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias eaque, voluptatum neque veniam magnam magni labore error aperiam sit deserunt earum accusamus numquam iure asperiores placeat qui amet molestias porro!",
      userImage: 'https://eplogproperties.com/wp-content/uploads/2023/12/1686281713672.jpeg',
      userName: 'Afif Heloui',
      userTitle: 'Principal, Black Stone',
    },
    {
      ratingImage: 'https://eplogproperties.com/wp-content/uploads/2023/10/stars.svg',
      testimonial:
        'Saliq is an exceptional real estate agent. He guided us through our property purchase journey from A to Z. He is straightforward, experienced, willing to answer all questions, and great with follow-ups.',
      userImage: 'https://eplogproperties.com/wp-content/uploads/2023/12/1686281713672.jpeg',
      userName: 'Afif Heloui',
      userTitle: 'Principal, Black Stone',
    },
  ];

  return (
    <>
      <section className="py-16 bg-gray-100">
        <div className="max-w-[1140px] mx-auto px-4">
          <div className=" mb-8">
            <h1 className="text-4xl font-bold">Our customers <br />think we’re the best</h1>
          </div>
        </div>

        <TestimonialSlider testimonials={testimonialsData} />
      </section>
    </>
  );
};

const TestimonialSlider = ({ testimonials }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      ref={sliderRef}
      className="relative flex overflow-hidden  ml-[100px]  px-4 select-none"
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}

    >
      {/* Dynamically render testimonials */}
      {testimonials.map((testimonial, index) => (
        <div key={index} className="py-4 px-8 flex-none w-[400px]">
          <div className="testimonial-box bg-white p-10 shadow-md rounded-[50px]">
            <img
              src={testimonial.ratingImage}
              alt="Rating"
              className="mb-2 w-24 ml-auto"
            />
            <div className="testimonial-details text-center">
              <p className="mb-4">{testimonial.testimonial}</p>
              <div className="flex items-center gap-x-5">
                <img
                  src={testimonial.userImage}
                  alt={testimonial.userName}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <div className='text-center'>
                  <p className="mb-0 font-bold">{testimonial.userName}</p>
                  <p className="mb-0 text-gray-600">{testimonial.userTitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
