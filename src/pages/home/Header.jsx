

export default function Header() {
    return (
        <div
            className="flex items-center text-white md:px-[8%] px-3 md:pt-[12rem] pt-[7rem] md:pb-[10rem] pb-[4rem]"
            style={{
                backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
                url(${process.env.PUBLIC_URL+'./images/money-gcbbbadce1_1280.jpg'})`,
                backgroundSize:'100% 100%'
            }}
        >
            <div className="md:w-[75%] text-white">
                <h1 className="md:text-6xl text-3xl font-bold ">
                    Empowering Your <span className="text-red-600"> Digital Dreams: </span>
                    Unleash the Power of the  <span className="text-red-700">Web & Apps!</span> 
                </h1>
                <div className="flex mt-6">
                    <a href='#form' className="bg-red-700 rounded md:text-xl md:px-5 md:py-3 px-3 py-2">
                        Get a Quotation
                    </a>
                </div>
            </div>
        </div>
    )
  }
  

// export default function Header() {
//   return (
//     <div className="header h-[90vh] flex items-center bg-gray">
//         <div className="w-[65%] px-[6%]">
//             <h1 className="text-5xl font-bold">
//                 {/* Unleash Your Digital Potential with Cutting-Edge Web and App Solutions */}
//                 Empowering Your Digital Dreams: Unleash the Power of the Web & Apps!
//             </h1>
//         </div>
//     </div>
//   )
// }
