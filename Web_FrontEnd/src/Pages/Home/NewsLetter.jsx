import './index.css';
const NewsLetter = () => {
  return (
    <>
    <section className=" newsletter-section py-20">
  <div className="max-w-[1140px]  mx-auto">
    <div className="flex justify-center">
      <div className="flex flex-col sm:flex-row items-center justify-center    max-w-3xl  w-full">
        <p className="w-full fz-18  mb-5 sm:mb-0 flex justify-center  sm:justify-end sm:mr-5">Subscribe to our newsletter</p>

        <form
          action="/#wpcf7-f296-o1"
          method="post"
          className="w-full "
          aria-label="Contact form"
          noValidate
        >
          <div className=" w-full  rounded-full  overflow-hidden   flex justify-center items-center bg-white">
            <input
              type="email"
              name="your-email"
              size="40"
              maxLength="80"
              className=" w-full px-5 py-3  focus:outline-none  rounded-full input-group-text  "
              placeholder="enter your email address"
              required
              aria-required="true"
              
            />
           <span className="input-group-text "><em className="fa fa-paper-plane"></em></span>
          </div>
          <div className="wpcf7-response-output" aria-hidden="true"></div>
        </form>
      </div>
    </div>
  </div>
</section>

    
    </>
  )
}

export default NewsLetter