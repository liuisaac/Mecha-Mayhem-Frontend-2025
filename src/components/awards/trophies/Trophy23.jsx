"use client";

import React, { useEffect, useMemo } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera, PresentationControls } from "@react-three/drei";

const Trophy23 = () => {
    const Mesh = () => {
        const [rotation, setRotation] = useState(0);
        const hober = useLoader(GLTFLoader, "./three/Trophy2023.glb");

        useFrame(() => {
            setRotation(rotation + 0.01);
        });

        return (
        <group position={[0, 0, 0]} rotation={[0, rotation, 0]}>
            <primitive object={hober.scene} />
        </group>
        );
    };

    return (
        <div className="absolute right-0 top-[30%] flex flex-row h-[110vh] w-[70vh] justify-center overflow-visiblebg-transparent">
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[0, 70, 500]}
                    fov={30}
                    rotation={[0, 0, 0]}
                />
                <directionalLight
                    color="white"
                    position={[200, -100, -500]}
                    intensity={0.5}
                />
                <directionalLight
                    color="white"
                    position={[-30, 100, 30]}
                    intensity={6}
                />

                <directionalLight
                    color="white"
                    position={[-30, -100, -30]}
                    intensity={6}
                />
                <ambientLight />
                <PresentationControls
                    polar={[0, 0]}
                    config={{ mass: 3, tension: 1, friction: 3 }}
                    speed={10}
                >
                    <Mesh />
                </PresentationControls>
            </Canvas>
        </div>
    );
};

export default Trophy23;
