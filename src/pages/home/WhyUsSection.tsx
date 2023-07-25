import { whyChooseUseData } from "../../assets/staticData";


export default function WhyUsSection() {
  return (
    <div className="md:flex px-[5%]">
        <div className="md:w-[45%]">
            <img src={process.env.PUBLIC_URL+'./images/people-2557396_1280.jpg'} alt="" />
        </div>
        <div className="flex-1 md:py-10">
            <div className="bg-gray2 md:ml-[-20%] w-[95% border border-red-5 p-7">
                <h2 className="text-4xl font-bold mb-5">Why to choose us?</h2>
                {whyChooseUseData.map((reason, index) => (
                    <div className="flex items-cente mb-5" key={index}>
                        <div className="flex-1 ml-4">
                            <h3 className="text-xl font-bold">{reason.title}</h3>
                            <p className="line-clamp-2">{reason.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    // <div className="header px-[8%] py-[4rem] md:flex">
    //     <div className="md:w-[40%]">
    //         <img src={process.env.PUBLIC_URL+'./images/illustration.png'} alt="" />
    //     </div>
    //     <div className="flex-1">
    //         <h2 className="text-4xl font-bold mb-8">Why Choose us?</h2>
    //         {whyChooseUseData.map((reason, index) => (
    //             <div className="flex items-cente mb-5" key={index}>
    //                 <div className="flex-1 ml-4">
    //                     <h3 className="text-xl font-bold">{reason.title}</h3>
    //                     <p>{reason.text}</p>
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // </div>
  )
}
