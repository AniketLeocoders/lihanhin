import React, { useRef } from 'react'
import { MeshPortalMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';


const Hall_model = (props) => {
    const group = useRef()
    const texture = useTexture('/textures/leather/hallbake.jpg')
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });
    const { nodes, materials } = useGLTF('./models/bakehall.glb')
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-34.19, 0.5, 4.42]}>
                <mesh geometry={nodes.Plane002.geometry} material={textureMaterial} position={[1.51, 2.99, -6.43]} />
            </group>
            <group position={[-12.36, 0, 17.3]}>
                <mesh
                    geometry={nodes.Gardenplant001.geometry}
                    material={textureMaterial}
                    position={[-4.63, 6.33, -10.87]}
                />
            </group>
            <mesh geometry={nodes.wall.geometry} material={textureMaterial} position={[-15.74, 14.68, -0.06]} />
            <mesh geometry={nodes.flore.geometry} material={textureMaterial} position={[-15.75, 3.55, 12.7]} />
            <mesh geometry={nodes.wall001.geometry} material={textureMaterial} position={[1.85, 14.67, 12.93]} />
            <mesh
                geometry={nodes.wall002.geometry}
                material={textureMaterial}
                position={[-33.44, 14.67, 12.99]}
                rotation={[0, 0, 0.01]}
            />
            <mesh geometry={nodes.celling.geometry} material={textureMaterial} position={[-15.71, 25.91, 11.98]} />
            <mesh geometry={nodes.wall_wood.geometry} material={textureMaterial} position={[-30.76, 14.65, 0.24]} />
            <mesh geometry={nodes.wallplate1.geometry} material={textureMaterial} position={[-22, 14.76, 0.33]} />
            <mesh geometry={nodes.wallplate2.geometry} material={textureMaterial} position={[-9.46, 14.76, 0.33]} />
            <mesh
                geometry={nodes.tv.geometry}
                material={textureMaterial}
                position={[-15.69, 14.32, 0.67]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh geometry={nodes.cabinate.geometry} material={textureMaterial} position={[-15.74, 6.01, 1.56]} />
            <mesh geometry={nodes.table.geometry} material={textureMaterial} position={[-15.82, 4.82, 7.89]} />
            <mesh
                geometry={nodes.wall_wood001.geometry}
                material={textureMaterial}
                position={[-0.67, 14.65, 0.24]}
            />
            <mesh
                geometry={nodes.Kinfolk_Magazine.geometry}
                material={textureMaterial}
                position={[-15, 5.93, 7.65]}
            />
            <mesh geometry={nodes.sofa.geometry} material={textureMaterial} position={[-25, 4.59, 15.9]} />
            <mesh
                geometry={nodes.Plane.geometry}
                material={textureMaterial}
                position={[-24.98, 5.83, 12.07]}
                rotation={[0, -0.3, 0]}
            />
        </group>
    )
}

useGLTF.preload('./models/bakehall.glb')
useTexture.preload("/textures/leather/hallbake.jpg");
export default Hall_model