'use client'

import { alpha } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const EarthGlobe = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    const scene = new THREE.Scene();


    const camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 1.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // 👈 alpha: true pour la transparence
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    scene.background = null; // 👈 fond totalement transparent

    container.appendChild(renderer.domElement);

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/textures/earth_night_4096.jpg');

    const earthGeometry = new THREE.SphereGeometry(0.5, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });

    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 30, 5);
    scene.add(light);

    const animate = () => {
      requestAnimationFrame(animate);
      earth.rotation.y += 0.0015;
      renderer.render(scene, camera);
    };
    animate();

    // 🔄 Gestion du redimensionnement
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '50vw',
        height: '50vh',
        overflow: 'hidden',
        touchAction: 'none',
        backgroundColor: 'transparent' ,
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  );
};

export default EarthGlobe;
