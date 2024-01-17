import React, { useRef } from 'react'
import { MeshPortalMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';

const Hallfinal11_model = (props) => {
    const group = useRef()
    const texture = useTexture('/textures/leather/hallbake.jpg')
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });

    const floorTexture = useTexture('https://m.media-amazon.com/images/I/41gPXlP844L._AC_UF894,1000_QL80_.jpg');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 1);

    const { nodes, materials } = useGLTF("./models/Hallfinal11.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall.geometry}
                material={nodes.wall.material}
                position={[-15.737, 14.679, -0.06]}
            // material-color='red'
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall001.geometry}
                material={nodes.wall001.material}
                position={[1.854, 14.672, 12.926]}
            >
                <meshStandardMaterial color={'red'} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall002.geometry}
                material={nodes.wall002.material}
                position={[-33.439, 14.672, 12.992]}
                rotation={[0, 0, 0.007]}
            >
                <meshStandardMaterial color={'red'} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.flore.geometry}
                material={nodes.flore.material}
                position={[-15.754, 3.551, 12.701]}
            >
                <boxGeometry args={[34.65, 1, 26]} />
                <meshStandardMaterial map={floorTexture}
                    doubleSided={true}
                />

            </mesh>

            <mesh
                castShadow
                receiveShadow
                geometry={nodes.celling.geometry}
                material={nodes.celling.material}
                position={[-15.713, 25.912, 11.978]}
                material-color='white'
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_wood.geometry}
                material={textureMaterial}
                position={[-30.764, 14.646, 0.238]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wallplate1.geometry}
                material={textureMaterial}
                position={[-21.999, 14.759, 0.326]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wallplate2.geometry}
                material={textureMaterial}
                position={[-9.463, 14.759, 0.326]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tv.geometry}
                material={textureMaterial}
                position={[-15.689, 14.321, 0.669]}
                rotation={[Math.PI / 2, 0, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cabinate.geometry}
                material={textureMaterial}
                position={[-15.742, 6.008, 1.562]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table.geometry}
                material={textureMaterial}
                position={[-15.82, 4.817, 7.891]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_wood001.geometry}
                material={textureMaterial}
                position={[-0.671, 14.646, 0.238]}
            />
            <group position={[-34.186, 0.503, 4.418]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane002.geometry}
                    material={textureMaterial}
                    position={[1.507, 2.994, -6.427]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Kinfolk_Magazine.geometry}
                material={textureMaterial}
                position={[-15.004, 5.927, 7.649]}
            />
            <group position={[-12.362, 0, 17.3]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Gardenplant001.geometry}
                    material={textureMaterial}
                    position={[-4.628, 6.328, -10.871]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.sofa.geometry}
                material={textureMaterial}
                position={[-25.004, 4.594, 15.902]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={textureMaterial}
                position={[-24.978, 5.826, 12.07]}
                rotation={[0, -0.299, 0]}
            />
        </group>
    );
}

useGLTF.preload("./models/Hallfinal11.glb")
useTexture.preload("/textures/leather/hallbake.jpg");

export default Hallfinal11_model