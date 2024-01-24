import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';


export function MeshWithTransition({ texture1, texture2 }) {
    const meshRef = useRef();
    const [texture, setTexture] = useState(texture1);

    const floorTexture = useTexture(texture1);
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 1);

    // useFrame(() => {
    //     meshRef.current.material.map = texture;
    // });

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setTexture((prevTexture) =>
    //             prevTexture === texture1 ? texture2 : texture1
    //         );
    //     }, 1000);

    //     return () => clearInterval(interval);
    // }, [texture1, texture2]);

    return (
        <mesh 
        // ref={meshRef}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial map={floorTexture} />
        </mesh>
    );
}
