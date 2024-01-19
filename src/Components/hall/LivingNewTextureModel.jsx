import React, { useRef } from 'react'
import { MeshPortalMaterial, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Bathroom_marble } from '../../Constants';


const LivingNewTextureModel = (props) => {
    const loader = new THREE.TextureLoader();
    const texture = useTexture('/textures/leather/testbake.jpg')
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });

    const floorTexture = loader.load(Bathroom_marble[1], (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
    });
    const tvconsoleLeft = loader.load('http://admin.interiorsparkle.com/media/model/DSC02608_Monocromo.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    const tvconsoleRight = loader.load('http://admin.interiorsparkle.com/media/model/DSC02608_Monocromo.jpg', (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    tvconsoleRight.flipY = false; // tvconsoleRight.repeat.x = -1; tvconsoleRight.center.set(0.5, 0.5);
    tvconsoleRight.rotation = Math.PI;

    const { nodes, materials } = useGLTF("./models/testbake.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.left_wall.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.right_wall.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.celling.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kinfolk_Magazine.geometry}
                material={textureMaterial}
                position={[0.131, -1.03, -0.475]}
                scale={0.99}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sofa.geometry}
                material={textureMaterial}
                position={[-1.381, -1.155, 0.47]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tv001.geometry}
                material={textureMaterial}
                position={[0, 0.028, -1.257]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood_plane.geometry}
                material={textureMaterial}
                position={[1.651, 0.003, -1.289]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood_plane001.geometry}
                material={textureMaterial}
                position={[-1.653, 0.003, -1.289]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane001.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cabinate.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table.geometry}
                material={textureMaterial}
                scale={[1.427, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.parda.geometry}
                material={textureMaterial}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass.geometry}
                material={textureMaterial}
                position={[-0.145, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.plant.geometry}
                material={textureMaterial}
                position={[-0.145, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.kapda.geometry}
                material={textureMaterial}
                position={[-1.349, -1.055, -0.012]}
                rotation={[0.066, -0.213, 0.014]}
            />
        </group>
    );
}

useGLTF.preload("./models/testbake.glb");
useTexture.preload("/textures/leather/testbake.jpg");
export default LivingNewTextureModel