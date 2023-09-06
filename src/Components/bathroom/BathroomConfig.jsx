import { useDispatch, useSelector } from "react-redux";
import { updateBathroomSlice } from "../../store/slices/BathroomSlice";
import { ConfigHead } from "../mordenKitchen/MordenKitchenCofigurator";
import BathfloorConfig from "./bathroomConfig/BathfloorConfig";
import BathWallTiles from "./bathroomConfig/BathWallTiles";
import BathCounter from "./bathroomConfig/BathCounter";
import BathDoor from "./bathroomConfig/BathDoor";
import BathWallColor from "./bathroomConfig/BathWallColor";


const BathroomConfig = () => {
    let dispatch = useDispatch()
    const BathroomParameter = useSelector(state => state.BathroomParameter?.present);
    let currentOption = BathroomParameter?.ActiveObject?.title

    const closeConfigurator = () => {
        dispatch(updateBathroomSlice({ ActiveObject: {} }));
    }
    return (
        <div className={` ${currentOption ? `left-0` : `left-[-450px]`} absolute top-0  bg-slate-50 p-3 transition-all duration-500 ease-in-out w-full max-w-sm h-[100vh] `}>
            <ConfigHead closeConfigurator={closeConfigurator} />
            {currentOption === "Floor" && < BathfloorConfig />}
            {currentOption === "wall" && < BathWallTiles />}
            {currentOption === "Counter" && < BathCounter />}
            {currentOption === "Door" && < BathDoor />}
            {currentOption === "wallColor" && < BathWallColor />}
        </div>
    )
}

export default BathroomConfig