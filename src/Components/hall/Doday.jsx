import React, { useRef } from 'react'
import { MeshPortalMaterial, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { Bathroom_marble } from '../../Constants';

const Doday = (props) => {
  const { nodes, materials } = useGLTF("./models/TODAYMODEL.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.left_wall.geometry}
        material={nodes.left_wall.material}
        position={[-0.239, 0, 0.378]}
        scale={[1, 1, 1.201]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.right_wall.geometry}
        material={nodes.right_wall.material}
        position={[0.224, 0, 0.366]}
        scale={[1, 1, 1.209]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.celling.geometry}
        material={nodes.celling.material}
        position={[0, 0, 0.319]}
        scale={[1.112, 1, 1.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.floor.geometry}
        material={nodes.floor.material}
        position={[0, -0.005, 0.364]}
        scale={[1.121, 1, 1.213]}
      />
      <group position={[0, 0.028, -1.257]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube011_1.geometry}
          material={materials["Material.004"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Wood procedural"]}
        position={[1.766, 0.003, -1.293]}
        scale={[1.414, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Wood procedural"]}
        position={[-1.784, 0.003, -1.293]}
        scale={[1.444, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Glass.001"]}
        position={[-0.251, -0.904, 0.378]}
        scale={0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials.moss_wood}
        position={[-0.262, -0.726, 0.362]}
        rotation={[-0.062, 0.066, -1.581]}
        scale={0.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={materials.moss_wood}
        position={[-0.248, -0.839, 0.41]}
        rotation={[-3.08, -0.066, 1.561]}
        scale={[0.072, 0.05, 0.109]}
      />
      <group position={[-1.435, -1.095, 1.014]} scale={[1.061, 0.906, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Procedural houndstooth"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Albany Paint Flour Sack"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Albany Paint Flour Sack.002"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.right_wall001.geometry}
        material={nodes.right_wall001.material}
        position={[0.015, 0, 3.924]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[1, 1.011, 1.542]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_plane001.geometry}
        material={nodes.wall_plane001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wall_plane.geometry}
        material={nodes.wall_plane.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.table.geometry}
        material={nodes.table.material}
        position={[-0.066, -1.131, 0.355]}
        scale={[0.859, 1.265, 1.264]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.parda.geometry}
        material={materials.curtain}
        position={[-0.229, 0, 1.097]}
        scale={[1, 1, 1.953]}
      />
      <group
        position={[0.064, -0.965, 0.37]}
        rotation={[0, Math.PI / 2, 0]}
        scale={1.026}
      >
        <group rotation={[0, -Math.PI / 2, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials["Cover book-01"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials["Cover book-02"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.paper}
          />
        </group>
      </group>
      <group position={[-0.055, 0.038, 0.253]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves001.geometry}
          material={materials.leaves}
          position={[-0.133, -0.836, 0.058]}
          rotation={[1.631, 0.598, -2.738]}
          scale={0.383}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves002.geometry}
          material={materials.leaves}
          position={[-0.112, -0.816, 0.191]}
          rotation={[1.282, 0.06, -0.368]}
          scale={0.301}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves003.geometry}
          material={materials.leaves}
          position={[-0.108, -0.819, 0.082]}
          rotation={[1.441, 0.588, -2.4]}
          scale={0.301}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves004.geometry}
          material={materials.leaves}
          position={[-0.096, -0.791, 0.184]}
          rotation={[1.28, 0.256, -0.266]}
          scale={0.258}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves005.geometry}
          material={materials.leaves}
          position={[-0.088, -0.799, 0.091]}
          rotation={[1.418, 0.583, -2.358]}
          scale={0.258}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves006.geometry}
          material={materials.leaves}
          position={[-0.066, -0.785, 0.096]}
          rotation={[1.44, 0.588, -2.399]}
          scale={0.217}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves007.geometry}
          material={materials.leaves}
          position={[-0.144, -0.833, 0.206]}
          rotation={[1.277, -0.03, -0.072]}
          scale={0.338}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves008.geometry}
          material={materials.leaves}
          position={[-0.04, -0.777, 0.103]}
          rotation={[1.321, 0.552, -2.179]}
          scale={0.217}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves009.geometry}
          material={materials.leaves}
          position={[-0.074, -0.779, 0.174]}
          rotation={[1.28, 0.256, -0.266]}
          scale={0.205}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves010.geometry}
          material={materials.leaves}
          position={[-0.053, -0.772, 0.166]}
          rotation={[1.317, 0.294, -0.405]}
          scale={0.174}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves011.geometry}
          material={materials.leaves}
          position={[-0.032, -0.766, 0.161]}
          rotation={[1.317, 0.294, -0.405]}
          scale={0.143}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves012.geometry}
          material={materials.leaves}
          position={[-0.025, -0.769, 0.113]}
          rotation={[1.321, 0.552, -2.179]}
          scale={0.152}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves013.geometry}
          material={materials.leaves}
          position={[-0.017, -0.761, 0.156]}
          rotation={[1.317, 0.294, -0.405]}
          scale={0.109}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves014.geometry}
          material={materials.leaves}
          position={[-0.012, -0.764, 0.119]}
          rotation={[1.321, 0.552, -2.179]}
          scale={0.117}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves015.geometry}
          material={materials.leaves}
          position={[-0.004, -0.757, 0.153]}
          rotation={[1.317, 0.294, -0.405]}
          scale={0.092}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves016.geometry}
          material={materials.leaves}
          position={[0, -0.76, 0.124]}
          rotation={[1.321, 0.552, -2.179]}
          scale={0.092}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves017.geometry}
          material={materials.leaves}
          position={[0.005, -0.755, 0.15]}
          rotation={[1.317, 0.294, -0.405]}
          scale={0.066}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves018.geometry}
          material={materials.leaves}
          position={[0.009, -0.757, 0.127]}
          rotation={[1.321, 0.552, -2.179]}
          scale={0.073}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves019.geometry}
          material={materials.leaves}
          position={[0.016, -0.752, 0.149]}
          rotation={[1.351, 0.319, -0.516]}
          scale={0.066}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves020.geometry}
          material={materials.leaves}
          position={[0.019, -0.754, 0.13]}
          rotation={[1.257, 0.52, -2.053]}
          scale={0.073}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves021.geometry}
          material={materials.leaves}
          position={[0.024, -0.753, 0.141]}
          rotation={[1.199, 0.26, -1.244]}
          scale={0.066}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves022.geometry}
          material={materials.leaves}
          position={[-0.225, -0.878, 0.166]}
          rotation={[1.32, -0.117, -0.1]}
          scale={0.19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves023.geometry}
          material={materials.leaves}
          position={[-0.222, -0.879, 0.088]}
          rotation={[1.736, 0.222, -2.747]}
          scale={0.19}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves024.geometry}
          material={materials.leaves}
          position={[-0.241, -0.873, 0.094]}
          rotation={[1.792, 0.167, -3.032]}
          scale={0.145}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves025.geometry}
          material={materials.leaves}
          position={[-0.245, -0.873, 0.159]}
          rotation={[1.369, -0.189, 0.215]}
          scale={0.155}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves026.geometry}
          material={materials.leaves}
          position={[-0.255, -0.87, 0.1]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.119}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves027.geometry}
          material={materials.leaves}
          position={[-0.259, -0.869, 0.149]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.127}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves028.geometry}
          material={materials.leaves}
          position={[-0.267, -0.864, 0.101]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.101}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves029.geometry}
          material={materials.leaves}
          position={[-0.271, -0.864, 0.142]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.107}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves030.geometry}
          material={materials.leaves}
          position={[-0.278, -0.861, 0.103]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.083}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves031.geometry}
          material={materials.leaves}
          position={[-0.28, -0.86, 0.138]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.089}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves032.geometry}
          material={materials.leaves}
          position={[-0.286, -0.858, 0.105]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.069}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves033.geometry}
          material={materials.leaves}
          position={[-0.289, -0.858, 0.133]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.073}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves034.geometry}
          material={materials.leaves}
          position={[-0.295, -0.857, 0.105]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.058}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves035.geometry}
          material={materials.leaves}
          position={[-0.297, -0.857, 0.129]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.061}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves036.geometry}
          material={materials.leaves}
          position={[-0.302, -0.856, 0.108]}
          rotation={[1.828, 0.103, 2.987]}
          scale={0.044}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves037.geometry}
          material={materials.leaves}
          position={[-0.304, -0.856, 0.126]}
          rotation={[1.439, -0.243, 0.541]}
          scale={0.046}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.leaves038.geometry}
          material={materials.leaves}
          position={[-0.311, -0.856, 0.116]}
          rotation={[1.865, -0.199, 1.821]}
          scale={0.044}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057.geometry}
        material={materials["Material.002"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube057_1.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("./models/TODAYMODEL.glb");
export default Doday