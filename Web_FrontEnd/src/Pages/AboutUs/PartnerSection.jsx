import React from 'react'

const PartnerSection = () => {
  return (
   <>
   <section className=" bg-gray-100 xxs:mt-[200px] sm:mt-[150px] xl:mt-[120px] 2xl:mt-[150px]">
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div className="flex flex-col md:flex-row">
				<div className="w-full md:w-2/3">
					<h1 className="text-2xl md:text-4xl font-bold text-primary">
					At Eplog Properties, we are dedicated to being knowledgeable, trustworthy, and committed in everything we do
					</h1>
				</div>
				<div className="w-full md:w-1/3 mt-6 md:mt-0">
					<img 
					  src="/images/arrow-svg.svg" 
					  alt="Arrow" 
					  className="w-9/12 mx-auto"
					/>
				</div>
			</div>
		</div>
		<div className="flex justify-center my-8">
			<img 
			  src="/Svg/dashed-line.svg" 
			  alt="Dashed Line" 
			  className="w-11/12"
			/>
		</div>
	</section>
   </>
  )
}

export default PartnerSection
