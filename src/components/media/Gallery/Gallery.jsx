"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";

const Gallery = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await axios.get(`http://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery`);
            console.log(res);
            setPhotos(res.data);
        } catch (error) {}
    };

    return (
        <div className="flex-col-centered z-10 mt-20">
          <h1 className="font-saira text-9xl z-10 mb-8">GALLERY</h1>
            <div className="grid grid-cols-3 w-[80vw] gap-5 border-t-2 border-white pt-16">
                {photos.map((photo, index) => (
                    <figure className="flex-row-start" key={index}>
                        <div className="relative w-full h-[20vw] hover:scale-105 transition duration-400 ease-in-out rounded-sm">
                            <Image
                                src={photo.url}
                                alt="break"
                                style={{ objectFit: "cover" }}
                                fill
                            />
                        </div>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
