import { useState } from "react"
import { BsSearch } from "react-icons/bs"
import { LuFilter } from "react-icons/lu"

let SearchField = () => {
    const [filter, setFilter] = useState(false)
    return (
        <div className=" p-2 rounded bg-gray-100 flex flex-col ">
            <div className="flex p-1 rounded flex-1 gap-2 ">
                <div className="flex items-center gap-2 flex-1 px-2 bg-white  rounded-md">
                    <input className=" p-0 border-none text-lg flex-1 active:ring-0 focus:ring-0" type="text" name="" id="" />
                    <BsSearch className=" cursor-pointer " />
                </div>
                <button className=" p-2 flex cursor-pointer select-none gap-1 items-center rounded-md hover:bg-slate-300 "
                    onClick={() => setFilter(pre => { return !pre })}
                >
                    <LuFilter /> filter
                </button>
            </div>

            {filter &&
                <div className=" ">
                    <div >Lorem ipsum dolor sit amet.</div>
                </div>
            }
        </div>
    )

}

const SortFilter = () => {
    return (
        <>
            <SearchField />
        </>
    )
}

export default SortFilter