import React, { useState } from 'react';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import { Bathroom_marble } from '../../../Constants';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const SpringAnimation = () => {
    const [active, setActive] = useState(false);

    // Initial and alternative textures
    const floorTexture = useTexture(active ? Bathroom_marble[1] : Bathroom_marble[2]);
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 1);

    const { spring } = useSpring({
        spring: active ? 1 : 0, // Use 1 when active, 0 when not active
        config: { mass: 5, tension: 400, friction: 50, precision: 0.0001, duration: 1000 },
        // onRest: () => setActive(!active), // Toggle active state after animation is complete
    });

    // interpolate values from common spring
    const scale = spring.to([0, 1], [1, 5]);
    const rotation = spring.to([0, 1], [0, Math.PI]);
    const color = spring.to([0, 1], ['#6246ea', '#e45858']);
    const opacity = spring.to([0, 1], [0.5, 1]);

    


    return (
        <a.group
        // position-y={scale}
        >
            <a.mesh
                // rotation-y={rotation}
                // scale-x={scale}
                // scale-z={scale}
                onClick={() => setActive(!active)}
            >
                <boxGeometry attach="geometry" args={[1, 1, 1]} />
                <a.meshStandardMaterial
                    roughness={0.5}
                    attach="material"
                    map={floorTexture}
                    color={color}
                    transparent
                    opacity={opacity}
                // mixBlur={8}
                // mixStrength={0.5}
                />
            </a.mesh>
        </a.group>
    );
};

export default SpringAnimation;


