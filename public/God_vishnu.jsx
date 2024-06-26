/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\god_vishnu.glb --transform 
Files: .\god_vishnu.glb [3.72MB] > god_vishnu-transformed.glb [834.96KB] (78%)
Author: chandimap1996 (https://sketchfab.com/chandimap1996)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/god-vishnu-db87a4f9daab4a9b9ee279d777a2ffba
Title: God Vishnu
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/god_vishnu-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials['Material_0.004']} position={[0, 0.374, 0]} rotation={[-Math.PI, 0.998, -Math.PI]} scale={4.124} />
    </group>
  )
}

useGLTF.preload('/god_vishnu-transformed.glb')
