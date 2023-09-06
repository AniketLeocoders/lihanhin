// import { HexColorPicker } from 'react-colorful';
// import ChairModel from '../chair/ChairModel';
import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import LivingModel from '../living-room/LivingModel';
import LivingAnnotation from './LivingAnnotation';
import { Marbletexture } from '../Room/RoomModel';
import Configurator from './Configurator';

const LivingRoom = () => {
    const [activename, setActivename] = useState(Marbletexture[0])

    return (
        <div className=' h-[100vh] flex relative bg-gray-500 '>
            <div className=" flex-1">
                <Canvas>
                    <Suspense fallback={null}>
                        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                        <ambientLight />
                        <spotLight intensity={0.9}
                            angle={0.1}
                            penumbra={1}
                            position={[10, 15, 10]}
                            castShadow />
                        <LivingModel activename={activename} />
                        <LivingAnnotation />
                        {/* <ChairModel/> */}
                        <ContactShadows position={[5, 5, 0]} color="pink" />
                        <OrbitControls
                            enablePan={true}
                            enableZoom={true}
                            // enableRotate={false}
                            enableRotate={true}
                        />
                    </Suspense>
                </Canvas>
            </div>
            <Configurator setActivename={setActivename}/>
            
        </div>
    )
}

export default LivingRoom