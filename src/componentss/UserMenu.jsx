import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
export let Divider = () => { return (<div className=" w-[3px] bg-gray-500 h-6 rounded" />) }


import SaveImage from './SaveImage';
import ShareDemo from './ShareDemo';
const UserMenu = ({ screenshotRef }) => {
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <div className='absolute top-0 right-0 p-3 mt-16 md:mt-5 mr-5  rounded-3xl  bg-white flex items-center gap-3 transition-all' >
            <div className={`${openMenu ? "flex" : "hidden"}  gap-3 items-center`}>
                <SaveImage screenshotRef={screenshotRef} />
                <Divider />
                {openMenu && <ShareDemo />}
            </div>
            <div className=' cursor-pointer flex items-center select-none' onClick={() => setOpenMenu(pre => { return !pre })}>
                {openMenu ? <MdClose className=' md:text-2xl select-none' /> : <AiOutlineMenu className=' md:text-xl select-none' />}
            </div>
        </div >
    )
}

export default UserMenu