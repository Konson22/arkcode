import Header from "./Header";
import OurWorkSection from "./OurWorkSection";
import ServiceSection from "./ServiceSection";
import TestimonialSection from "./TestimonialSection";
import WhyUsSection from "./WhyUsSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <OurWorkSection />
      <div className="md:px-[18%] px-3 md:py-0 py-[1rem] text-center">
        <p className="md:text-xl mb-3">
          In the digital age, a powerful online presence is essential for any business or individual striving to make an impact. A well-designed website is not just a virtual storefront; it's an invitation to explore, an opportunity to engage, and a platform to connect with your target audience. With countless websites vying for attention, standing out from the crowd demands a unique and captivating web design that resonates with your visitors.
        </p>
      </div>
      {/******************************************************
        start of services section
      ******************************************************/}
      <ServiceSection />
      {/******************************************************
        start of services section
      ******************************************************/}
      <WhyUsSection />
      <TestimonialSection />
      <div className="px-[8%] md:py-[7rem] py-[3rem] my-[3rem]" id="form"
        style={{
          backgroundImage:`linear-gradient(to right, rgba(0,0,0,0.99), rgba(0,0,0,0.5)), 
          url(${process.env.PUBLIC_URL+'./images/money-gcbbbadce1_12802.jpg'})`,
          backgroundPosition:'center',
          backgroundSize:'cover'
        }}
      >
        <div className="md:w-[70%]">
          <h2 className="md:text-5xl text-2xl font-bold">We bring ideas t life</h2>
          <p className="text-xl">
            In the digital age, a powerful online presence is essential for any business or individual striving to make an impact. A well-designed website is not just a virtual storefront; it's an invitation to explore, an opportunity to engage, and a platform to connect
          </p>
        </div>
      </div>
    </div>
  )
}
