import React from 'react'
import ToogleSwitch from '../ToogleSwitch'

const OptionButtons = ({ RoomConfigurationOptions }) => {
    return (
        <div className=' flex flex-col gap-2 text-white'>
            {RoomConfigurationOptions?.map((func) =>
                <ToogleSwitch key={func.title}
                    title={func.title}
                    onChange={(e) => { func.confFunc((pre) => ({ ...pre, visible: e.target.checked })) }} />
            )}
        </div>
    )
}

export default OptionButtons