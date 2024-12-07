import React from "react";
import './index.css';

const PropertySnag = () => {
  return (
    <section className="text-fonts">
      <div className="max-w-[1140px] mx-auto propert-snagging-section">
        <div className="row flex flex-wrap px-4">
          <div className="w-full md:w-[45%]">
            <h1 className="section-title">
              Property Snagging <br />
              & Handover
            </h1>
            <p className="mt-4">
              Our property handover and snagging services are meticulously designed to offer complete peace of mind.
            </p>
            <p className="mt-2">
              We conduct an exhaustive inspection to identify and document any issues, ensuring every aspect of your property is in top condition before handover.
            </p>
          </div>

          <div className="w-full mt-5 overflow-x-auto">
            <div className="mx-4 mt-5 flex gap-4">
              {[
                {
                  title: "Thorough",
                  subtitle: "Inspection:",
                  description:
                    "We leave no detail unchecked, ensuring your property meets the highest standards."
                },
                {
                  title: "Issue",
                  subtitle: "Resolution:",
                  description:
                    "We swiftly handle snagging issues, working directly with developers for speedy resolutions."
                },
                {
                  title: "Documentation",
                  subtitle: "Assistance:",
                  description:
                    "We simplify paperwork, ensuring a seamless handover process."
                },
                {
                  title: "Peace",
                  subtitle: "of Mind:",
                  description:
                    "Our service guarantees a worry-free handover, saving you time and hassle."
                }
              ].map((box, index) => (
                <div
                  key={index}
                  className="white-box text-center text-fonts shrink-0 w-[300px] h-[280px]"
                >
                  <h5 className="box-title">
                    {box.title}
                    <br />
                    {box.subtitle}
                  </h5>
                  <div className="line my-2 border-b-2"></div>
                  <p className="mb-0">{box.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertySnag;
