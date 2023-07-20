
export default function MobileAppPage() {
  return (
    <div>
       <div
            className="flex items-center text-white md:px-[8%] px-3 md:pt-[9rem] pt-[7rem] pb-[5rem]"
            style={{
              backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.5)), 
              url(${process.env.PUBLIC_URL+'./images/money-gcbbbadce1_1280.jpg'})`,
              backgroundSize:'100% 100%'
            }}
        >
            <div className="md:w-[75%] text-white">
                <h1 className="md:text-6xl text-3xl font-bold ">
                  Mobile Apps Developement! 
                </h1>
                <p className="md:text-2xl mt-3">
                  We focus on creating intuitive and seamless user experiences that guide visitors through your website, encouraging engagement and conversions.
                </p>
                <div className="flex mt-6">
                    <button className="bg-red-700 rounded md:text-xl md:px-5 md:py-3 px-3 py-2">Get a Quotation</button>
                    {/* <button className="bg-red-700 text-white rounded md:text-xl md:px-5 md:py-3 px-3 py-2 ml-4">Support</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}
