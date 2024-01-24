// import * as THREE from "three";
// import React, { useRef, Suspense, useState, useEffect } from "react";
// import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
// import { shaderMaterial, Html } from "@react-three/drei";
// // import glsl from "babel-plugin-glsl/macro";
// import {
//     MdOutlineKeyboardArrowLeft,
//     MdOutlineKeyboardArrowRight
// } from "react-icons/md";

// const WaveShaderMaterial = shaderMaterial(
//     // Uniform
//     {
//         uTime: 0.0,
//         uColor: new THREE.Color(0.0, 0.0, 0.0),
//         uTextureOne: new THREE.Texture(),
//         uTextureTwo: new THREE.Texture(),
//         uProgress: 0
//     },
//     // Vertex Shader
//     glsl`
//     precision mediump float;
 
//     varying vec2 vUv;
//     varying float vWave;

//     uniform float uTime;

//     #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

//     void main() {
//       vUv = uv;

//       vec3 pos = position;
//       float noiseFreq = 1.5;
//       float noiseAmp = 0.025;
//       vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
//       pos.z += snoise3(noisePos) * noiseAmp;
//       vWave = pos.z;

//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
//     }
//   `,
//     // Fragment Shader
//     glsl`
//   precision mediump float;

//   uniform vec3 uColor;
//   uniform float uTime;
//   uniform sampler2D uTextureOne;
//   uniform sampler2D uTextureTwo;
//   uniform float uProgress;

//   varying vec2 vUv;
//   varying float vWave;

//   void main() {
//     float wave = vWave * 0.03;
//     vec4 imageOne = texture2D(uTextureOne, vUv + wave);
//     vec4 imageTwo = texture2D(uTextureTwo, vUv + wave);
//     gl_FragColor = mix(imageTwo, imageOne, uProgress); 
//   }
// `
// );

// extend({ WaveShaderMaterial });

// const imageData = [
//     {
//         id: 1,
//         title: "Rowing",
//         image: "/rowing.jpg"
//     },
//     {
//         id: 2,
//         title: "Italy",
//         image: "/italy.jpg"
//     },
//     {
//         id: 3,
//         title: "Beach",
//         image: "/beach.jpg"
//     }
// ];

// const Wave = ({ images = [], imageData, currentIndex = 0, lastIndex = 1 }) => {
//     const ref = useRef();

//     useFrame(({ clock }) => {
//         ref.current.uTime = clock.getElapsedTime();
//         ref.current.uProgress += (1 - ref.current.uProgress) * 0.1;
//     });

//     useEffect(() => {
//         ref.current.uProgress = 0;
//     }, [currentIndex]);

//     return (
//         <group>
//             <Html>
//                 <button
//                     style={{ background: "lightgreen" }}
//                     onClick={() => (window.location = imageData[currentIndex].image)}
//                 >
//                     View Case Study
//                 </button>
//             </Html>
//             <mesh>
//                 <planeBufferGeometry args={[1, 0.64, 16, 16]} />
//                 <waveShaderMaterial
//                     uColor={"navy"}
//                     ref={ref}
//                     uTextureOne={images[currentIndex]}
//                     uTextureTwo={images[lastIndex]}
//                 />
//             </mesh>
//         </group>
//     );
// };

// function WaveSlider() {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [lastIndex, setLastIndex] = useState(0);
//     const images = useLoader(
//         THREE.TextureLoader,
//         imageData.map((v) => v.image)
//     );

//     function next(dir) {
//         setLastIndex(currentIndex);
//         setCurrentIndex((imageData.length + dir) % imageData.length);
//     }

//     useEffect(() => {
//         function keydown(e) {
//             switch (e.key) {
//                 case "ArrowLeft":
//                     next(currentIndex - 1);
//                     break;
//                 case "ArrowRight":
//                     next(currentIndex + 1);
//                     break;
//                 default:
//                     break;
//             }
//         }

//         window.addEventListener("keydown", keydown);

//         return () => {
//             window.removeEventListener("keydowm", keydown);
//         };
//     }, [currentIndex, lastIndex]);

//     return (
//         <>
//             <Html>
//                 <div style={{ width: "100vw" }}>
//                     <h1 style={{ color: "white" }}>{imageData[currentIndex].title} </h1>
//                     <button onClick={() => next(currentIndex - 1)}>
//                         <MdOutlineKeyboardArrowLeft />
//                     </button>
//                     <button onClick={() => next(currentIndex + 1)}>
//                         <MdOutlineKeyboardArrowRight />
//                     </button>
//                     <br />
//                     {/* 'mini-map' example */}
//                     {imageData.map((v, i) => (
//                         <button
//                             className={i === currentIndex && "selected"}
//                             onClick={() => next(i)}
//                         >
//                             {v.title}
//                         </button>
//                     ))}
//                 </div>
//             </Html>
//             <Wave {...{ images, imageData, currentIndex, lastIndex }} />
//         </>
//     );
// }

// const Scene = () => {
//     return (
//         <>
//             <Canvas dpr={[2, 2]} camera={{ fov: 50, position: [0, 0, 2] }}>
//                 <Suspense fallback={null}>
//                     <WaveSlider />
//                 </Suspense>
//             </Canvas>
//         </>
//     );
// };

// const DemoBox = () => {
//     return (
//         <div style={{ height: "100vh", width: "100vw" }}>
//             <div id="SliderControls"></div>
//             <Scene />
//         </div>
//     );
// };

// export default DemoBox;



// // // demobox.jsx
// // import React, { useState } from 'react';
// // // import { Canvas } from 'react-three-fiber';
// // // import { Box, MeshWobbleMaterial } from 'drei';
// // import { Bathroom_marble } from '../../../Constants';
// // import { Canvas } from '@react-three/fiber';
// // import { Box, MeshWobbleMaterial } from '@react-three/drei';
// // import * as THREE from 'three';
// // import { useSpring } from '@react-three/cannon';

// // const textures = Bathroom_marble


// // const DemoBox = () => {
// //     const [selectedTexture, setSelectedTexture] = useState(textures[0]);

// //     const handleTextureChange = (texture) => {
// //         setSelectedTexture(texture);
// //     };
// //     // Use react-spring to smoothly transition the material's map property
// //     // const textureSpring = useSpring({
// //     //     map: new THREE.TextureLoader().load(selectedTexture),
// //     //     config: { duration: 1000 }, // Adjust duration as needed
// //     // });

// //     return (
// //         <div className="flex h-screen">
// //             <Canvas className="w-3/4">
// //                 <ambientLight />
// //                 <pointLight position={[10, 10, 1]} />
// //                 <Box args={[3, 3, 3]}>
// //                     {/* <MeshWobbleMaterial */}
// //                     <meshBasicMaterial
// //                         attach="material"
// //                         // color="lightblue"
// //                         map={new THREE.TextureLoader().load(selectedTexture)}
// //                         factor={1} // Wobble factor
// //                     />
// //                 </Box>
// //                 {/* <Box args={[5, 5, 1]} rotation={[0, 0, 0]}>
// //                     <a.meshBasicMaterial
// //                         attach="material"
// //                         color="lightblue"
// //                         transparent
// //                         {...textureSpring}
// //                     />
// //                 </Box> */}


// //             </Canvas>
// //             <div className="w-1/4 p-4">
// //                 <div className="flex flex-col gap-4">
// //                     {textures.map((texture, index) => (
// //                         <img
// //                             key={index}
// //                             src={texture}
// //                             alt={`Texture ${index + 1}`}
// //                             className="w-12 h-12 cursor-pointer"
// //                             onClick={() => handleTextureChange(texture)}
// //                         />
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default DemoBox;
