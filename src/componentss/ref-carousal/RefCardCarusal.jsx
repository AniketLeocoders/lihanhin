import { useState } from 'react'
import './RefCardCarusal.css'

const RefCardCarusal = () => {
    const [active, setActive] = useState(0)
    console.log(active)
    let SliderCard = ({ style, className, id }) => {
        return (
            <label htmlFor={id}
                className={`${className} ref-card block w-full  shadow-sm shadow-white  aniket mx-auto rounded-[20px] absolute left-0 right-0 `}
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
        { transform: 'translate3d(49%, 22%, 17px)', height: "69%", zIndex: '1' }, ,
        // { transform: 'translate3d(-14%, 2.5%, -100px)', height: "95%", zIndex: '5' },
        // { transform: 'translate3d(-25%, 7%, -100px)', height: "88%", zIndex: '4' },
        // { transform: 'translate3d(-35%, 11%, -100px)', height: "82%", zIndex: '3' },
        // { transform: 'translate3d(-43%, 17%, -100px)', height: "75%", zIndex: '2' },
        // { transform: 'translate3d(-49%, 22%, 17px)', height: "69%", zIndex: '1' },
    ]

    return (
        <div className=" flex items-center justify-center h-screen carusal-container">
            <div className="relative bg-green-30 rounded-lg w-[480px] h-[604px] ">
                {PositionArray?.map((cardPostion, i) => (
                    <input
                        key={`dd${cardPostion.height}`}
                        className="hidden"
                        type="radio" name="slider"
                        id={`s${i + 1}`}
                        defaultChecked={i === 0}
                        onChange={() => { setActive(i) }}
                    />
                ))}

                {PositionArray?.map((cardPostion, i) => (
                    <SliderCard key={cardPostion.height} id={`s${i + 1}`}
                        style={cardPostion}
                        className={`s${i + 1} ${active === i ? "active" : ""} ${active - 1 === i ? "pre-active" : ""}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default RefCardCarusal