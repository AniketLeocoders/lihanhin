import { useDispatch, useSelector } from "react-redux";
import { Bathroom_marble } from "../../../Constants";
import { useState } from "react";
import { SwitchTab } from "../../mordenKitchen/configurator/TableConfig";
import { updateBathroomSlice } from "../../../store/slices/BathroomSlice";
import TilesCard from "../../mordenKitchen/configurator/TilesCard";

const BathCounter = () => {
  const BathroomParameter = useSelector(state => state.BathroomParameter?.present);
  const [taggleTab, setTaggleTab] = useState('top')

  let dispatch = useDispatch()
  let updateCounterTexture = (imgSrc) => {
    if (taggleTab == 'top') {
      dispatch(updateBathroomSlice({ cabibate: { TopTexture: imgSrc, BodyTexture: BathroomParameter.cabibate.BodyTexture } }));
    } else {
      dispatch(updateBathroomSlice({ cabibate: { BodyTexture: imgSrc, TopTexture: BathroomParameter.cabibate.TopTexture } }));
    }
  }

  return (
    <div className="">
      <p className=" text-xl font-semibold mb-4 text-center">Counter</p>
      <SwitchTab taggleTab={taggleTab} setTaggleTab={setTaggleTab} />

      <div className=" flex gap-3 flex-col max-h-[82vh] overflow-y-scroll">
        {Bathroom_marble?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateCounterTexture} />)}
      </div>
    </div>
  )
}

export default BathCounter