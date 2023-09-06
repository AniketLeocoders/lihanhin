import { useDispatch } from "react-redux";
import { updateBathroomSlice } from "../../store/slices/BathroomSlice";
import { Html } from "@react-three/drei";
import { BathroomAnnotationArray } from "../../Constants";
import { useState } from "react";


const BathroomAnnotation = () => {
    const dispatch = useDispatch();
    const SelectOption = (Oneannote) => { dispatch(updateBathroomSlice({ ActiveObject: Oneannote })); }

    const [activeAnnotation, setActiveAnnotation] = useState('')
    return (
        <>
            {BathroomAnnotationArray?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`anote${i}`}>
                    <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setActiveAnnotation(anote.title)} onMouseLeave={() => setActiveAnnotation("")}
                    >
                        <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => SelectOption(anote)} />
                        <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>{`${anote.spotNumber}`}</text>
                    </svg>
                    {activeAnnotation == anote.title && <div id={'desc_'} className="annotationDescription" dangerouslySetInnerHTML={{ __html: `${anote.description}` }} />}
                </Html>
            )}
        </>
    )
}

export default BathroomAnnotation