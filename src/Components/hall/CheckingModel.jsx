import React, { useRef } from 'react'
import { MeshPortalMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';


const CheckingModel = (props) => {
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
    const { nodes, materials } = useGLTF("./models/HallCorrectionWithouttexturenewnew.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
                // material={textureMaterial}
                material={nodes.Cube009.material}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
                // material={textureMaterial}
                material={nodes.Cube010.material}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                // material={textureMaterial}
                material={nodes.Cube011.material}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube008.geometry}
                // material={textureMaterial}
                material={nodes.Cube008.material}

            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kinfolk_Magazine.geometry}
                material={textureMaterial}
                position={[0.096, -1.03, -0.475]}
                scale={0.697}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall019.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall011.geometry}
                // material={textureMaterial}
                material={nodes.wall011.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall020.geometry}
                material={nodes.wall020.material}
                // material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall021.geometry}
                material={nodes.wall021.material}
                // material={textureMaterial}
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
                material={textureMaterial}
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
        </group>
    );
}

useGLTF.preload("./models/HallCorrectionWithouttexturenewnew.glb");
useTexture.preload("/textures/leather/hallcorrectionBake.jpg");
export default CheckingModel