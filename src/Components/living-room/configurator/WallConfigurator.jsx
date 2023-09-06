import { HexColorPicker } from 'react-colorful';
import { useDispatch, useSelector } from 'react-redux';
import { Color } from 'three';
import { updateLivingRoomSlice } from '../../../store/slices/LivingRoomSlice';

const WallConfigurator = () => {
    const LivingRoomParameter = useSelector(state => state.LivingRoomParameter);
    let dispatch = useDispatch()
    let updateWallColor = (color) => {
        LivingRoomParameter.ActiveObject.title === "wall" ?
            dispatch(updateLivingRoomSlice({ wallParameter: { color: color }, })) :
            dispatch(updateLivingRoomSlice({ secondWallParameter: { color: color }, }))
    }
    return (
        <div className=' w-full flex flex-wrap  gap-2 justify-end'>
            {(LivingRoomParameter.ActiveObject.title === "wall" || LivingRoomParameter.ActiveObject.title === "secondWall") &&
                <div className="">
                    <p className=' text-white font-bold text-center mb-2'>Select Wall Color</p>
                    <HexColorPicker onChange={updateWallColor} />
                </div>
            }
        </div>
    )
}

export default WallConfigurator