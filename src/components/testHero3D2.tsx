"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, shaderMaterial, Points } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

// 📌 Shader personnalisé (Effet de pulsation & couleur changeante)
const HeroShaderMaterial = shaderMaterial(
  { time: 0 },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform float time;
    varying vec2 vUv;
    void main() {
      float pulse = sin(time * 2.0) * 0.5 + 0.5;
      gl_FragColor = vec4(vec3(vUv.x, pulse, vUv.y), 1.0);
    }
  `
);

extend({ HeroShaderMaterial });

function HeroObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.2}>
      <icosahedronGeometry args={[1, 5]} />
      <heroShaderMaterial attach="material" time={performance.now() * 0.001} />
    </mesh>
  );
}

// 📌 Particules dynamiques (Effet étoilé / spatial)
function FloatingParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const particles = new Float32Array(5000 * 3).map(() => (Math.random() - 0.5) * 10);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particles.length / 3} array={particles} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="white" />
    </points>
  );
}

// 📌 Scène complète
export default function Hero3D() {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 2, 1]} intensity={1} />
        <Suspense fallback={null}>
          <FloatingParticles />
          <HeroObject />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
