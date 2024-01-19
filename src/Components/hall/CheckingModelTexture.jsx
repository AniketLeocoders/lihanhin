import React, { useRef } from 'react'
import { MeshPortalMaterial, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Bathroom_marble } from '../../Constants';


const CheckingModelTexture = (props) => {
    const loader = new THREE.TextureLoader();
    const texture = useTexture('/textures/leather/hallcorrectionBake.jpg')
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

    const { nodes, materials } = useGLTF("./models/HallCorrectionWithtexture.glb");
    return (
        <group {...props} dispose={null}>
            {/* reflective floor surface */}
            <mesh position={[0, -1.27, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[3.85, 2.8, 10]} />
                <MeshReflectorMaterial
                    map={floorTexture} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.3}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube009.geometry}
            // material={nodes.Cube009.material}
            ><meshStandardMaterial color={'#915788'} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube010.geometry}
            // material={nodes.Cube010.material}
            ><meshStandardMaterial color={'#915788'} /></mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube011.geometry}
                material={nodes.Cube011.material}
            >
            </mesh>


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
            {/* <mesh castShadow
                receiveShadow
                geometry={nodes.wall020.geometry}
                material={nodes.wall020.material}
            /> */}

            {/* <mesh castShadow receiveShadow
                geometry={nodes.wall021.geometry}
                material={nodes.wall021.material}
            /> */}


            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall020.geometry}
                position={[-0.702, 0.03, -1.3]}
            >
                <boxGeometry
                    args={[1.4, 2.5, 0.03]}
                />
                <MeshReflectorMaterial
                    map={tvconsoleLeft} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.2}
                    // mirror={1}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall021.geometry}
                position={[0.702, 0.03, -1.3]}
            >
                <boxGeometry args={[1.4, 2.5, 0.03]} />
                <MeshReflectorMaterial
                    map={tvconsoleRight} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.2}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>


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