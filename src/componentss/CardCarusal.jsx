

const CardCarusal = () => {

    let SliderCard = ({ style, className, id }) => {
        return (
            <label htmlFor={id}
                className={`${className} block w-full h-full border aniket mx-auto rounded-[20px] absolute left-0 right-0 transition-all`}
                style={style}
            >{id}</label>
        )
    }


    let PositionArray = [
        { transform: 'translate3d(0%, 0%, 17px)', height: "100%", zIndex: '6' },
        { transform: 'translate3d(14%, 2.5%, -100px)', height: "95%", zIndex: '5' },
        { transform: 'translate3d(25%, 7%, -100px)', height: "88%", zIndex: '4' },
        { transform: 'translate3d(35%, 11%, -100px)', height: "82%", zIndex: '3' },
        { transform: 'translate3d(43%, 17%, -100px)', height: "75%", zIndex: '2' },
        { transform: 'translate3d(49%, 22%, 17px)', height: "69%", zIndex: '1' },
    ]

    return (
        <div className=" flex items-center justify-center h-screen">
            <div className="relative bg-green-30 rounded-lg w-[480px] h-[604px] ">
                {PositionArray?.map((cardPostion, i) => (
                    <input className="hidden"
                        key={`dd${cardPostion.height}`}
                        type="radio"
                        name="slider"
                        id={`s${i + 1}`}
                    />
                ))}

                {PositionArray?.map((cardPostion, i) => (
                    <SliderCard
                        key={cardPostion.height}
                        id={`s${i + 1}`}
                        style={cardPostion}
                        className={`s${i + 1}`}
                    />
                ))}


                {/* <SliderCard style={{ transform: 'translate3d(-49%, 22%, 17px)', height: "69%" }} />
                <SliderCard style={{ transform: 'translate3d(-43%, 17%, -100px)', height: "75%" }} />
                <SliderCard style={{ transform: 'translate3d(-35%, 11%, -100px)', height: "82%" }} />
                <SliderCard style={{ transform: 'translate3d(-25%, 7%, -100px)', height: "88%" }} />
                <SliderCard style={{ transform: 'translate3d(-14%, 2.5%, -100px)', height: "95%" }} /> */}
                {/* <SliderCard style={{ transform: 'translate3d(0%, 0%, 17px)', height: "100%" }} className='activeCard' /> */}


                {/* <SliderCard style={{ transform: 'translate3d(49%, 22%, 17px)', height: "69%" }} />
                <SliderCard style={{ transform: 'translate3d(43%, 17%, -100px)', height: "75%" }} />
                <SliderCard style={{ transform: 'translate3d(35%, 11%, -100px)', height: "82%" }} />
                <SliderCard style={{ transform: 'translate3d(25%, 7%, -100px)', height: "88%" }} />
                <SliderCard style={{ transform: 'translate3d(14%, 2.5%, -100px)', height: "95%" }} />
                <SliderCard style={{ transform: 'translate3d(0%, 0%, 17px)', height: "100%" }} className='activeCard' /> */}
            </div>
        </div>
    )
}

export default CardCarusal


// let Carousel = ({ children }) => {
//     const [active, setActive] = useState(2);
//     return (
//         <div className=" border-green-400 border-2 relative flex justify-between">
//             {(active > 0) && <button className='nav left bg-red-700' onClick={() => setActive(i => i - 1)}>left arroe</button>}
//             {children}
//             {active < 3 && <button className='nav right bg-red-700' onClick={() => setActive(i => i + 1)}>right arrow</button>}
//         </div>
//     )
// }