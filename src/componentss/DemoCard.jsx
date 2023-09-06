import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { BiShareAlt } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const DemoCard = (props) => {
    let { imgUrl, title, description, demourl } = props.demo
    const navigate = useNavigate();
    const [like, setLike] = useState(false)

    return (
        <div className=' flex-1 max-w-sm min-w-[300px] rounded-md overflow-hidden p-2 border border-gray-300 shadow-xl hover:shadow-2xl ' >
            <div className=" w-full aspect-video rounded-md overflow-hidden   bg-gray-400"> {/* animate-pulse */}
                <img src={imgUrl} className=' w-full  h-full object-cover' alt="" srcSet="" />
            </div>
            <div className="p-2">
                <p className=' capitalize text-lg font-bold '>{title}</p>
                <p>{description}</p>
                <div className="flex justify-between mt-3 items-center">
                    <div className="flex gap-4">
                        <p className=' p-1 rounded-full hover:bg-gray-300 cursor-pointer'
                            onClick={() => setLike(pre => { return !pre })}
                        >
                            {like ? <MdFavorite className=' text-2xl text-red-600' /> : <MdFavoriteBorder className=' text-2xl ' />}
                        </p>
                        <p className=' p-1 rounded-full hover:bg-gray-300 cursor-pointer'>
                            <BiShareAlt className=' text-2xl' />
                        </p>
                    </div>

                    <button className=" items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0 inline-flex" onClick={() => { navigate(demourl) }} >
                        Demo
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DemoCard