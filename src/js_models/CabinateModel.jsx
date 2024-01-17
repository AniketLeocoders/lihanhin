import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';
import { Wooden_texture } from '../Constants';


const CabinateModel = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/models/cabinate.glb')
    // console.log("nodes, ", nodes, " materials", materials)
    const WallTexture = useTexture(Wooden_texture[0]);
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.cabinate.geometry}
                // material={materials.wood}
                material={new THREE.MeshStandardMaterial({ map: WallTexture, })}
                scale={[1.62, 3.69, 3.19]}
                // material-color='brown'
            />
        </group>
    )
}
useGLTF.preload('/models/cabinate.glb')
export default CabinateModel