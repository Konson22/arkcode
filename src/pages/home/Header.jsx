// import Svg from "../../components/Svg";

export default function Header() {
    return (
        <div
            className="clipp relative flex items-center text-white md:px-[8%] px-3 md:py-[8rem] py-[4rem]"
            style={{
                backgroundImage:`linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.17)), 
                url(${process.env.PUBLIC_URL+'./images/pexels-abet-llacer-919734.jpg'})`,
                backgroundSize:'100% 100%'
            }}
        >
            <div className="md:w-[65%] text-white">
                <h1 className="md:text-6xl text-3xl font-bold ">
                    Empowering Your <span className="text-red-600"> Digital </span> Dreams:
                    Unleash the Power of the <span className="text-red-700">Web </span> <span className="text-red-700">& Apps!</span> 
                </h1>
                <div className="flex mt-6">
                    <a href='#form' className="bg-red-700 rounded md:text-xl md:px-5 md:py-3 px-3 py-2">
                        Get a Quotation
                    </a>
                </div>
            </div>
            {/* <Svg /> */}
        </div>
    )
  }
  