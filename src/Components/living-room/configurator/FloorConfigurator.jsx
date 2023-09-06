import { useDispatch, useSelector } from 'react-redux';
import { Marbletexture } from '../../Room/RoomModel';
import { updateLivingRoomSlice } from '../../../store/slices/LivingRoomSlice';

const FloorConfigurator = () => {
  const LivingRoomParameter = useSelector(state => state.LivingRoomParameter);
  let dispatch = useDispatch()
  let updateFloorTexture = (imglink) => {
    dispatch(updateLivingRoomSlice({ floorParameter: { CureentfloorTexture: imglink, }, }));
  }
  return (
    <div className=' w-full flex flex-wrap  gap-2 justify-end'>
      {LivingRoomParameter.ActiveObject.title === 'Floor' &&
        Marbletexture?.map((imglink) =>
          <div className='w-32 h-32 cursor-pointer' key={imglink} onClick={() => updateFloorTexture(imglink)} >
            <img src={imglink} className=' w-full h-full object-cover' alt="" srcSet="" />
          </div>
        )
      }
    </div>
  )
}

export default FloorConfigurator