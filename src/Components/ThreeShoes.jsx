// import React from '../assets/shoes/shoe.gltf'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { proxy, useSnapshot } from "valtio"

const state = proxy({
    current: null,
    items: { laces: "#fff", mesh: "#fff", caps: "#fff", inner: "#fff", sole: "#fff", stripes: "#fff", band: "#fff", patch: "#fff" },
})

function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/shoe.gltf')
    const snap = useSnapshot(state)
    const [hovered, set] = useState(null)



    useEffect(() => {
        const cursor = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="${snap.items[hovered]}"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#FFF" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="10" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="47" height="47" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        const auto = `<svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/></svg>`
        if (hovered) {
            document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
            // return () => (document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(auto)}'), auto`)
            return () => { (document.body.style.cursor = `auto`) }
        }
        else {
            // Set the default cursor when not hovered
            document.body.style.cursor = 'auto';
        }
    }, [hovered])
    return (
        <group ref={group} {...props} dispose={null} scale={2}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onPointerMissed={() => (state.current = null)}
            onClick={(e) => (e.stopPropagation(), (state.current = e.object.material.name))}

        >
            <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.laces} />
            <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
            <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.caps} />
            <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.inner} />
            <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.sole} />
            <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
            <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.band} />
            <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.patch} />
        </group>
    )
}


let InpuutArr = [{ title: "laces" }, { title: "mesh" }, { title: "caps" }, { title: "inner" }, { title: "sole" }, { title: "stripes" }, { title: "band" }, { title: "patch" },]

let ColorInput = ({ ininfo, setCustomColors, customColors }) => {
    let intitle = ininfo.title
    return (
        <div className=" flex gap-4 w-full ">
            <p className=' flex-1 text-lg font-semibold capitalize text-white'>{intitle}</p>
            <input type="color" id={intitle} className=' cursor-pointer w-1/5' hidden
                onChange={(e) => setCustomColors((prev) => ({ ...prev, [intitle]: e.target.value }))} />
            <label htmlFor={intitle} className=' w-8 aspect-square rounded cursor-pointer'
                style={{ background: customColors?.[intitle] ? customColors?.[intitle] : "red" }} />
            <div className=" flex-[2] px-4 py-1 bg-slate-500 text-white rounded">{customColors?.[intitle]}</div>
        </div>
    )
}

const ThreeShoes = () => {
    const [customColors, setCustomColors] = useState({ laces: "#f44f2b", mesh: "#4b2a0d", caps: "#9d1109", inner: "#d84a51", sole: "#68e5a8", stripes: "#e26f17", band: "#f8d75d", patch: "#951678", })

    return (
        <>
            <div className=" flex p-7 gap-5 h-[100vh] bg-slate-900">
                <div className=" flex-[11]  ">
                    <Canvas>
                        <Suspense fallback={null}>
                            <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                            {/* <ambientLight /> */}
                            <spotLight intensity={0.9}
                                angle={0.1}
                                penumbra={1}
                                position={[10, 15, 10]}
                                castShadow />
                            <Model
                                customColors={{
                                    laces: customColors?.laces, mesh: customColors?.mesh,
                                    caps: customColors?.caps, inner: customColors?.inner,
                                    sole: customColors?.sole, stripes: customColors?.stripes,
                                    band: customColors?.band, patch: customColors?.patch,
                                }}
                            />
                            <ContactShadows position={[5, 5, 0]} color="pink" />

                            <OrbitControls enablePan={true}
                                enableZoom={true}
                                enableRotate={true}
                            />
                        </Suspense>
                    </Canvas>
                </div>


                <div className=" flex-grow  flex flex-col gap-4  ">
                    {InpuutArr.map((ininfo) => <ColorInput
                        key={ininfo.title}
                        ininfo={ininfo}
                        setCustomColors={setCustomColors}
                        customColors={customColors}
                    />)}
                </div>
            </div>
        </>
    )
}

export default ThreeShoes