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
            const res = await axios.get(`https://${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery`);
            console.log(res);
            setPhotos(res.data);
        } catch (error) {}
    };

    return (
        <div className="flex-col-centered z-10 mt-20">
          <h1 className="font-saira text-9xl z-10 mb-8">GALLERY</h1>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 w-[80vw] gap-5 border-t-2 border-white pt-16">
                {photos.map((photo, index) => (
                    <figure className="flex-row-start" key={index}>
                        <div className="relative w-full 2xl:h-[20vw] lg:h-[40vh] sm:h-[60vh] hover:scale-105 transition duration-400 ease-in-out rounded-sm">
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
