const ToogleSwitch = ({ title, onChange }) => {
    return (
        <label htmlFor={title} className="flex items-center cursor-pointer" >
            <div className="relative">
                <input id={title} type="checkbox" className="sr-only"
                    onChange={onChange}
                    defaultChecked={true}
                />
                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
            </div>
            <div className="ml-3 font-medium capitalize">{title}</div>
        </label>
    )
}

export default ToogleSwitch