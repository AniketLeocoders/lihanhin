import React from 'react'
// import { Marbletexture } from '../Room/RoomModel'
// import { useDispatch, useSelector } from 'react-redux'
// import { updateLivingRoomSlice } from '../../store/slices/LivingRoomSlice'
import FloorConfigurator from './configurator/FloorConfigurator'
import WallConfigurator from './configurator/WallConfigurator'





const Configurator = ({ setActivename }) => {

    return (
        <div className=" absolute top-0 right-0 p-3 max-w-xs max-h-full overflow-y-scroll">
            <FloorConfigurator />
            <WallConfigurator />
        </div>
    )
}

export default Configurator