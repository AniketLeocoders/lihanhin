import { Html } from '@react-three/drei'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateLivingRoomSlice } from '../../store/slices/LivingRoomSlice';


let AnnotationArray = [
    {
        title: "Floor",
        spotNumber: 1,
        description: "<p>Click on this to change the floor tiles</p>",
        camPos: {
            x: 5,
            y: -5,
            z: 2
        },
        position: {
            x: 1,
            y: 1,
            z: 3
        }
    },
    {
        title: "wall",
        spotNumber: 2,
        description: "<p>Click on this to change the wall color</p>",
        camPos: {
            x: 7.13,
            y: 4.33,
            z: 1.98
        },
        position: {
            x: 1,
            y: 2.3,
            z: -1.5
        }
    },
    {
        title: "tv",
        spotNumber: 3,
        description: "<p>Click on this to change the TV program</p>",
        camPos: {
            x: 7.13,
            y: 1.15,
            z: 0.66
        },
        position: {
            x: 1.4,
            y: 1.7,
            z: -1.5
        }
    },
    {
        title: "sofa",
        spotNumber: 8,
        description: "<p>Click on this to change the sofa lather</p>",
        camPos: {
            x: 13.05,
            y: 4.35,
            z: 5.06
        },
        position: {
            x: 1.5,
            y: 1,
            z: 2
        }
    },
    {
        title: "secondWall",
        spotNumber: 9,
        description: "<p>Click on this to change this wall color</p>",
        camPos: {
            x: 13.05,
            y: 4.35,
            z: 5.06
        },
        position: {
            x: 4.3,
            y: 2,
            z: 1
        }
    },
]





const LivingAnnotation = () => {
    const dispatch = useDispatch();
    const OptionOptions = (Oneannote) => {
        dispatch(updateLivingRoomSlice({ ActiveObject: Oneannote }));
    }

    const [activeAnnotation, setActiveAnnotation] = useState('')

    return (
        <>
            {AnnotationArray?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`anote${i}`}>
                    <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setActiveAnnotation(anote.title)} onMouseLeave={() => setActiveAnnotation("")}
                    >
                        <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => OptionOptions(anote)} />
                        <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>{`${anote.spotNumber}`}</text>
                    </svg>
                    {activeAnnotation == anote.title && <div id={'desc_'} className="annotationDescription" dangerouslySetInnerHTML={{ __html: `${anote.description}` }} />}
                    {/* <img style={{ cursor: 'pointer', height: "34px", width: '34px' }} src="https://tilesview.ai/app/visualizer/images/surface_marker.svg"
                        onMouseEnter={() => setActiveAnnotation(anote.title)} onMouseLeave={() => setActiveAnnotation("")}
                        alt="" srcSet="" /> */}
                </Html>
            )}
        </>
    )
}

export default LivingAnnotation