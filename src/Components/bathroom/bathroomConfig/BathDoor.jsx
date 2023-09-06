import { useDispatch } from "react-redux";
import { Wooden_texture } from "../../../Constants";
import TilesCard from "../../mordenKitchen/configurator/TilesCard";
import { updateBathroomSlice } from "../../../store/slices/BathroomSlice";


const BathDoor = () => {
  let dispatch = useDispatch()
  let updateDoorTexture = (imglink) => {
    dispatch(updateBathroomSlice({ door: { texture: imglink, }, }));
  }

  return (
    <div className="">
      <p className=" text-xl font-semibold mb-4 text-center">Door Texture</p>
      <div className=" flex gap-3 flex-col max-h-[82vh] overflow-y-scroll">
        {Wooden_texture?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateDoorTexture} />)}
      </div>
    </div>
  )
}

export default BathDoor