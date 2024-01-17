import { Canvas, useLoader } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'

const OnlineMOdel = () => {
    // https://cdn.jsdelivr.net/gh/{username}/{repository}@{version}/{path-to-file} version means branch
    const gltf = useLoader(GLTFLoader, 'https://cdn.jsdelivr.net/gh/AniketLeocoders/lihanhin@main/public/models/bathroom.glb')
    const { nodes, materials } = gltf
    return (
        <div className=' h-[100vh] flex relative bg-gray-500 '
        >
            <div className=" flex-1">
                <Suspense fallback={null}>
                    <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
                        <PerspectiveCamera makeDefault position={[3.5908, 1.7840, -1.734]} fov={76} />
                        <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" />
                        {nodes && (
                            <group>
                                {Object.values(nodes).map((node, index) => (
                                    // <primitive key={index} object={node} />
                                    <mesh key={index}
                                        geometry={node.geometry}
                                        material={node.material}
                                        position={node.position}
                                    />
                                ))}
                            </group>
                        )}
                        <OrbitControls target={[0, 1, 0]} />
                    </Canvas>
                </Suspense>
            </div>
        </div>
    )
}

export default OnlineMOdel