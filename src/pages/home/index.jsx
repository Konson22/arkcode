import Header from "./Header";
import ServiceSection from "./ServiceSection";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="md:px-[18%] px-3 md:py-[5rem] py-[3rem] md:text-center">
        <p className="md:text-xl mb-3">
          In the digital age, a powerful online presence is essential for any business or individual striving to make an impact. A well-designed website is not just a virtual storefront; it's an invitation to explore, an opportunity to engage, and a platform to connect with your target audience. With countless websites vying for attention, standing out from the crowd demands a unique and captivating web design that resonates with your visitors.
        </p>
      </div>
      {/******************************************************
        start of services section
      ******************************************************/}
      <ServiceSection />
      <div className="py-24" id="form"> Quotation form</div>
    </div>
  )
}
