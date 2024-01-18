import React, { useRef } from 'react'
import { MeshPortalMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';


const CheckingModelTexture = (props) => {
    const group = useRef()
    // const texture = useTexture('/textures/leather/BBB.jpg')
    const texture = useTexture('/textures/leather/hallcorrectionBake.jpg')
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });
    const { nodes, materials } = useGLTF("./models/HallCorrectionWithtexture.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
                material={nodes.Cube009.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
                material={nodes.Cube010.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={nodes.Cube011.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008.geometry}
                material={nodes.Cube008.material}
            />
            <group position={[0.096, -1.03, -0.475]} scale={0.697}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057.geometry}
                    material={textureMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057_2.geometry}
                    material={textureMaterial}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall019.geometry}
                material={materials["Wood.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall020.geometry}
                material={nodes.wall020.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall021.geometry}
                material={nodes.wall021.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall013.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall007.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall023.geometry}
                material={nodes.wall023.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall024.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall015.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054.geometry}
                material={materials["Material.009"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube054_1.geometry}
                material={materials["Material.010"]}
            />
        </group>

    );
}

useGLTF.preload("./models/HallCorrectionWithtexture.glb");
useTexture.preload("/textures/leather/hallcorrectionBake.jpg");
export default CheckingModelTexture