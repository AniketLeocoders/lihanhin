import * as THREE from "three";
import React, { useRef, Suspense, useState, useEffect } from "react";
import { shaderMaterial, Html } from "@react-three/drei";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight
} from "react-icons/md";
import { Bathroom_marble } from "../../Constants";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";

export const ImageFadeMaterial = shaderMaterial(
    {
        effectFactor: 1.2,
        dispFactor: 0,
        tex: undefined,
        tex2: undefined,
        disp: undefined
    },
    ` varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }`,
    ` varying vec2 vUv;
        uniform sampler2D tex;
        uniform sampler2D tex2;
        uniform sampler2D disp;
        uniform float _rot;
        uniform float dispFactor;
        uniform float effectFactor;
        void main() {
            vec2 uv = vUv;
            vec4 disp = texture2D(disp, uv);
            vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
            vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
            vec4 _texture = texture2D(tex, distortedPosition);
            vec4 _texture2 = texture2D(tex2, distortedPosition2);
            vec4 finalTexture = mix(_texture, _texture2, dispFactor);
            gl_FragColor = finalTexture;
            #include <tonemapping_fragment>
            #include <encodings_fragment>
        }`

)

extend({ ImageFadeMaterial })

const imageData = [
    {
        id: 1,
        title: "Rowing",
        image: Bathroom_marble[0]
    },
    {
        id: 2,
        title: "Italy",
        image: Bathroom_marble[3]
    },
    {
        id: 3,
        title: "Beach",
        image: Bathroom_marble[2]
    }
];

const Wave = ({ images = [], imageData, currentIndex = 0, lastIndex = 1 }) => {
    const ref = useRef();

    useFrame(({ clock }) => {
        ref.current.uTime = clock.getElapsedTime();
        ref.current.uProgress += (1 - ref.current.uProgress) * 0.1;
    });

    useEffect(() => {
        ref.current.uProgress = 0;
        setHover(pre => !pre)
    }, [currentIndex]);
    const [hovered, setHover] = useState(false)
    useFrame(() => {
        ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, hovered ? 1 : 0, 0.05)

    })
    return (
        <group>
            <mesh
            // onPointerOver={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}
            >
                <planeGeometry args={[1, 1, 1]} />
                <imageFadeMaterial
                    ref={ref}
                    tex={images[currentIndex]}
                    tex2={images[lastIndex]}
                    disp={images[1]}
                    toneMapped={false}
                />
            </mesh>
            <mesh>

            </mesh>
        </group>
    );
};

function WaveSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);
    const images = useLoader(
        THREE.TextureLoader,
        imageData.map((v) => v.image)
    );

    function next(dir) {
        setLastIndex(currentIndex);
        setCurrentIndex((imageData.length + dir) % imageData.length);
    }

    useEffect(() => {
        function keydown(e) {
            switch (e.key) {
                case "ArrowLeft":
                    next(currentIndex - 1);
                    break;
                case "ArrowRight":
                    next(currentIndex + 1);
                    break;
                default:
                    break;
            }
        }

        window.addEventListener("keydown", keydown);

        return () => {
            window.removeEventListener("keydowm", keydown);
        };
    }, [currentIndex, lastIndex]);

    return (
        <>
            <Html>
                <div style={{ width: "100vw" }}>
                    <h1 style={{ color: "white" }}>{imageData[currentIndex].title} </h1>
                    <button onClick={() => next(currentIndex - 1)}>
                        <MdOutlineKeyboardArrowLeft className="text-red-400" />
                    </button>
                    <button onClick={() => next(currentIndex + 1)}>
                        <MdOutlineKeyboardArrowRight />
                    </button>
                    <br />
                    {/* 'mini-map' example */}
                    {imageData.map((v, i) => (
                        <button key={v.title}
                            className={i === currentIndex && "bg-yellow-300 px-2"}
                            onClick={() => next(i)}
                        >
                            {v.title}
                        </button>
                    ))}
                </div>
            </Html>
            <Wave {...{ images, imageData, currentIndex, lastIndex }} />
        </>
    );
}

const Home = () => {
    return (
        <Suspense fallback={null}>
            <WaveSlider />
        </Suspense>

    );
};

export default Home;
