import { RiMenu3Fill } from "react-icons/ri";

let links = ["Home", "About us", "Services", "Projects", "Clients", "Contact us"]
const Navbar = () => {
    return (
        <nav className='flex justify-between p-3 bg-red-400'>
            <h1 className=" font-Poppins text-lg md:text-2xl uppercase font-extrabold">Sarang</h1>


            <div className="block md:hidden cursor-pointer">
                <RiMenu3Fill size={30} />
            </div>

            <ul className="hidden  md:flex items-center gap-4">
                {links.map((onelink) => <li key={onelink}
                    className="font-Poppins text-base capitalize font-medium cursor-pointer  transition-all">
                    {onelink}
                </li>)}
            </ul>
        </nav>
    )
}

export default Navbar
