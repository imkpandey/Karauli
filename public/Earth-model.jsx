/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 .\earth-model.glb --transform 
Files: .\earth-model.glb [12.49MB] > earth-model-transformed.glb [226.51KB] (98%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/earth-model-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere001.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.Sphere001_1.geometry} material={materials['Material.004']} />
      <mesh geometry={nodes.Sphere001_2.geometry} material={materials['Material.005']} />
    </group>
  )
}

useGLTF.preload('/earth-model-transformed.glb')