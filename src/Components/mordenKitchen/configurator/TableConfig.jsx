import { useState } from "react"
import { tableBodyMarble, tableTopTexture } from "../../../Constants"
import TilesCard from "./TilesCard"
import { useDispatch, useSelector } from "react-redux"
import { updateKitchenSlice } from "../../../store/slices/KitchenSlice"


export let SwitchTab = ({ setTaggleTab, taggleTab }) => {
    return (
        <div className="flex justify-evenly gap-3 mb-3">
            <p className={` ${taggleTab == 'top' ? `text-red-600  border-b-4 border-red-600` : ``} text-xl font-semibold capitalize cursor-pointer`}
                onClick={() => { setTaggleTab('top') }}
            >Top</p>
            <p className={`  ${taggleTab == 'body' ? `text-red-600  border-b-4 border-red-600` : ``}  text-xl font-semibold capitalize cursor-pointer`}
                onClick={() => { setTaggleTab('body') }}
            > body</p >
        </div >
    )
}

const TableConfig = () => {
    let dispatch = useDispatch()
    const KitchenParameter = useSelector(state => state.KitchenParameter);
    const [taggleTab, setTaggleTab] = useState('top')



    let updateTableTexture = (imgSrc) => {
        if (taggleTab == 'top') {
            dispatch(updateKitchenSlice({ table: { TopTexture: imgSrc, BodyTexture: KitchenParameter.table.BodyTexture } }));
        } else {
            dispatch(updateKitchenSlice({ table: { BodyTexture: imgSrc, TopTexture: KitchenParameter.table.TopTexture } }));
        }
    }

    return (
        <>
            <div>
                <p className=" text-xl font-semibold mb-4 text-center capitalize">table configuration</p>
                <SwitchTab taggleTab={taggleTab} setTaggleTab={setTaggleTab} />

                {taggleTab == 'body' &&
                    <div className="">
                        <div className=" flex gap-3 flex-col max-h-[80vh] overflow-y-scroll">
                            {tableBodyMarble?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateTableTexture} />)}
                        </div>
                    </div>
                }

                {taggleTab == 'top' &&
                    <div className="">
                        <div className=" flex gap-3 flex-col max-h-[80vh] overflow-y-scroll">
                            {tableTopTexture?.map((imglink) => <TilesCard key={imglink} src={imglink} updateTexture={updateTableTexture} />)}
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default TableConfig