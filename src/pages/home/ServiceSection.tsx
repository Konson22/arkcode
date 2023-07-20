import { FaTabletAlt, FaTv, FaPaintBrush } from "react-icons/fa"
import { FiArrowRight } from "react-icons/fi"
import { Link } from "react-router-dom"


export default function ServiceSection() {
  return (
    <div className="md:px-[8%] px-5 py-[4rem]">
        <h2 className="md:text-4xl text-2xl font-bold text-center">OUR SERVICES</h2>
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-14 mt-20">
            {servicesData.map(service => (
                <div className="bg-gray rounded-md md:p-8 p-4 header">
                    <div 
                        className="
                            h-[7rem] w-[7rem] flex items-center justify-center rounded-full text-4xl 
                            md:mt-[-4.5rem] mt-[-3.4rem] mx-auto bg-red-500 text-white border-8 border-white
                        "
                    >
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold my-3">{service.title}</h3>
                    <p>{service.text}</p>
                    <div className="mt-4 md:mb-0 mb-3">
                        <Link className=" border border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white rounded flex items-center w-[max-content] sm:text-sm px-5 py-2" to={service.path}>
                            Learn more
                            <FiArrowRight className="ml-2" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}


const servicesData = [
    {
        title:'Web Design & Developement',
        text:`Our commitment doesn't end with the launch of your website. We offer ongoing support, updates, and maintenance to ensure your website remains secure, functional, and up-to-date`,
        path:'/web-design',
        icon:<FaTv />,
    },
    {
        title:'Mobile App Developement',
        text:`Our commitment doesn't end with the launch of your website. We offer ongoing support, updates, and maintenance to ensure your website remains secure, functional, and up-to-date`,
        path:'/mobile-app',
        icon:<FaTabletAlt />,
    },
    {
        title:'Graphics Design',
        text:`Our commitment doesn't end with the launch of your website. We offer ongoing support, updates, and maintenance to ensure your website remains secure, functional, and up-to-date`,
        path:'/graphic-design',
        icon:<FaPaintBrush />,
    },
]