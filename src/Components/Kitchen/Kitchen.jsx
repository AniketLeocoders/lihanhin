import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF, useTexture } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"
import * as THREE from 'three';



function Model(props) {

    const group = useRef()
    const Floorref = useRef();
    const { nodes, materials } = useGLTF('/mordenkitchen.glb')

    // // Calculate bounding box dimensions
    // const box = new THREE.Box3();
    // box.setFromObject(Floorref.current);

    // // Extract dimensions from bounding box
    // const floorWidth = box.max.x - box.min.x;
    // const floorHeight = box.max.y - box.min.y;
    // const floorDepth = box.max.z - box.min.z;


    // console.log("object", floorWidth, floorHeight, floorDepth,)




    // const MachinebackgroundTexture = useTexture('https://png.pngtree.com/thumb_back/fh260/background/20190528/pngtree-gold-marble-texture-background-image_115783.jpg');
    const MachinebackgroundTexture = useTexture('https://cpimg.tistatic.com/06502912/b/4/Natural-Wooden-Texture-Paper-Based-Laminate-Sheet.jpg');

    // Set the texture's UV mapping to cover the entire mesh
    // MachinebackgroundTexture.wrapS = MachinebackgroundTexture.wrapT = THREE.RepeatWrapping;
    MachinebackgroundTexture.wrapS = MachinebackgroundTexture.wrapT = THREE.ClampToEdgeWrapping;
    MachinebackgroundTexture.repeat.set(1, 1);

    // Set the UV coordinates to stretch the image
    // MachinebackgroundTexture.wrapS = MachinebackgroundTexture.wrapT = THREE.ClampToEdgeWrapping;
    // MachinebackgroundTexture.repeat.set(1, 1); // No repetition

    // // Adjust UV mapping for stretching
    // MachinebackgroundTexture.matrixAutoUpdate = false;
    // MachinebackgroundTexture.matrix.setUvTransform(0, 0, 1, 1, 0, 0, 0);


    // Calculate the scale to fit the image
    // const imageAspect = MachinebackgroundTexture.image.height / MachinebackgroundTexture.image.width;
    // const meshAspect = 2.2 / 0.51; // Scale X / Scale Z of your mesh
    // const scale = meshAspect > imageAspect
    //     ? [2.2, 2.2 * imageAspect, 0.51]
    //     : [0.51 / imageAspect, 0.51, 0.51 / imageAspect];

    // // Adjust UV mapping for stretching
    // MachinebackgroundTexture.matrixAutoUpdate = false;
    // MachinebackgroundTexture.matrix.setUvTransform(0, 0, 1, 1, 0, 0, 0);


    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.Plane001.geometry}
                material={nodes.Plane001.material}
                position={[-3, 1.89, -1.12]}
                rotation={[-Math.PI / 2, 0, Math.PI]}
                scale={[6.04, 1, 3.09]}
            // material-color="red"
            />
            <mesh
                geometry={nodes.TopLeftCabinate.geometry}
                material={nodes.TopLeftCabinate.material}
                position={[-8.16, 4.33, 3.01]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.54, 0.92, 0.51]}
            />
            <mesh
                geometry={nodes.Cube013.geometry}
                material={nodes.Cube013.material}
                position={[2.24, 4.33, 3.01]}
                rotation={[0, -1.57, 0]}
                scale={[2.54, 0.92, 0.51]}
            />
            <mesh
                geometry={nodes.FTCab2.geometry}
                material={nodes.FTCab2.material}
                position={[-0.76, 4.32, -0.29]}
                scale={[2.2, 0.92, 0.51]}
                material-color="pink"
            />
            <mesh
                geometry={nodes.FTCab.geometry}
                material={nodes.FTCab.material}
                position={[-5.16, 4.32, -0.29]}
                scale={[2.2, 0.92, 0.51]}
            />
            <mesh
                geometry={nodes.Cube010.geometry}
                material={nodes.Cube010.material}
                position={[-0.3, 4.2, -0.5]}
                scale={[1, 1.15, 0.64]}
            />
            <mesh
                ref={Floorref}
                geometry={nodes.Floor.geometry}
                material={materials['Material.008']}
                position={[-2.74, -1.04, 5.1]}
                scale={6.01}
                material-color="#4f470d"
            >
                {/* <meshBasicMaterial map={MachinebackgroundTexture} /> */}
            </mesh>
            <mesh
                geometry={nodes.LeftCabinate.geometry}
                material={nodes.LeftCabinate.material}
                position={[-7.96, -0.08, 3.51]}
                rotation={[0, 1.57, 0]}
                scale={[2.2, 0.92, 1]}
                material-color="yellow"
            />
            <mesh
                geometry={nodes.FrontCabinate.geometry}
                material={nodes.FrontCabinate.material}
                position={[-3.96, -0.08, 0.01]}
                scale={[2.2, 0.92, 1]}
            />
            <mesh
                geometry={nodes.cloath.geometry}
                material={materials['Material.003']}
                position={[-3.4, 1.1, 0.28]}
                rotation={[0, 0.07, 0]}
                scale={[0.76, 0.07, 0.45]}
                material-color="red"
            />
            <mesh
                geometry={nodes.cabinate_top.geometry}
                material={materials['Material.005']}
                position={[-7.95, 1, 2.51]}
                rotation={[Math.PI, -1.57, 0]}
                scale={[-3.45, -0.08, -1]}
                material-color="red"
            />
            <mesh
                geometry={nodes.Cabinate_top.geometry}
                material={materials['Material.004']}
                position={[-4.12, 1, 0]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-2.85, -0.08, -1]}
                material-color="blue"

            />
            <mesh
                geometry={nodes.Peti_Box.geometry}
                material={nodes.Peti_Box.material}
                position={[2.17, 1.21, -0.34]}
                rotation={[0, -0.7, 0]}
                scale={[0.45, 0.23, 0.24]}

            />
            <mesh
                geometry={nodes.Utility.geometry}
                material={materials['Material.001']}
                position={[1.98, -0.37, 5.65]}
                rotation={[0, -1.57, 0]}
                scale={[1.07, 1.07, 1]}
                material-color="red"
            />
            <mesh
                geometry={nodes.Machine.geometry}
                material={materials['Material.007']}
                position={[-0.27, -0.06, 0.08]}
                scale={[1.02, 1.15, 1.06]}
            // material-color="gray"
            >
                <meshBasicMaterial map={MachinebackgroundTexture} />
            </mesh>

            <mesh geometry={nodes.GasOta.geometry} material={materials.Material}
                material-color="black"
            />
        </group>
    )
}


let CustumeConfig = () => {
    return (
        <h1>hello</h1>
    )
}




const Kitchen = () => {
    return (
        <div className=" w-full flex  h-[100vh] relative">
            <div className=" w-full ">
                <Canvas>
                    <pointLight position={[-2, 2, 2]} color="pink" intensity={3} distance={5} />

                    <Suspense fallback={null}>
                        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                        <ambientLight />
                        <spotLight intensity={10}
                            angle={0.1}
                            penumbra={1}
                            position={[1, 1, 1]}
                            castShadow />
                        <Model />
                        <ContactShadows position={[5, 5, 0]} color="pink" />

                        <OrbitControls enablePan={true}
                            enableZoom={true}
                            // enableRotate={false}
                            enableRotate={true}
                        />
                    </Suspense>
                </Canvas>
            </div>
            <div className=" flex-1 absolute top-0 transition-all right-0">
                <CustumeConfig />
            </div>
        </div>
    )
}

export default Kitchen