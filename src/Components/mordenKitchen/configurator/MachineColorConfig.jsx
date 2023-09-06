import React from 'react'
import { ClrPicker } from './CabinateTopColor'
import { MetalColor } from '../../../Constants'
import { updateKitchenSlice } from '../../../store/slices/KitchenSlice'
import { useDispatch } from 'react-redux'

const MachineColorConfig = () => {
    let dispatch = useDispatch()
    let updatefridgeColor = (color) => { dispatch(updateKitchenSlice({ fridgeParameter: { color: color } })); }
    return (
        <div>
            <div>
                <p className='  mb-2 capitalize text-2xl font-semibold  text-red-500'>Fridge Color</p>
                <div className="flex flex-wrap gap-4 ">
                    <ClrPicker id="topcolor" onchangeFunction={updatefridgeColor} />
                    {MetalColor?.map((color, i) =>
                        <div key={`top${color + i}`} className=" w-16 aspect-square rounded-lg cursor-pointer  border-2 border-black" style={{ background: color }}
                            onClick={() => updatefridgeColor(color)}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MachineColorConfig