import React, { Suspense, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { useSpring, animated } from 'react-spring';
import { Bathroom_wall_tiles } from '../../Constants';
import { OrbitControls, useTexture } from '@react-three/drei';
import { TextureLoader } from 'three';

const AnimationTexture = () => {

    const AnimatedTextureBox = ({ textures }) => {
        const meshRef = useRef();
        const [count, setCount] = useState(0);
        const maxCount = Bathroom_wall_tiles.length;

        useEffect(() => {
            const intervalId = setInterval(() => {
                // Calculate the next texture index
                const nextCount = (count + 1) % maxCount;
                setCount(nextCount);
                transitionTexture(nextCount)
            }, 1500); // Interval duration
            
            // transitionTexture(0)

            return () => { clearInterval(intervalId); };
        }, [count]);

     

        // Function to smoothly transition the texture
        const transitionTexture = (nextCount) => {
            const texture = useLoader(TextureLoader, Bathroom_wall_tiles[nextCount])
            // const texture = twxturecon(Bathroom_wall_tiles[nextCount]);
            if (meshRef.current) {
                // console.log( "texture", JSON.stringify(texture))
                // console.log(JSON.stringify(meshRef.current.material))
                // meshRef.current.material = texture;
            }
        };

        // transitionTexture(0)

        // Use useFrame to continuously update the texture
        // useFrame(() => {
        //     setTimeout(() => {
        //         // Calculate the next texture index
        //         const nextCount = (count + 1) % maxCount;
        //         setCount(nextCount);

        //         // Smoothly transition to the next texture
        //         // transitionTexture(nextCount);
        //     }, 1000); // Change texture every 2 seconds (adjust as needed)
        // });

        // Initialize the initial texture
        // transitionTexture(count);





        return (
            <mesh ref={meshRef} scale={3}
            material-color='red'
            >
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial
                    map={useLoader(TextureLoader, Bathroom_wall_tiles[count])}
                // map={useTexture(Bathroom_wall_tiles[count])}
                />
            </mesh>
        );
    };


    return (
        <div className=" h-[100vh] bg-yellow-200">
            <Canvas className=' min-h-screen'>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                    <AnimatedTextureBox textures={Bathroom_wall_tiles} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default AnimationTexture