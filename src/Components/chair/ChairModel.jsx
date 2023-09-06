import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from 'three';


let textures = ["https://image.made-in-china.com/2f0j00tFgEyGTIOLbn/Embossed-Printed-Velvet-Sofa-Fabric.webp",
    "https://5.imimg.com/data5/SELLER/Default/2022/3/KH/WD/PI/2778331/suede-digital-print-sofa-fabric-500x500.png",
    "https://5.imimg.com/data5/LZ/PR/OB/SELLER-32848261/black-net-500x500.jpg"
]

const ChairModel = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('./models/chair.gltf')

    // Load texture images
    const legsTexture = useTexture('https://st2.depositphotos.com/8542600/11741/i/950/depositphotos_117418444-stock-photo-blue-cotton-denim-jeans-fabric.jpg');
    const cushionsTexture = useTexture(textures[1]);
    // const backTexture = useTexture('path-to-blue-texture.jpg');


    // Set texture wrapping and repeating properties
    cushionsTexture.wrapS = cushionsTexture.wrapT = THREE.RepeatWrapping;
    cushionsTexture.repeat.set(10, 10); // Adjust the repeat values as needed

    return (
        <group ref={group} {...props} dispose={null} scale={2.5}>
            <mesh
                geometry={nodes.legs.geometry}
                material={nodes.legs.material}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.1}
            // material-color='red'
            >
                <meshStandardMaterial map={legsTexture} />
            </mesh>
            <mesh
                geometry={nodes.cushions.geometry}
                material={materials.wire_196010216}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.1}
            // material-color='yellow'
            >
                <meshStandardMaterial map={cushionsTexture} />
            </mesh>
            <mesh
                geometry={nodes.back.geometry}
                material={nodes.back.material}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.1}

            />
            <mesh
                geometry={nodes.supports.geometry}
                material={nodes.supports.material}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.1}
                material-color='blue'
            />
            <mesh
                geometry={nodes.base.geometry}
                material={nodes.base.material}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={0.1}
            />
        </group>
    )
}
useGLTF.preload('./models/chair.gltf')

export default ChairModel