import { useDispatch } from "react-redux";
import { WallTiles } from "../../../Constants"
import { updateKitchenSlice } from "../../../store/slices/KitchenSlice";
import TilesCard from "./TilesCard"


const KitchenWallTiles = () => {
    let dispatch = useDispatch()
    let updateFloorTexture = (imglink) => {
        dispatch(updateKitchenSlice({ wallParameter: { wallTexture: imglink, }, }));
    }
    return (
        <div className="">
            <p className=" text-xl font-semibold mb-4 text-center">Wall Tiles</p>

            <div className=" flex gap-3 flex-col max-h-[85vh] overflow-y-scroll">
                {WallTiles?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateFloorTexture} />)}
            </div>
        </div>
    )
}

export default KitchenWallTiles