import { NavLink } from 'react-router-dom'
import { linhanlogo } from '../Components/mordenKitchen/MordenKitchenCofigurator'
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
    return (
        <nav className=' flex justify-between items-center px-2 md:px-11 py-2 md:py-5'>
            <NavLink to='/' className=" w-48 h-10  md:w-60 md:h-14">
                <img src={linhanlogo} className=' w-full h-full object-contain' alt="" srcSet="" />
            </NavLink>


            <div className=" flex gap-3">
                <HiMenuAlt3 className=' text-3xl text-black md:hidden' />
                <nav className="md:ml-auto  flex-wrap items-center text-base justify-center hidden md:flex">
                    <p className="mr-5 cursor-pointer hover:border-b-2 border-cyan-500 hover:text-gray-900">First Link</p>
                    <p className="mr-5 cursor-pointer hover:border-b-2 border-cyan-500 hover:text-gray-900">Second Link</p>
                    <p className="mr-5 cursor-pointer hover:border-b-2 border-cyan-500 hover:text-gray-900">Third Link</p>
                    <p className="mr-5 cursor-pointer hover:border-b-2 border-cyan-500 hover:text-gray-900">Fourth Link</p>
                </nav>
                <button className=" items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0 hidden md:inline-flex">
                    Button
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24" >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar