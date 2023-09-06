import { cabibate } from '../../../Constants'
import { useDispatch } from 'react-redux'
import { updateKitchenSlice } from '../../../store/slices/KitchenSlice'
import { CiPickerHalf } from "react-icons/ci";

export let ClrPicker = ({ id, onchangeFunction, }) => {
    return (
        <>
            <input type="color" name="" id={id} onChange={(e) => onchangeFunction(e.target.value)} hidden />
            <label htmlFor={id} className=" w-16 aspect-square rounded-lg cursor-pointer flex justify-center items-center  border-2 border-black"
            ><CiPickerHalf className=' text-3xl text-red-600' /></label>
        </>
    )
}

const CabinateTopColor = () => {
    let dispatch = useDispatch()
    let updateTopColor = (color) => {
        dispatch(updateKitchenSlice({ cabibate: { topColor: color } }));
    }
    let updateBodyColor = (color) => {
        dispatch(updateKitchenSlice({ cabibate: { bodyColor: color } }));
    }
    let updateDoorColor = (color) => {
        dispatch(updateKitchenSlice({ cabibate: { doorColor: color } }));
    }
    let updatehandleColor = (color) => {
        dispatch(updateKitchenSlice({ cabibate: { handleColor: color } }));
    }

    return (
        <div className=" flex flex-col gap-6">
            <div>
                <p className='  mb-2 capitalize text-2xl font-semibold  text-red-500'>Cabinate Top Color</p>
                <div className="flex flex-wrap gap-4 ">
                    <ClrPicker id="topcolor" onchangeFunction={updateTopColor} />
                    {cabibate.topColors?.map((color, i) =>
                        <div key={`top${color + i}`} className=" w-16 aspect-square rounded-lg cursor-pointer  border-2 border-black" style={{ background: color }}
                            onClick={() => updateTopColor(color)}
                        />
                    )}
                </div>
            </div>

            <div>
                <p className='  mb-2 capitalize text-2xl font-semibold  text-red-500'>Cabinate Body Color</p>
                <div className="flex flex-wrap gap-4 ">
                    <ClrPicker id="bodycolor" onchangeFunction={updateBodyColor} />

                    {cabibate.bodyColors?.map((color, i) =>
                        <div key={`Body${color + i}`} className="w-16 aspect-square rounded-lg cursor-pointer  border-2 border-black" style={{ background: color }}
                            onClick={() => updateBodyColor(color)} />
                    )}

                </div>
            </div>

            <div>
                <p className='  mb-2 capitalize text-2xl font-semibold  text-red-500'>Cabinate Door Color</p>
                <div className="flex flex-wrap gap-4 ">
                    <ClrPicker id="doorcolor" onchangeFunction={updateDoorColor} />

                    {cabibate.doorColors?.map((color, i) =>
                        <div key={`door${color + i}`} className="w-16 aspect-square rounded-lg cursor-pointer  border-2 border-black" style={{ background: color }}
                            onClick={() => updateDoorColor(color)} />
                    )}

                </div>
            </div>
            <div>
                <p className='  mb-2 capitalize text-2xl font-semibold  text-red-500'>Cabinate handle Color</p>
                <div className="flex flex-wrap gap-4 ">
                    <ClrPicker id="handlecolor" onchangeFunction={updatehandleColor} />

                    {cabibate.handleColors?.map((color) =>
                        <div key={`handle${color}`} className="w-16 aspect-square rounded-lg cursor-pointer  border-2 border-black" style={{ background: color }}
                            onClick={() => updatehandleColor(color)} />
                    )}

                </div>
            </div>


        </div>
    )
}

export default CabinateTopColor