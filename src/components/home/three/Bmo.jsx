"use client";

import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { PerspectiveCamera } from "@react-three/drei";

const Bmo = () => {
    const hober = useLoader(GLTFLoader, "./three/bmo_large.glb");
    return (
        <div className="flex flex-row h-screen w-screen justify-center overflow-visible backdrop-blur-sm bg-[#E31F2B]">
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={[47, 0, 10]}
                    fov={30}
                    rotation={[0.265, -0, 0]}
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
                <group position={[50, 0, 0]} rotation={[0, -1, 0]}>
                    <primitive object={hober.scene} />
                </group>
            </Canvas>
        </div>
    );
};

export default Bmo;
