import { useDispatch } from "react-redux";
import { Bathroom_wall_tiles } from "../../../Constants";
import TilesCard from "../../mordenKitchen/configurator/TilesCard";
import { updateBathroomSlice } from "../../../store/slices/BathroomSlice";

const BathWallTiles = () => {
    let dispatch = useDispatch()
    let updateWallTexture = (imglink) => {
        dispatch(updateBathroomSlice({ wallParameter: { wallTexture: imglink, }, }));
    }
    return (
        <div className="">
            <p className=" text-xl font-semibold mb-4 text-center">Wall Tiles</p>

            <div className=" flex gap-3 flex-col max-h-[85vh] overflow-y-scroll">
                {Bathroom_wall_tiles?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateWallTexture} />)}
            </div>
        </div>
    )
}

export default BathWallTiles