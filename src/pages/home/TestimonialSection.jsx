import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const sliderConfiguration = {
  type: "carousel",
  startAt: 0,
  animationTimingFunc: "ease-in-out",
  gap: 25,
  perView: 4,
  breakpoints: {
    600: {
      perView: 1,
    },
  },
};

export default function TestimonialSection() {
    
  useEffect(() => {
    const mainGlide = new Glide(".glide", sliderConfiguration); // default options
    mainGlide.mount();
    // return () => mainGlide.destroy();
  }, []);

  return (
    <div className="">
      <div className='glide'>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl">Sponsor now</h2>
          <div className='glide__arrows flex items-center' data-glide-el='controls'>
            <button
              className='glide__arrow glide__arrow--prev bg-gray3 text-2xl rounded-full flex items-center justify-center mr-5 p-2'
              data-glide-dir='<'
            >
              <FiChevronLeft />
            </button>
            <button
              className='glide__arrow glide__arrow--next bg-gray-200 text-2xl rounded-full flex items-center justify-center p-2'
              data-glide-dir='>'
            >
              <FiChevronRight />
            </button>
          </div>
        </div>
        <div className='glide__track' data-glide-el='track'>
          <div className='glide__slides'>
            {[...new Array(3)].map(() => (
              <div className="-[300px]">
                  <div className="flex items-center justify-between bg-gray3 px-6 py-3">
                      <span>
                          <FaQuoteLeft />
                      </span>
                      <div className="flex items-center">
                          <span className="text-">
                              <FaStar />
                          </span>
                          <span className="text-">
                              <FaStar />
                          </span>
                          <span className="text-">
                              <FaStar />
                          </span>
                          <span className="text-">
                              <FaStar />
                          </span>
                          <span className="text-">
                              <FaStar />
                          </span>
                      </div>
                  </div>
                  <div className="bg-gray4 px-[2rem p-[2rem] flex">
                      <p className="">
                        Our team comprises experienced professionals who stay updated with the latest trends, technologies, and design principles, delivering top-notch solutions for your business.
                      </p>
                  </div>
                  <div className="flex items-center bg-gray3 px-6 py-[.7rem]">
                      <img 
                          className="h-12 w-12  rounded-full mt-[-1.5rem]" 
                          src={process.env.PUBLIC_URL+'./images/Image-2.png'} 
                          alt="" 
                      />
                      <span className="ml-4">Kon Akech</span>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
// export default function TestimonialSection() {
//   return (
//     <div className="md:px-[5%] px-3 py-[3rem]">
//         <h2 className="text-4xl font-bold text-center">What our CLient Say</h2>
//         <div className="flex items-center mt-10">
//             <div className="grid md:grid-cols-3 grid-cols-1 md:gap-5 mx-4 relative">
//                 <div className="flex items-center h-full absolute left-[-2rem]">
//                     <span className="text-4xl md:bg-gray3 rounded-full p-1">
//                         <FiChevronLeft />
//                     </span>
//                 </div>
//                 {[...new Array(3)].map(() => (
//                     <div className="w-full">
//                         <div className="flex items-center justify-between bg-gray3 px-6 py-3">
//                             <span>
//                                 <FaQuoteLeft />
//                             </span>
//                             <div className="flex items-center">
//                                 <span className="text-">
//                                     <FaStar />
//                                 </span>
//                                 <span className="text-">
//                                     <FaStar />
//                                 </span>
//                                 <span className="text-">
//                                     <FaStar />
//                                 </span>
//                                 <span className="text-">
//                                     <FaStar />
//                                 </span>
//                                 <span className="text-">
//                                     <FaStar />
//                                 </span>
//                             </div>
//                         </div>
//                         <div className="bg-gray4 px-[2rem p-[2rem]">
//                             <p>
//                                 Our team comprises experienced professionals who stay updated with the latest trends, technologies, and design principles, delivering top-notch solutions for your business.
//                             </p>
//                         </div>
//                         <div className="flex items-center bg-gray3 px-6 py-[.7rem]">
//                             <img 
//                                 className="h-12 w-12  rounded-full mt-[-1.5rem]" 
//                                 src={process.env.PUBLIC_URL+'./images/Image-2.png'} 
//                                 alt="" 
//                             />
//                             <span className="ml-4">Kon Akech</span>
//                         </div>
//                     </div>
//                 ))}
//                 <div className="flex items-center h-full absolute right-[-2rem]">
//                     <span className="text-4xl md:bg-gray3 rounded-full p-1">
//                         <FiChevronRight />
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }
