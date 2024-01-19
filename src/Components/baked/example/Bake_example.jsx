import { Environment, OrbitControls, Sparkles, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three';
import Bake_example_model from './Bake_example_model';
import Hall_model from '../../hall/Hall_model';
import Hallfinal11_model from '../../hall/Hallfinal11_model';
import Hallfinal111_new from '../../hall/Hallfinal111_new';
import CheckingModel from '../../hall/CheckingModel';
import RoomModel from '../../hall/RoomModel';
import CheckingModelTexture from '../../hall/CheckingModelTexture';
import LivingNewTextureModel from '../../hall/LivingNewTextureModel';
// import sjisd from "../../../../public/baked-02.jpeg"
// import sjisd from "/textures/leather/baked02.jpeg"

const Bake_example = ({ scale = Array.from({ length: 50 }, () => 0.5 + Math.random() * 4) }) => {
    return (
        <div className="h-screen flex flex-col">
            <div className="h-16 bg-white"></div>
            <div className=" bg-[#1d2142] flex flex-1">
                <div className="bg-white min-w-[320px]"></div>
                <div className="flex-1">
                    <Canvas camera={{ fov: 45, position: [-4, 2, -4] }}>
                        {/* <Sparkles count={100} size={5}   // count={scale.length}  size={scale}
                            position={[0, 0.9, 0]} scale={[4, 1.5, 4]} speed={0.8}
                        /> */}
                        <ambientLight intensity={1} />
                        {/* <pointLight position={[1.05, 1.2, -1]} intensity={2} color={'#ffe191'} />
                        <pointLight position={[0.4, 1.2, -1]} intensity={2} color={'#ffe191'} /> */}

                        <pointLight position={[-0.85, 1.2, -1]} intensity={3} color={'#ffe191'} />
                        <pointLight position={[0.85, 1.2, -1]} intensity={3} color={'#ffe191'} />

                        {/* <Stars radius={100} depth={10} count={5000} factor={4} saturation={0} fade speed={1} position={[0, 0.9, 0]} scale={[4, 1.5, 4]} /> */}


                        {/* <mesh>
                    <boxGeometry args={[7, 7, 7]} />
                    <meshStandardMaterial color={'pink'} side={THREE.BackSide} />
                </mesh> */}
                        {/* Blue Light near the ceiling */}
                        {/* <pointLight position={[-3, 3, 3]} intensity={20} color={0x00ff00} /> */}


                        {/* <Hall_model /> */}
                        {/* <Hallfinal11_model /> */}
                        {/* <Hallfinal111_new /> */}
                        {/* <CheckingModel /> */}


                        {/* <CheckingModelTexture /> */}

                        <LivingNewTextureModel />
                        {/* <RoomModel /> */}

                        {/* <Bake_example_model /> */}
                        {/* <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/dancing_hall_1k.hdr" blur={1} /> */}
                        <Environment preset="apartment" />
                        <OrbitControls />
                    </Canvas>

                </div>
            </div>
        </div>
    )
}

export default Bake_example