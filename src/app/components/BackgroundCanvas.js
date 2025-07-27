// app/components/BackgroundCanvas.js
'use client';

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const scene = new THREE.Scene();
    {
    const color = 0xFFFFFF;
    const near = 10;
    const far = 100;
    scene.fog = new THREE.Fog(color, near, far);
    }
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 15;

    // const geometry = new THREE.BoxGeometry(10,3,3);
    // const material = new THREE.MeshPhongMaterial({ color: 0xffffff, shininess: 10 });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(-0,-7,-5);
    // scene.add(cube);

    const middleLight = new THREE.PointLight(0xfffff, 150);
    middleLight.position.set(0, 0, 0);
    scene.add(middleLight);

    const pointLight1 = new THREE.PointLight(0xbfffd0, 100, 15);
    pointLight1.position.set(10, 0, 0);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x7666d1, 100, 15);
    pointLight2.position.set(0, 10, 0);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x66a3d1, 100, 15);
    pointLight3.position.set(0, 0, 10);
    scene.add(pointLight3);
  {/*
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    scene.add(lightHelper, gridHelper);
  */}
    const controls = new OrbitControls(camera,renderer.domElement);

    const nightSky = new THREE.TextureLoader().load("/wallpaper2.jpg");
    scene.background = nightSky;
    const fireflies = [];
    const addFirefly = () => {
        const geometry = new THREE.IcosahedronGeometry(0.25, 0);
        const material = new THREE.MeshStandardMaterial({
            color: 0xffe747,
            emissive: 0xffe747,
            emissiveIntensity: 1,
            roughness: 0.3,
            metalness: 0.7,
        });
        const firefly = new THREE.Mesh(geometry, material);
        const x = THREE.MathUtils.randFloatSpread(100);
        const y = THREE.MathUtils.randFloatSpread(100);
        const z = THREE.MathUtils.randFloat(-100, -5);
        firefly.position.set(x, y, z);
        firefly.rotation.set(
            Math.random() * Math.PI,
            Math.random() * Math.PI,
            Math.random() * Math.PI
        );

        scene.add(firefly);
        fireflies.push(firefly);
        };

    Array(200).fill().forEach(addFirefly);
    const moonlight = new THREE.DirectionalLight(0xffffff, 0.5);
    moonlight.position.set(10, 20, 10);
    scene.add(moonlight);

    const animate = () => {
      requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
      fireflies.forEach((f) => {
        f.rotation.y += 0.002;
        f.rotation.x += 0.0015;
        f.position.y += .04;
        if (f.position.y > 60) {
            f.position.y = THREE.MathUtils.randFloat(-50, -20);
            f.position.x = THREE.MathUtils.randFloatSpread(100);
            f.position.z = THREE.MathUtils.randFloat(-100, -5);
        }
        });
      controls.update()
      renderer.render(scene, camera);
      
    };

    animate();
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="three-background" />;
}
