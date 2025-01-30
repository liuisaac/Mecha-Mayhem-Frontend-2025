import React from "react";

const create_frame = (w, h, ht, vo, color) => {
    return (
        <>
            <mesh position={[0, vo, -h / 2 + ht / 2]}>
                <boxGeometry args={[w, ht, ht]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[0, vo, h / 2 - ht / 2]}>
                <boxGeometry args={[w, ht, ht]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[-w / 2 + ht / 2, vo, 0]}>
                <boxGeometry args={[ht, ht, h]} />
                <meshStandardMaterial color={color} />
            </mesh>
            <mesh position={[w / 2 - ht / 2, vo, 0]}>
                <boxGeometry args={[ht, ht, h]} />
                <meshStandardMaterial color={color} />
            </mesh>
        </>
    );
};

const create_posts = (w, h, ht, vo, fs, color) => {
    const positions = [
        [-w / 2 + ht / 2, vo + fs / 2, -h / 2 + ht / 2],
        [w / 2 - ht / 2, vo + fs / 2, -h / 2 + ht / 2],
        [-w / 2 + ht / 2, vo + fs / 2, h / 2 - ht / 2],
        [w / 2 - ht / 2, vo + fs / 2, h / 2 - ht / 2],
        [-w / 6 + ht / 2, vo + fs / 2, -h / 2 + ht / 2],
        [w / 6 - ht / 2, vo + fs / 2, -h / 2 + ht / 2],
        [-w / 6 + ht / 2, vo + fs / 2, h / 2 - ht / 2],
        [w / 6 - ht / 2, vo + fs / 2, h / 2 - ht / 2],
        [-w / 2 + ht / 2, vo + fs / 2, -h / 2 + ht / 2 + h / 3],
        [w / 2 - ht / 2, vo + fs / 2, -h / 2 + ht / 2 + h / 3],
        [-w / 2 + ht / 2, vo + fs / 2, h / 2 - ht / 2 - h / 3],
        [w / 2 - ht / 2, vo + fs / 2, h / 2 - ht / 2 - h / 3],
    ];

    return (
        <>
            {positions.map((pos, idx) => (
                <mesh key={idx} position={pos}>
                    <boxGeometry args={[ht, fs, ht]} />
                    <meshStandardMaterial color={color} />
                </mesh>
            ))}
        </>
    );
};

const Frame = ({ offset }) => {
    const w = 4;
    const h = 4;
    const ht = 0.05; // Horizontal thickness of the frame
    const fs = 0.3; // Height difference between top and bottom frames
    const vo = offset - fs - ht / 2; // Vertical offset of the entire frame
    const seg_col = "black";
    const post_col = "black";

    return (
        <>
            {create_frame(w, h, ht, vo, seg_col)}
            {create_frame(w, h, ht, vo + fs, seg_col)}
            {create_posts(w, h, ht, vo, fs, post_col)}
        </>
    );
};

export default Frame;
