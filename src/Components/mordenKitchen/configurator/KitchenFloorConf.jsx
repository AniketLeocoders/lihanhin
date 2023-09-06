import { useDispatch, useSelector } from "react-redux";
import { Marbletexture } from "../../Room/RoomModel"
import TilesCard from "./TilesCard"
import { updateKitchenSlice } from "../../../store/slices/KitchenSlice";


const KitchenFloorConf = () => {
    let dispatch = useDispatch()
    let updateFloorTexture = (imglink) => {
        dispatch(updateKitchenSlice({ floorParameter: { CureentfloorTexture: imglink, }, }));
    }

    return (
        <div className="">
            <p className=" text-xl font-semibold mb-4 text-center">Floor Tiles</p>
            <div className=" flex gap-3 flex-col max-h-[85vh] overflow-y-scroll">
                {Marbletexture?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateFloorTexture} />)}
            </div>
        </div>
    )
}

export default KitchenFloorConf