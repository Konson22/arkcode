

export default function OurWorkSection() {
  return (
    <div className="px-[5%] py-[3rem] hidden">
        <h2 className="text-4xl font-bold text-center">Our Work</h2>
        <div className="mt-10">
            <div className="md:flex hidden">
                <div className=" bg-gray3 flex-1 m-3">
                    <img src={process.env.PUBLIC_URL+'./images/pexels-abet-llacer-919734.jpg'} alt="" />
                </div>
                <div className=" bg-gray3 m-3 flex-1 relative">
                    <img src={process.env.PUBLIC_URL+'./images/money-gcbbbadce1_12802.jpg'} alt="" />
                    <div className="w-[60%] bg-black/70 backdrop-blur-[5px] text-white absolute bottom-0 p-4">
                        <h3 className="text-xl font-bold">Test App</h3>
                        <p>
                            A well-designed website is not just a virtual storefront
                        </p>
                    </div>
                </div>
                <div className=" bg-gray3 m-3 flex-1">
                    <img src={process.env.PUBLIC_URL+'./images/web-design-template-copy-space-concept.jpg'} alt="" />
                </div>
            </div>
            <div className="flex">
                <div className="flex flex-col justify-center w-[40%] m-3 p-7">
                    <h2 className="text-4xl font-bold">All Projects</h2>
                    <p>
                        A well-designed website is not just a virtual storefront; it's an invitation to explore, an opportunity to engage, and a platform to connect with your target audience. With countless websites vying
                    </p>
                </div>
                <div className=" bg-gray3 m-3 flex-1">
                    <img src={process.env.PUBLIC_URL+'./images/pexels-abet-llacer-919734.jpg'} alt="" />
                </div>
                <div className=" bg-gray3 m-3 flex-1">
                    <img src={process.env.PUBLIC_URL+'./images/pexels-abet-llacer-919734.jpg'} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
