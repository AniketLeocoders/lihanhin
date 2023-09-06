// import { proxy, useSnapshot } from "valtio"
// import * as THREE from 'three';
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import RoomModel from './RoomModel';
import OptionButtons from './OptionButtons';
import { HexColorPicker } from 'react-colorful';
import LivingModel from '../living-room/LivingModel';


const RoomDemo = () => {
    const [floorConf, setFloorConf] = useState({ color: "blue" })
    const [wallConf, setWallConf] = useState({ color: 'yellow' })
    const [tableConf, setTableConf] = useState({ color: "green", visible: true })
    const [windowConf, setWindowConf] = useState({ color: "white", visible: true, glassColor: "pink" })
    const [setsidborderConf, setsetsidborderConf] = useState({ color: "red", visible: true })
    const [cabinateConf, setCabinateConf] = useState({ visible: true, color: "blue" })
    const [setselectedObject, setSetselectedObject] = useState(null)

    let RoomConfigurationOptions = [{ confFunc: setCabinateConf, title: "Cabinate" }, { confFunc: setTableConf, title: "table" }, { confFunc: setWindowConf, title: "window" }, { confFunc: setsetsidborderConf, title: "Border" },]

    const GetColor = (color) => {

        switch (setselectedObject) {
            case 'Floor_material':
                setFloorConf((pre) => ({ ...pre, color: color }));
                break;
            case 'Wood':
                setTableConf((pre) => ({ ...pre, color: color }));
                break;
            case 'Wall_material':
                setWallConf((pre) => ({ ...pre, color: color }))
                break;
            case 'Baseboard_material':
                setsetsidborderConf((pre) => ({ ...pre, color: color }));
                break;
            case 'Glass':
                // window glass color
                setWindowConf((pre) => ({ ...pre, glassColor: color }));
                break;
            default:
                break;
        }
    }

    return (
        <div className=' h-[100vh] flex relative bg-gray-500'>
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
                        <RoomModel
                            floorConf={floorConf}
                            wallConf={wallConf}
                            tableConf={tableConf}
                            windowConf={windowConf}
                            setsidborderConf={setsidborderConf}
                            cabinateConf={cabinateConf}
                            setSetselectedObject={setSetselectedObject}
                        />
                        {/* <LivingModel/> */}
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

            {/* <div className=" absolute flex flex-col gap-3 top-0 right-0 bg-gray-600 px-10 py-4 rounded-lg">
                <OptionButtons RoomConfigurationOptions={RoomConfigurationOptions} />
                <p className=' text-lg text-center mt-3 font-semibold text-white capitalize'>{setselectedObject} color</p>
                <HexColorPicker onChange={GetColor} />
            </div> */}
        </div>
    )
}

export default RoomDemo