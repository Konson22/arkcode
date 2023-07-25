import { useState } from "react"
import { navigationsLinksData } from "../../assets/data"
import { NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"

export default function Navbar() {

  const [navBg, setNavBg] = useState(false)


  const changeNavBg = () => {
    if(window.scrollY >= 40){
      setNavBg(true)
    }else{
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', changeNavBg)
  return (
    <nav 
      className={`
        w-full bg-rose-700 sticky left-0 top-0 flex items-center justify-between px-[5%] py-3 z-40
        ${navBg ? 'bg-rose-700':'text-white'}
      `}
    >
      <div className="flex items-center flex-1">
        <img className="md:h-[3rem] h-[2.5rem] md:w-[3rem] w-[2.5rem] rounded-full" src={process.env.PUBLIC_URL+'./images/logo.jpeg'} alt="" />
        <span className="text-3xl text- ml-4">ArkCode</span>
      </div>
      <div className="md:block hidden">
        <ul className="flex">
          {navigationsLinksData.map(link => (
            <li className="">
              <NavLink className='px-6' to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:block hidden">
        <button className="border bg-white text-rose-700 px-4 py-2 rounded-md">Get Quotation</button>
      </div>
      <div className="md:hidden block text-2xl">
        <FaBars />
      </div>
    </nav>
  )
}
