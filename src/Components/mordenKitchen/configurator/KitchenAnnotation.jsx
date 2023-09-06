import { useDispatch } from 'react-redux';
import { KitchenAnnotationArray } from '../../../Constants';
import { useState } from 'react';
import { Html } from '@react-three/drei';
import { updateKitchenSlice } from '../../../store/slices/KitchenSlice';

const KitchenAnnotation = () => {
    const dispatch = useDispatch();
    const SelectOption = (Oneannote) => { dispatch(updateKitchenSlice({ ActiveObject: Oneannote })); }

    const [activeAnnotation, setActiveAnnotation] = useState('')
    return (
        <>
            {KitchenAnnotationArray?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`anote${i}`}>
                    <svg height="34" width="34" transform="translate(-16 -16)" style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setActiveAnnotation(anote.title)} onMouseLeave={() => setActiveAnnotation("")}
                    >
                        <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => SelectOption(anote)} />
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

export default KitchenAnnotation