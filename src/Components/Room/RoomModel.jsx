import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';
// import { useSnapshot } from 'valtio'
// import { TextureLoader } from 'three';

export let Marbletexture = [
    "https://images-eu.ssl-images-amazon.com/images/I/91UIbcyJVLL._AC_UL600_SR600,600_.jpg",
    "https://www.kajariaceramics.com/product-picture/PW03730_b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCBgnYstUWmaynJb2irvMu4V1AnZh6RowHbdNwEnJ8YG6fUC8FW7kHPul-6bZQT2Mss7g&usqp=CAU",
    "https://cdn11.bigcommerce.com/s-4990d/images/stencil/1280x1280/products/25612/34660/HD_fondi_decori10__55147.1535659503.jpg?c=2",
    "https://images.unsplash.com/flagged/photo-1622363405079-da46534ce5ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRpbGUlMjB0ZXh0dXJlfGVufDB8fDB8fHww&w=1000&q=80",
    "https://as1.ftcdn.net/v2/jpg/01/25/45/06/1000_F_125450626_fERwEZKqViBUVa7ophDrfTgGDYt3rB8N.jpg",
    "https://media.istockphoto.com/id/1221955356/photo/geometric-pattern-wooden-floor-and-wall-mosaic-decor-tile.jpg?s=612x612&w=0&k=20&c=EVcgTm4O4Jf7x5XnYQQTFZKxd7ddunjfPUQd0tzzpo0=",
    "https://media.istockphoto.com/id/895082378/photo/high-quality-high-resolution-seamless-wood-texture-flooring-parquet.jpg?s=170667a&w=0&k=20&c=Csw4Ybh1yYC0q3tKpLoiXUOf6eCzktDJzc9OXAXeMII=",
    "https://i0.wp.com/textures.world/wp-content/uploads/2018/10/8-Classic-Floor-Tile-Background-Texture-copy.jpg?ssl=1",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/h/f/hfm_anti-skid_ec_wooden_mosaic__ceramic_tile_floor_tile_300x300_mm.jpg",
    "https://tileswale.com/uploads/products/163937626741_8809_689469.jpg",
    "https://s7d1.scene7.com/is/image/TileShop/681708?$PDPNormal$",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/g/f/gft_bdf_arrow_bass_wood_ft.jpg",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_3d_venn_blue_wave.jpg",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_onyx_blue_bm.jpg",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/c/pcg_swan_marble_blue_f3.jpg",
    "https://tiimg.tistatic.com/fp/1/004/515/cork-wood-mosaic-tile-206.jpg",
    "https://images.orientbell.com/media/catalog/product/cache/b9393dc52362842095b7f55239e9b36f/p/g/pgvt_emperador_stone_marble_f1_glazed_vitrified_tile_wall_floor_tile_600x600mm.jpg",
    "https://cdn.pixabay.com/photo/2016/05/04/13/11/brick-wall-1371349_640.jpg"

]
// https://source.unsplash.com/random/700x900/?marble


const RoomModel = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('./models/roomdemo.glb')
    // const snap = useSnapshot(state)
    const [hovered, set] = useState(null)

    const MachinebackgroundTexture = useTexture(Marbletexture[3]);
    // const MachinebackgroundTexture = useTexture('https://source.unsplash.com/random/900x700/?marble');

    // Set the texture's UV mapping to cover the entire mesh
    MachinebackgroundTexture.wrapS = MachinebackgroundTexture.wrapT = THREE.ClampToEdgeWrapping;
    MachinebackgroundTexture.repeat.set(1, 1);


    const textureLoader = new THREE.TextureLoader();
    const tableTexture = textureLoader.load(Marbletexture[0]);
    tableTexture.wrapS = THREE.RepeatWrapping;
    tableTexture.wrapT = THREE.RepeatWrapping;
    tableTexture.repeat.set(4, 4); // Stretch the texture

    const tableMaterial = new THREE.MeshStandardMaterial({
        map: tableTexture, // Assign the loaded texture to the map property
        roughness: 0.5,// ... other material properties
    });



    const leatherTextureProps = useTexture({
        map: Marbletexture[3],
        normalMap: Marbletexture[3],
        roughnessMap: Marbletexture[3],
        aoMap: Marbletexture[3],
    });

    useEffect(() => {
        const cursor = `<svg width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path fill="rgba(255, 255, 255, 0.5)" d="M29.5 54C43.031 54 54 43.031 54 29.5S43.031 5 29.5 5 5 15.969 5 29.5 15.969 54 29.5 54z" stroke="#000"/><g filter="url(#filter0_d)"><path d="M29.5 47C39.165 47 47 39.165 47 29.5S39.165 12 29.5 12 12 19.835 12 29.5 19.835 47 29.5 47z" fill="white"/></g><path d="M2 2l11 2.947L4.947 13 2 2z" fill="#000"/><text fill="#FFF" style="#fff-space:pre" font-family="Inter var, sans-serif" font-size="13" letter-spacing="-.01em"><tspan x="35" y="63">${hovered}</tspan></text></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h64v64H0z"/></clipPath><filter id="filter0_d" x="6" y="8" width="100" height="100" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="3"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>`
        if (hovered) {
            document.body.style.cursor = `url('data:image/svg+xml;base64,${btoa(cursor)}'), auto`
            return () => { (document.body.style.cursor = `auto`) }
        }
        else { // Set the default cursor when not hovered
            document.body.style.cursor = 'auto';
        }
    }, [hovered])



    return (
        <group ref={group} {...props} dispose={null} scale={3}
            onPointerOver={(e) => (e.stopPropagation(), set(e.object.material.name))}
            onPointerOut={(e) => e.intersections.length === 0 && set(null)}
            onClick={(e) => (e.stopPropagation(), props.setSetselectedObject(e.object.material.name))}

        >

            <group position={[0.56, 0.95, 1.37]}>
                <mesh geometry={nodes.Feet001.geometry} material={nodes.Feet001.material}
                    material-color="red"
                />
                <group position={[-0.04, -0.95, -1.36]}>
                    <mesh geometry={nodes.Cube012.geometry}
                        material={materials.Wood}
                        // material={tableMaterial}
                        // material-color={props.tableConf.color}
                        visible={props.tableConf.visible}
                    >
                        {/* <meshStandardMaterial map={MachinebackgroundTexture} /> */}
                        <meshBasicMaterial map={MachinebackgroundTexture} />
                    </mesh>
                    <mesh geometry={nodes.Cube012_1.geometry} material={materials['Struttura Mat']}
                        material-color="pink"
                    />
                </group>
            </group>

            <group position={[0.56, 0.95, 1.37]}
                visible={props.windowConf.visible}
            >
                <group position={[-2.38, 0.38, -1.32]} rotation={[0, -1.57, 0]}>
                    <mesh geometry={nodes.Cube025.geometry} material={materials.wood} material-color="white" />
                    <mesh geometry={nodes.Cube025_1.geometry} material={materials.glass} material-color={props.windowConf.glassColor} />
                    <mesh geometry={nodes.Cube025_2.geometry} material={materials.iron} material-color="red" />
                    <mesh geometry={nodes.Cube025_3.geometry} material={materials['sheet metal']} material-color="yellow" />
                    <mesh geometry={nodes.Cube025_4.geometry} material={materials.hlinik} material-color="pink" />
                    <mesh geometry={nodes.Cube025_5.geometry} material={materials.guma} material-color="pink" />
                </group>
            </group>

            <mesh geometry={nodes.Room001.geometry} material={materials.Wall_material} position={[1.94, 0, 2.97]}
                material-color={props.wallConf.color}
            >
                <mesh
                    geometry={nodes.Baseboard.geometry}
                    material={materials.Baseboard_material}
                    position={[0.04, 0, -0.13]}
                    scale={[0.97, 1.83, 0.96]}
                    material-color={props.setsidborderConf.color}
                    visible={props.setsidborderConf.visible}
                />
                <mesh geometry={nodes.Floor.geometry}
                    // material={tableMaterial}
                    material={materials.Floor_material}
                // material-color={props.floorConf.color}
                >
                    <meshBasicMaterial map={MachinebackgroundTexture} color={'white'} />
                </mesh>
            </mesh>
            <mesh
                geometry={nodes.Cabinet1.geometry}
                material={materials.Cabinet_material}
                position={[-1.77, 1.5, 2.38]}
                rotation={[0, Math.PI / 2, 0]}
                material-color="blue"
                visible={props.cabinateConf.visible}
            >
                <mesh geometry={nodes.Cabinet1_Door.geometry}
                    material={materials.Door_material}
                    position={[0.6, 0, 0.35]}
                    material-color="yellow"
                >
                    {/* <meshBasicMaterial map={MachinebackgroundTexture}  /> */}

                    <mesh
                        geometry={nodes.Handle.geometry}
                        material={materials.Handle_material}
                        position={[-0.54, 0.12, 0.02]}
                        rotation={[0, 0, -Math.PI / 2]}
                        material-color="red"
                    />
                </mesh>
            </mesh>

            <mesh
                geometry={nodes.Asymmetric_bookshelf.geometry}
                material={nodes.Asymmetric_bookshelf.material}
                position={[-1.61, 0.04, -2.62]}
                rotation={[1.42, 1.5, -1.42]}
                scale={[0.87, 1.11, 1.13]}

                material-color="yellow"
            />
            <mesh
                geometry={nodes.Asymmetric_bookshelf001.geometry}
                material={nodes.Asymmetric_bookshelf001.material}
                position={[-1.6, 0.04, -1.97]}
                rotation={[1.44, 1.5, -1.42]}
                scale={[0.87, 1.11, 1.13]}
                material-color="white"
            />
        </group>
    )
}

useGLTF.preload('./models/roomdemo.glb')
export default RoomModel