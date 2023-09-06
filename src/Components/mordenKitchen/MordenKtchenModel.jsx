import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { useSelector } from 'react-redux';
import * as THREE from 'three';


const MordenKtchenModel = (props) => {
    const KitchenParameter = useSelector(state => state.KitchenParameter);
    const group = useRef()
    const { nodes, materials } = useGLTF('./models/mordernKitchen.glb')

    const tableBodyTexture = useTexture(KitchenParameter.table?.BodyTexture);
    tableBodyTexture.wrapS = tableBodyTexture.wrapT = THREE.RepeatWrapping;
    tableBodyTexture.repeat.set(1, 1);

    const cabinateTopTexture = useTexture(KitchenParameter.table?.TopTexture);
    cabinateTopTexture.wrapS = cabinateTopTexture.wrapT = THREE.RepeatWrapping;
    cabinateTopTexture.repeat.set(1, 1);


    const floorTexture = useTexture(KitchenParameter.floorParameter?.CureentfloorTexture);
    // Set texture wrapping and repeating properties
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(8, 8);

    const WallTexture = useTexture(KitchenParameter.wallParameter?.wallTexture);
    // Set texture wrapping and repeating properties
    WallTexture.wrapS = WallTexture.wrapT = THREE.RepeatWrapping;
    WallTexture.repeat.set(1, 1);


    return (
        <group ref={group} {...props} dispose={null}
        // onPointerOver={(e) => (e.stopPropagation(), console.log(e.object.material.name))}
        >
            <mesh
                geometry={nodes.furnitureBottom.geometry}
                material={nodes.furnitureBottom.material}
                position={[-4.17, 0, -4.65]}
                scale={8}
            />
            <mesh
                geometry={nodes.Plane007.geometry}
                material={materials['Material.015']}
                position={[-2.88, 2.8, -4.39]}
                scale={8}
            />
            <mesh
                geometry={nodes.ceiling.geometry}
                material={nodes.ceiling.material}
                position={[-0.04, 5.99, -2.77]}
                scale={8}
            />
            {/* <mesh
                geometry={nodes.tableSynck.geometry}
                material={nodes.tableSynck.material}
                position={[-2.24, 0.37, 0.16]}
                scale={[1.53, 1, 2.52]}
            /> */}
            {/* <mesh
                geometry={nodes.tableNal.geometry}
                material={nodes.tableNal.material}
                position={[-2.72, 1.83, -1.79]}
                scale={0.03}
            /> */}
            <group scale={[1.53, 1, 2.52]}
                position={[-2.24, 0.37, 0.16]}
            >
                <mesh
                    geometry={nodes.middleTable_1.geometry}
                    material={nodes.middleTable_1.material}
                    position={[0.2, 0.5, 0.03]}
                >
                    <boxGeometry args={[2, 1.7, 2]} />
                    <meshStandardMaterial map={tableBodyTexture} />
                </mesh>
                <mesh geometry={nodes.middleTable_2.geometry} material={nodes.middleTable_2.material}
                    position={[0.2, 1.37, 0.03]}
                >
                    <boxGeometry args={[3, 0.1, 2.5]} />
                    <meshStandardMaterial map={cabinateTopTexture} />
                </mesh>
            </group>
            <mesh
                geometry={nodes.cornerCapat.geometry}
                material={nodes.cornerCapat.material}
                position={[-6.89, 0, -6.34]}
                scale={8}
            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={nodes.Cube.material}
                position={[-6.55, 2.88, 0.2]}
                rotation={[0, 0, Math.PI / 9]}
                scale={[0, 0.11, 0.08]}
            />
            <group position={[-4.17, 0, -4.65]} scale={8}>
                <mesh geometry={nodes.furnitureTop_1.geometry} material={nodes.furnitureTop_1.material}
                    material-color={KitchenParameter.cabibate.bodyColor}
                >
                </mesh>
                <mesh geometry={nodes.furnitureTop_2.geometry} material={nodes.furnitureTop_2.material}
                    material-color={KitchenParameter.cabibate.topColor}
                >
                </mesh>
            </group>
            <mesh geometry={nodes.walls.geometry} material={materials.walls} position={[-2.88, 2.8, -4.39]} scale={8}
            // material-color='orangered'
            >
                <meshStandardMaterial map={WallTexture} />
            </mesh>
            <mesh
                geometry={nodes.furnitureHandle.geometry}
                material={nodes.furnitureHandle.material}
                position={[-6.5, 4.33, 5.5]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.01, 0.04, 0.48]}
                material-color={KitchenParameter.cabibate.handleColor}
            />
            <group position={[-4.17, 0, -4.65]} scale={8}>
                <mesh geometry={nodes.Plane001.geometry} material={nodes.Plane001.material}
                />
                <mesh geometry={nodes.Plane001_1.geometry} material={materials['Material.001']}
                    material-color={KitchenParameter.cabibate.doorColor}
                />

            </group>
            <mesh
                geometry={nodes.Cube009.geometry}
                material={materials['Material.016']}
                position={[-6.68, 3.51, 4.46]}
                scale={[0.04, 0.02, 3.1]}
            />
            <mesh
                geometry={nodes.Cube008.geometry}
                material={nodes.Cube008.material}
                position={[-7.97, 5.98, 6.97]}
                scale={[0.04, 0.2, 1]}
            />
            <mesh
                geometry={nodes.chimany.geometry}
                material={nodes.chimany.material}
                position={[0.21, 4.58, -7.11]}
                scale={[1.11, 0.1, 0.89]}

            />
            <mesh
                geometry={nodes.tableChimany.geometry}
                material={nodes.tableChimany.material}
                position={[-1.76, 5.1, -0.03]}
                scale={[2.07, 0.03, 3.19]}
            />
            <mesh
                geometry={nodes.machineTop.geometry}
                material={nodes.machineTop.material}
                position={[0.19, 1.62, -7.15]}
                scale={[0.14, 0.01, 0.14]}
            />
            <mesh
                geometry={nodes.Cube005.geometry}
                material={nodes.Cube005.material}
                position={[0.23, 1.34, -6.22]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0, 0.1, 0.76]}
            />
            <mesh
                geometry={nodes.machineControl.geometry}
                material={nodes.machineControl.material}
                position={[-0.61, 1.51, -6.25]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[0.07, 0.01, 0.07]}
            />
            <group position={[-1.82, 1.02, 2.31]} scale={[0.61, 0.3, 0.39]}>
                <mesh geometry={nodes.Cube005_1.geometry} material={nodes.Cube005_1.material} />
                <mesh geometry={nodes.Cube005_2.geometry} material={nodes.Cube005_2.material} />
                <mesh geometry={nodes.Cube005_3.geometry} material={nodes.Cube005_3.material} />
            </group>
            <group position={[0.22, 0.86, -7.13]} scale={[6.6, 8, 8]}>
                <mesh geometry={nodes.Plane009.geometry} material={nodes.Plane009.material} />
                <mesh geometry={nodes.Plane009_1.geometry} material={nodes.Plane009_1.material} />
                <mesh geometry={nodes.Plane009_2.geometry} material={nodes.Plane009_2.material} />
            </group>
            <group position={[-6.91, 2.72, 0]} scale={8}>
                <mesh geometry={nodes.middleCapat_1.geometry} material={nodes.middleCapat_1.material}
                    material-color={KitchenParameter.fridgeParameter.color}
                />
                <mesh geometry={nodes.middleCapat_2.geometry} material={nodes.middleCapat_2.material} />
                <mesh geometry={nodes.middleCapat_3.geometry} material={materials['middleCapat.002']} />
            </group>
            <mesh geometry={nodes.floor.geometry} material={materials.floor} scale={8}
            // material-color='red'
            >
                <boxGeometry args={[2, 0.01, 2]} />
                <meshStandardMaterial map={floorTexture} />
            </mesh>
            <group position={[-3.55, 3.71, -8.12]} scale={8}>
                <mesh geometry={nodes.floor1_1.geometry} material={materials['floor1.001']}
                    material-color='yellow'
                />
                <mesh geometry={nodes.floor1_2.geometry} material={materials.floor1} />
            </group>
        </group>
    )
}

useGLTF.preload('./models/mordernKitchen.glb')
export default MordenKtchenModel