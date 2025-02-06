import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, SpotLight } from "@react-three/drei";
import Frame from "./Frame";
import Cube from "./Cube";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const Model = ({ url }) => {
    const gltf = useLoader(GLTFLoader, url);
    return <primitive object={gltf.scene} position={[0, 0.34, 0]} />; // Adjust the Y position to move it up
};

const StandingField = () => {
    const height = 0.7;
    const modelUrl = "./three/f.glb";

    return (
        <div className="w-full h-screen">
            {/* Enable shadow support on the canvas */}
            <Canvas
                shadows={true}
                camera={{ position: [0, 5, 10], fov: 50 }} // Adjusted camera position slightly
            >
                {/* Example ground plane to receive shadows (if you don't have one) */}
                <mesh
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -0.35, 0]}
                    receiveShadow={true}
                >
                    <planeGeometry args={[100, 100]} />
                    <meshStandardMaterial color="#000000" />
                </mesh>

                <directionalLight
                    position={[-10, 1000, 10]}
                    intensity={0.2}
                    castShadow={true}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <SpotLight
                    position={[0, 5, 0]}
                    angle={0.3}
                    penumbra={0.4}
                    intensity={1}
                    castShadow={true}
                    power={1000}
                    color="#ffffff" // This sets the light color to purple
                />

                {/* Objects that cast shadows need castShadow set to true */}
                <Cube height={height} castShadow={true} />
                <Frame offset={height} />
                <Model url={modelUrl} />

                <OrbitControls />
            </Canvas>
        </div>
    );
};

export default StandingField;
