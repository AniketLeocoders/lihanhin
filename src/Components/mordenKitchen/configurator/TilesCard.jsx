const TilesCard = ({ updateTexture, src }) => {
    return (
        <div className=' max-w-[85%] w-full mx-auto drop-shadow-md bg-slate-100 aspect-video rounded-lg p-2 cursor-pointer border-2 border-gray-300'
            onClick={() => updateTexture(src)}
        >
            <img src={src} alt="" srcSet="" loading='lazy' className='rounded-lg w-full h-full object-cover border-0  border-gray-400 transition-all duration-300 ease-linear hover:border-2 max-h-full' />
        </div>
    )
}

export default TilesCard