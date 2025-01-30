"use client";

import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";

const Cube = ({ height }) => {
  const meshRef = useRef(null);
  const edgesRef = useRef(null);
  const [videoTexture, setVideoTexture] = useState(null);

  useEffect(() => {
    const video = document.createElement("video");
    video.src = "/three/field_border.mp4";
    video.loop = true;
    video.muted = true;
    video.playsInline = true;
    video.crossOrigin = "anonymous";

    video.onloadedmetadata = () => {
      video.play();
      const texture = new THREE.VideoTexture(video);
      texture.minFilter = THREE.LinearFilter;
      texture.magFilter = THREE.LinearFilter;
      texture.format = THREE.RGBAFormat;
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;

      setVideoTexture(texture);
    };
  }, []);

  const dim = [4, height, 4];

  const checkerboardShaderMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0xa1a2a1) },
      color2: { value: new THREE.Color(0x9f9f9f) },
      lightDir: { value: new THREE.Vector3(0, 1, 1).normalize() },
      ambient: { value: 0.2 }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        vUv = uv;
        // Transform object's normal into view space
        vNormal = normalMatrix * normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      uniform vec3 lightDir;
      uniform float ambient;
      varying vec2 vUv;
      varying vec3 vNormal;

      void main() {
        // Checker pattern
        float checker = step(0.5, mod(floor(vUv.x * 8.0) + floor(vUv.y * 8.0), 2.0));
        vec3 baseColor = mix(color1, color2, checker);

        // Lambert-like factor with a simple directional light
        float lambert = max(dot(normalize(vNormal), -lightDir), 0.0);

        // Combine color with ambient + lambert
        vec3 finalColor = baseColor * (ambient + lambert);
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `,
  });

  return (
    <>
      <mesh ref={meshRef} rotation={[0, 0, 0]}>
        <boxGeometry args={dim} />
        {videoTexture && [
          <meshBasicMaterial
            key={0}
            attach="material-0"
            map={videoTexture}
          />,
          <meshBasicMaterial
            key={1}
            attach="material-1"
            map={videoTexture}
          />,
          <primitive
            key={2}
            attach="material-2"
            object={checkerboardShaderMaterial}
          />,
          <primitive
            key={3}
            attach="material-3"
            object={checkerboardShaderMaterial}
          />,
          <meshBasicMaterial
            key={4}
            attach="material-4"
            map={videoTexture}
          />,
          <meshBasicMaterial
            key={5}
            attach="material-5"
            map={videoTexture}
          />,
        ]}
      </mesh>
      <lineSegments ref={edgesRef}>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(...dim)]} />
        <lineBasicMaterial attach="material" color="black" />
      </lineSegments>
    </>
  );
};

export default Cube;