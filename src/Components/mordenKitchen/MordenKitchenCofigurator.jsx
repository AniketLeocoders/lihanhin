import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import KitchenFloorConf from "./configurator/KitchenFloorConf";
import CabinateTopColor from "./configurator/CabinateTopColor";
import KitchenWallTiles from "./configurator/KitchenWallTiles";
import MachineColorConfig from "./configurator/MachineColorConfig";
import TableConfig from "./configurator/TableConfig";
import { updateKitchenSlice } from "../../store/slices/KitchenSlice";
import logo from "../../assets/lianhinlogo .png"

export let linhanlogo = logo

export let ConfigHead = ({ closeConfigurator }) => {
    return (
        <div className=" flex justify-between  items-center mb-4">
            <NavLink to="/" className=" text-3xl font-bold text-orange-600"><img className=" w-48 h-14 object-contain" src={logo} alt="" srcSet="" /></NavLink>
            <p className="p-1 rounded-full text-white  bg-slate-800 w-fit cursor-pointer" onClick={() => closeConfigurator()}><FaChevronLeft /></p>
        </div>
    )
}

const MordenKitchenCofigurator = () => {
    let dispatch = useDispatch()
    const KitchenParameter = useSelector(state => state.KitchenParameter);
    let currentOption = KitchenParameter.ActiveObject.title

    const closeConfigurator = () => { dispatch(updateKitchenSlice({ ActiveObject: {} })); }
    return (
        <div className={` ${currentOption ? `left-0` : `left-[-450px]`} absolute top-0  bg-slate-50 p-3 transition-all duration-500 ease-in-out w-full max-w-sm h-[100vh] `}>
            <ConfigHead closeConfigurator={closeConfigurator} />
            {currentOption === "Floor" && < KitchenFloorConf />}
            {currentOption === "cabinate" && < CabinateTopColor />}
            {currentOption === "wall" && < KitchenWallTiles />}
            {currentOption === "table" && < TableConfig />}
            {currentOption === "fridge" && < MachineColorConfig />}
        </div>
    )
}

export default MordenKitchenCofigurator