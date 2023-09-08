
import { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import * as THREE from 'three';
import MordenKtchenModel from './MordenKtchenModel'
import MordenKitchenCofigurator from './MordenKitchenCofigurator'
import KitchenAnnotation from './configurator/KitchenAnnotation'

const MrdernKitchen = () => {
    const cameraRef = useRef();
    const kitchencanvasRef = useRef();

    const moveCameraToPosition = () => {
        // const newPosition = new THREE.Vector3(1, 1, 1); // Replace with the desired coordinates
        // cameraRef.current.position.copy(newPosition);
        console.log("object", cameraRef.current.position)
        // cameraRef.current.updateProjectionMatrix(); // If needed
    };

    return (
        <div className=' h-[100vh] flex relative bg-gray-500 overflow-hidden max-w-[100vw] max-h-[100vh]'>
            <div className=" flex-1">
                <Canvas ref={kitchencanvasRef} >
                    <PerspectiveCamera ref={cameraRef}
                        makeDefault
                        position={[4.9654, 3.167, 5.7372]}
                        rotation={[Math.PI / 8, 0, 0]}
                        fov={75} // Field of view
                        near={1} // Near clipping plane
                        far={100} // Far clipping plane
                    />
                    <Suspense fallback={null}>
                        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                        <ambientLight />
                        <spotLight intensity={0.9}
                            angle={0.1}
                            penumbra={1}
                            position={[10, 15, 10]}
                            castShadow />
                        <MordenKtchenModel />
                        <KitchenAnnotation />
                        <ContactShadows position={[5, 5, 0]} color="pink" />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}
                        // minDistance={-9}   // Adjust this value as needed
                        // maxDistance={5}  // Adjust this value as needed
                        />
                    </Suspense>
                </Canvas>
            </div>
            {/* <button onClick={moveCameraToPosition} className=' absolute top-0 right-0'>Move</button> */}
            <MordenKitchenCofigurator />
            
        </div>
    )
}

export default MrdernKitchen