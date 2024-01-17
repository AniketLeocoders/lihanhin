

const CustumeBtn = ({ className, onClick, children }) => {
    return (
        <button type="button" className={` ${className} text-white  w-fit rounded-lg font-medium  text-sm px-5 py-2.5 flex gap-1 items-center`} onClick={onClick} >{children}</button>
    )
}

export default CustumeBtn