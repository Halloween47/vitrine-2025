"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
// import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

// Pour un rendu personnalisé
// function RotatingModel() {
//     const { scene } = useGLTF("/models/monModele.glb");
//     return <primitive object={scene} scale={1.5} />;
//   }
  

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <Suspense fallback={null}>
          <RotatingModel />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

// Un modèle 3D simple : un cube en rotation
function RotatingModel() {
  return (
    <mesh rotation={[0, 0, 0]} scale={1.5}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
