import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from 'react'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import BathroomModel from './BathroomModel'
import BathroomConfig from './BathroomConfig'
import BathroomAnnotation from './BathroomAnnotation'
import UserMenu from '../../componentss/UserMenu'
import UndoRestart from '../../componentss/UndoRestart'
import { resetBedroomSlice } from '../../store/slices/BathroomSlice'
import ModelLoader from '../../componentss/ModelLoader'


const Bathroom = () => {
    const bathroomcanvasRef = useRef();
    const cameraRef = useRef();
    const screenshotRef = useRef(null);
    const moveCameraToPosition = () => {
        // const newPosition = new THREE.Vector3(1, 1, 1); // Replace with the desired coordinates
        // cameraRef.current.position.copy(newPosition);
        console.log("object", cameraRef.current.position)
        // cameraRef.current.updateProjectionMatrix(); // If needed
    };


    return (
        <div className=' h-[100vh] flex relative bg-gray-500 '
            ref={screenshotRef}
        >
            <div className=" flex-1">
                <Canvas ref={bathroomcanvasRef}
                    gl={{ preserveDrawingBuffer: true }}
                >
                    <PerspectiveCamera
                        ref={cameraRef}
                        makeDefault
                        position={[3.5908, 1.7840, -1.734]}
                        // position={[2.3520, 1.36927, -1.2965]}
                        // position={[3.4368, 1.57895, -1.7096]}
                        // position={[3.7722, 2.0562, -0.7930]}
                        // position={[2.948, 1.5504, -2.110]}
                        // position={[5.2013, 2.69735, -2.194]}
                        // position={[4.5779, 1.727, -2.199]}
                        // rotation={[Math.PI / 8, 0, 0]}
                        fov={76} // Field of view
                    // far={100}
                    />
                    <Suspense fallback={<ModelLoader />}>
                        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                        <ambientLight  />
                        {/* <pointLight position={[1, 1, 1]} color="yellow" intensity={1} distance={50} /> */}
                        <BathroomModel />
                        <BathroomAnnotation />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}
                        // position={[3.5908, 1.7840, -1.734]}
                        //  minPolarAngle={0}
                        //  maxPolarAngle={Math.PI / 2} 
                        />
                    </Suspense>
                </Canvas>
            </div>
            <button onClick={moveCameraToPosition} className=' absolute top-0 right-0'>Move</button>
            <BathroomConfig />
            <UserMenu screenshotRef={bathroomcanvasRef} />
            <UndoRestart resetSlice={resetBedroomSlice} />
        </div>
    )
}

export default Bathroom