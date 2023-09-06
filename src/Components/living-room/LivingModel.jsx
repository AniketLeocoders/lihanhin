import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei';
// import { TextureLoader, RepeatWrapping, BufferAttribute, BufferGeometry } from 'three';
// import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
// import { Marbletexture } from '../Room/RoomModel';
import { useSelector } from 'react-redux';

const generateUUIDToNodeNameMap = (nodes) => {
    // By using this approach, you can generate the UUID-to-node-name mapping dynamically based on the available nodes 
    const uuidToNodeNameMap = {};
    Object.keys(nodes).forEach((nodeName, i) => {
        const node = nodes[nodeName];
        if (node.geometry && node.geometry.uuid) {
            // console.log(`Node Name: ${nodeName}, UUID: ${node.material.uuid}`);
            // uuidToNodeNameMap[node.geometry.uuid] = nodeName;
            uuidToNodeNameMap[i - 1] = nodeName;
        }
    });
    return uuidToNodeNameMap;
};

const generateMaterialMap = (materials) => {
    const materialMap = {};
    Object.values(materials).forEach((material) => {
        // console.log(`material Name: ${material.name}, UUID: ${material.uuid}`);
        materialMap[material.uuid] = material.name;
    });
    return materialMap;
};

export let GlassMaterial = () => {
    return (
        <meshStandardMaterial
            color="white" // Adjust this color to your preference
            roughness={0.1} // Adjust the roughness
            metalness={0.5} // Adjust the metalness
            reflectivity={0.9} // Adjust the reflectivity
            transparent // Enable transparency
            opacity={0.7} // Adjust the opacity to control transparency level
        />
    )
}


const LivingModel = (props) => {
    const LivingRoomParameter = useSelector(state => state.LivingRoomParameter);
    const group = useRef()
    const { nodes, materials } = useGLTF('./models/newhouse.glb')

    // Manually add userData to each mesh
    // Object.values(nodes).forEach((node, index) => {
    //     if (node.isMesh) {
    //         console.log("nodeName", `Node_${index}`, 'materialName', node.material.name)
    //         node.userData.nodeName = `Node_${index}`;
    //         node.userData.materialName = node.material.name;
    //     }
    // });

    const uuidToNodeNameMap = generateUUIDToNodeNameMap(nodes);
    const materialMapNmae = generateMaterialMap(materials);


    const leftWallSize = new THREE.Vector3();
    nodes.Cube002.geometry.computeBoundingBox();
    nodes.Cube002.geometry.boundingBox.getSize(leftWallSize);

    const FloorSize = new THREE.Vector3();
    nodes.Floor.geometry.computeBoundingBox();
    nodes.Floor.geometry.boundingBox.getSize(FloorSize);



    // Obtain floor dimensions
    const boundingBox = new THREE.Box3().setFromObject(nodes.Floor);
    const dimensions = boundingBox.getSize(new THREE.Vector3());
    const floorWidthMeters = dimensions.x;
    const floorLenghtMeters = dimensions.z;
    // const floorHeightMeters = dimensions.y;

    // Conversion factor
    const metersToInches = 39.37;

    // Convert dimensions to inches
    const floorWidthInches = floorWidthMeters * metersToInches;
    const floorLenghtInches = floorLenghtMeters * metersToInches;
    // const floorHeightInches = floorHeightMeters * metersToInches;

    // Tile size in inches
    const tileSizeInches = 48;

    // Gap size in inches
    // const gapSizeInches = 0.07874; // 2mm in inches (1mm = 0.03937 inches)

    // Calculate the number of tiles in each dimension
    // const tilesInWidth = Math.floor(floorWidthInches / (tileSizeInches + gapSizeInches));
    const tilesInWidth = Math.floor(floorWidthInches / (tileSizeInches));
    const tilesInLength = Math.floor(floorLenghtInches / (tileSizeInches));



    // const floorTexture = useTexture(props.activename);
    const floorTexture = useTexture(LivingRoomParameter.floorParameter?.CureentfloorTexture);

    // Set texture wrapping and repeating properties
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    // floorTexture.repeat.set(8, 8);
    floorTexture.repeat.set(tilesInWidth, tilesInLength); // Adjust the repeat values as tiles size

    // Calculate the actual size of tiles including gaps
    // const actualTileSizeInches = (floorWidthInches - (tilesInWidth - 1) * gapSizeInches) / tilesInWidth;

    // tile login end here

    return (
        <group ref={group} {...props} dispose={null}
            // onPointerOver={(e) => (e.stopPropagation(), props.setActivename(e.object.material.name))}
            onPointerOver={(e) => {
                e.stopPropagation();
                const intersection = e.intersections[0]; // Get the first intersection
                const meshIndex = e.object.parent.children.indexOf(e.object);
                // const nodeName = mesh.userData.nodeName;
                // const materialName = mesh.userData.materialName;
                // console.log("nodeName", nodeName, "materialName", materialName,)

                // props.setActivename(uuidToNodeNameMap[meshIndex])
                // if (intersection) {
                //     const materialName = intersection.object.material.name;
                //     const nodeName = intersection.object.name;
                //     const objectUUID = e.object.uuid; // Get the UUID of the clicked object
                // }
            }}
        >
            <mesh
                geometry={nodes.Floor.geometry}
                material={materials['Material.002']}
                position={[0.94, 0.92, 0.73]}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <boxGeometry args={[FloorSize.x, FloorSize.y, FloorSize.z]} />
                <meshStandardMaterial map={floorTexture} />
            </mesh>

            <mesh
                geometry={nodes.Cube002.geometry}
                material={materials['Material.021']}
                position={[-2.41, 1.69, 0.71]}
                rotation={[0, Math.PI / 2, 0]}
                material-color={LivingRoomParameter.secondWallParameter.color}
                castShadow
            >
                {/* <boxGeometry args={[leftWallSize.x, leftWallSize.y, leftWallSize.z]} />
                <meshStandardMaterial map={floorTexture} /> */}
            </mesh>

            <mesh
                geometry={nodes.Cube001.geometry}
                material={materials['Material.020']}
                position={[4.28, 1.69, 0.71]}
                rotation={[0, Math.PI / 2, 0]}
                material-color={LivingRoomParameter.secondWallParameter.color}
            />
            <mesh geometry={nodes.Cube.geometry} material={materials['Material.019']} position={[-0.12, 1.69, -1.67]}
                material-color={LivingRoomParameter.wallParameter.color}

            />
            <group position={[1.43, 1.71, -1.67]} rotation={[Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Plane.geometry} material={materials.phone_screen}
                    material-color='pink'
                />
                <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.001']}
                    material-color='red'
                />
            </group>
            <group position={[1.82, 1.18, -1.49]}>
                <mesh geometry={nodes.Cube002_1.geometry} material={materials.a} material-color='red' />
                <mesh geometry={nodes.Cube002_2.geometry} material={nodes.Cube002_2.material}
                //  material-color='green' 
                />
            </group>
            <mesh geometry={nodes.tabletop.geometry} material={nodes.tabletop.material} position={[1.35, 1.18, 0.69]}
            // material-color='white'
            >
                <meshStandardMaterial
                    color="white" // Adjust this color to your preference
                    roughness={0.1} // Adjust the roughness
                    metalness={0.5} // Adjust the metalness
                    reflectivity={0.9} // Adjust the reflectivity
                    transparent // Enable transparency
                    opacity={0.7} // Adjust the opacity to control transparency level
                />
            </mesh>
            <mesh geometry={nodes.tableRing.geometry} material={nodes.tableRing.material} position={[1.36, 1.06, 0.69]} />
            <mesh
                geometry={nodes.tableLeg5.geometry}
                material={nodes.tableLeg5.material}
                position={[1.56, 1.07, 0.37]}
                rotation={[-Math.PI, 0.58, -Math.PI]}
            />
            <mesh
                geometry={nodes.tableLeg1.geometry}
                material={nodes.tableLeg1.material}
                position={[1.15, 1.07, 1]}
                rotation={[-Math.PI, 0.58, -Math.PI]}
            />
            <mesh
                geometry={nodes.tableLeg7.geometry}
                material={nodes.tableLeg7.material}
                position={[1.05, 1.07, 0.47]}
                rotation={[0, 0.96, 0]}
            />
            <mesh
                geometry={nodes.tableLeg3.geometry}
                material={nodes.tableLeg3.material}
                position={[1.66, 1.07, 0.9]}
                rotation={[0, 0.96, 0]}
            />
            <mesh
                geometry={nodes.tableLeg4.geometry}
                material={nodes.tableLeg4.material}
                position={[1.72, 1.07, 0.61]}
                rotation={[-Math.PI, 1.38, -Math.PI]}
            />
            <mesh
                geometry={nodes.tableLeg.geometry}
                material={nodes.tableLeg.material}
                position={[0.98, 1.07, 0.75]}
                rotation={[-Math.PI, 1.38, -Math.PI]}
            />
            <mesh
                geometry={nodes.tableLeg6.geometry}
                material={nodes.tableLeg6.material}
                position={[1.28, 1.07, 0.32]}
                rotation={[0, 0.19, 0]}
            />
            <mesh
                geometry={nodes.tableLeg2.geometry}
                material={nodes.tableLeg2.material}
                position={[1.42, 1.07, 1.05]}
                rotation={[0, 0.19, 0]}
            />
            <mesh geometry={nodes.tableRing2.geometry} material={nodes.tableRing2.material} position={[1.36, 0.96, 0.69]} />
            <mesh
                geometry={nodes.pillow2.geometry}
                material={nodes.pillow2.material}
                position={[1.78, 1.39, 1.85]}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                geometry={nodes.sofaseat2.geometry}
                material={nodes.sofaseat2.material}
                position={[1.8, 1.21, 1.64]}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                geometry={nodes.pillow.geometry}
                material={nodes.pillow.material}
                position={[1.03, 1.39, 1.85]}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                geometry={nodes.sofaseat.geometry}
                material={nodes.sofaseat.material}
                position={[1.04, 1.21, 1.64]}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                geometry={nodes.safaBody.geometry}
                material={nodes.safaBody.material}
                position={[1.41, 1.27, 1.84]}
                rotation={[Math.PI, 0, Math.PI]}
                material-color='red'
            />
            <mesh
                geometry={nodes.safaLeg.geometry}
                material={materials['Material.025']}
                position={[1.41, 1.01, 1.68]}
                rotation={[Math.PI, 0, Math.PI]}
            />
            <mesh
                geometry={nodes.Cube040.geometry}
                material={nodes.Cube040.material}
                position={[-1.15, 1.73, -1.58]}
                rotation={[0, 0, -0.77]}
            />
            <mesh
                geometry={nodes.Cube038.geometry}
                material={nodes.Cube038.material}
                position={[-1.23, 1.73, -1.58]}
                rotation={[0, 0, 0.35]}

            />
            <mesh
                geometry={nodes.Cube037.geometry}
                material={materials['Material.022']}
                position={[-1.27, 1.73, -1.58]}
                rotation={[0, 0, 0.22]}
            />
            <mesh geometry={nodes.Cube036.geometry} material={materials['Material.023']} position={[-1.3, 1.73, -1.58]} />
            <mesh
                geometry={nodes.Cube035.geometry}
                material={nodes.Cube035.material}
                position={[-1.33, 1.73, -1.58]}
                rotation={[0, 0, -0.19]}

            />
            <mesh
                geometry={nodes.Cube034.geometry}
                material={nodes.Cube034.material}
                position={[-1.11, 1.73, -1.58]}
                rotation={[0, 0, -0.83]}

            />
            <mesh
                geometry={nodes.Cube033.geometry}
                material={nodes.Cube033.material}
                position={[-1.03, 1.73, -1.58]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh
                geometry={nodes.Cube039.geometry}
                material={materials['Material.024']}
                position={[-1.03, 1.7, -1.58]}
                rotation={[0, 0, -Math.PI / 2]}
            />
            <mesh geometry={nodes.Cube031.geometry} material={nodes.Cube031.material} position={[-1.17, 1.68, -1.58]} />
            <mesh
                geometry={nodes.Circle003.geometry}
                material={nodes.Circle003.material}
                position={[-1.17, 1.63, -1.6]}
                rotation={[Math.PI / 2, 0, 0]}

            />
            <group position={[3.29, 1.68, -1.66]}>
                <mesh geometry={nodes.Cube030.geometry} material={nodes.Cube030.material} />
                <mesh geometry={nodes.Cube030_1.geometry} material={materials['Material.017']}
                    material-color='blue'
                />
            </group>
            <group position={[3.25, 1.87, -1.66]}>
                <mesh geometry={nodes.Cube029_1.geometry} material={nodes.Cube029_1.material} />
                <mesh geometry={nodes.Cube029_2.geometry} material={materials['Material.013']} />
            </group>
            <group position={[2.79, 1.85, -1.66]}>
                <mesh geometry={nodes.Cube028_1.geometry} material={nodes.Cube028_1.material} />
                <mesh geometry={nodes.Cube028_2.geometry} material={materials['Material.014']} />
            </group>
            <group position={[2.56, 1.78, -1.66]}>
                <mesh geometry={nodes.Cube027_1.geometry} material={nodes.Cube027_1.material}
                    material-color='red'
                />
                <mesh geometry={nodes.Cube027_2.geometry} material={materials['Material.015']} />
            </group>
            <group position={[3, 1.69, -1.66]}>
                <mesh geometry={nodes.Cube026_1.geometry} material={nodes.Cube026_1.material} />
                <mesh geometry={nodes.Cube026_2.geometry} material={materials['Material.016']} />
            </group>
            <group position={[3.55, 1.78, -1.66]}>
                <mesh geometry={nodes.Cube025_1.geometry} material={nodes.Cube025_1.material} />
                <mesh geometry={nodes.Cube025_2.geometry} material={materials['Material.018']} />
            </group>
            <group position={[3.69, 2.04, -1.66]}>
                <mesh geometry={nodes.Cube024_1.geometry} material={nodes.Cube024_1.material} />
                <mesh geometry={nodes.Cube024_2.geometry} material={materials['Material.012']}
                // material-color='Bronze'
                />
            </group>
            <group position={[3.1, 2.04, -1.66]}>
                <mesh geometry={nodes.Cube023_1.geometry} material={nodes.Cube023_1.material} />
                <mesh geometry={nodes.Cube023_2.geometry} material={materials['Material.010']} />
            </group>
            <group position={[3.37, 2.04, -1.66]}>
                <mesh geometry={nodes.Cube022_1.geometry} material={nodes.Cube022_1.material} />
                <mesh geometry={nodes.Cube022_2.geometry} material={materials['Material.011']} />
            </group>
            <group position={[2.81, 2.04, -1.66]}>
                <mesh geometry={nodes.Cube021_1.geometry} material={nodes.Cube021_1.material} />
                <mesh geometry={nodes.Cube021_2.geometry} material={materials['Material.009']} />
            </group>
            <group position={[2.49, 2.04, -1.66]}>
                <mesh geometry={nodes.Cube020_1.geometry} material={nodes.Cube020_1.material} />
                <mesh geometry={nodes.Cube020_2.geometry} material={materials['Material.008']}
                    material-color='yellow'
                />
            </group>
            <mesh
                geometry={nodes.kabat.geometry}
                material={nodes.kabat.material}
                position={[-1.88, 1.48, -1.53]}
                rotation={[Math.PI, 0, Math.PI]}
                material-color='yellow'
            />
            <group position={[2.06, 1.53, -1.55]}>
                <mesh geometry={nodes.Cube032.geometry} material={nodes.Cube032.material} />
                <mesh geometry={nodes.Cube032_1.geometry} material={nodes.Cube032_1.material}
                />
            </group>
            <group position={[0.76, 1.53, -1.55]}>
                <mesh geometry={nodes.Cube031_1.geometry} material={nodes.Cube031_1.material} material-color='yellow' />
                <mesh geometry={nodes.Cube031_2.geometry} material={nodes.Cube031_2.material} />
            </group>
            <mesh geometry={nodes.smalltable.geometry} material={materials.BMD_AbstractGlass} position={[3.99, 0.96, 0.11]}
                material-color='red'
            />
        </group>
    )
}

useGLTF.preload('./models/newhouse.glb')
export default LivingModel