/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 src/blender/grand_theft_auto_san_andreas__grove_street.glb 
Author: Donstereo (https://sketchfab.com/Donstereo)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/grand-theft-auto-san-andreas-grove-street-4dbdbe00c5cf46d8a2ef220045f58d9b
Title: Grand theft auto San Andreas | Grove street
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export function Model(props) {
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	const { nodes, materials } = useGLTF(
		"/grand_theft_auto_san_andreas__grove_street.glb"
	);
	const mate = new MeshStandardMaterial({
		color: "hotpink",
		map: materials.color.map,
	});
	const mate1 = new MeshStandardMaterial({
		color: "green",
		map: materials.color.map,
	});
	const mate2 = new MeshStandardMaterial({
		color: "orange",
		map: materials.color.map,
	});
	console.log("mate", mate);

	return (
		<group
			{...props}
			dispose={null}
			scale={active ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => {
				console.log("event", event);
				console.log("materials.color", materials);
				setHover(true);
			}}
			onPointerOut={(event) => setHover(false)}
		>
			<group position={[27.994, 5.807, -1.12]}>
				<mesh geometry={nodes.Object_4.geometry} material={materials.color} />

				<mesh
					geometry={nodes.Object_5.geometry}
					material={hovered ? mate1 : materials.color}
				/>
				<mesh geometry={nodes.Object_6.geometry} material={materials.color} />
			</group>
		</group>
	);
}

useGLTF.preload("/grand_theft_auto_san_andreas__grove_street.gtfl");