import { useDispatch } from "react-redux";
import { Marbletexture } from "../../Room/RoomModel";
import TilesCard from "../../mordenKitchen/configurator/TilesCard";
import { updateBathroomSlice } from "../../../store/slices/BathroomSlice";

const BathfloorConfig = () => {
    let dispatch = useDispatch()
    let updateFloorTexture = (imglink) => {
        dispatch(updateBathroomSlice({ floorParameter: { CureentfloorTexture: imglink, }, }));
    }

    return (
        <div className="">
            <p className=" text-xl font-semibold mb-4 text-center">Floor Tiles</p>
            <div className=" flex gap-3 flex-col max-h-[82vh] overflow-y-scroll">
                {Marbletexture?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateFloorTexture} />)}
            </div>
        </div>
    )
}

export default BathfloorConfig