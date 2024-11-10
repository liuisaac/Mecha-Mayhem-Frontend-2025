"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';

const Gallery = () => {    
    const [photos, setPhotos] = useState([]);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const res = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery`
            );
            console.log(res);

            // Construct the photoData with URLs
            const photoData = res.data.map((photo) => ({
                ...photo, // Keep existing properties
                url: `${process.env.NEXT_PUBLIC_BACKEND_ENDPOINT}/photos/gallery/${photo.url}`, // Construct full URL
                name: `${photo.url}`
            }));

            console.log(photoData);

            const randomizedPhotos = photoData.sort(() => Math.random() - 0.5);

            setPhotos(randomizedPhotos); // Set the state with the modified photo data
        } catch (error) {
            console.error("Error fetching photos:", error); // Log error for debugging
        }
    };

    // Function to open zoomed image
    const openModalImage = (photo) => {
        setModalImage(photo);
    };

    // Function to close zoomed image
    const closeModalImage = () => {
        setModalImage(null);
    };    

    useEffect(() => {
        document.body.style.overflow = modalImage ? 'hidden' : 'visible';
        return () => {
            document.body.style.overflow = 'visible';
        };
    }, [modalImage]);

    // index of zoomed in photo in photos array
    const indexOfModalPhoto = modalImage && photos.findIndex((photo) => photo.url === modalImage.url);

    // controls if left/right arrows are displayed based on position in photos array
    const hasPrevImage = modalImage && indexOfModalPhoto > 0;
    const hasNextImage = modalImage && indexOfModalPhoto < photos.length - 1;

    // handles photo download
    const handleDownload = async (photo) => {
        try {
            const response = await axios.get(photo.url, {
                responseType: "blob",
            });

            // create temp url that points to blob object in browser memory ("pointer to Blob" in memory)
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file and click
            const link = document.createElement("a");
            link.href = href;
            link.download = photo.name;
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        } catch (error) {
            console.log(`Error downloading image: ${photo.url}`);
        }
    };

    return (
        <div className="flex-col-centered z-10 mt-20 bg-black relative">
            <h1 className="font-saira sm:text-9xl text-7xl z-10 mb-8">
                GALLERY
            </h1>
            <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 w-[80vw] gap-5 border-t-2 border-white pt-16 mb-5">
                {photos.map((photo, index) => (
                    <figure className="flex-row-start">
                        <div key={index} onClick={() => openModalImage(photo)} className="relative w-full 2xl:h-[20vw] lg:h-[40vh] sm:h-[60vh] h-[80vw] hover:scale-105 transition duration-400 ease-in-out rounded-sm">
                            <Image
                                src={photo.url}
                                alt="Image not found"
                                style={{ objectFit: "cover" }}
                                unoptimized
                                fill
                                sizes="80vw"
                            />
                        </div>
                    </figure>
                ))}
            </div>
            {
                modalImage && (
                    <div className="fixed top-8 lg:top-10 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-20 mt-4 lg:mt-1 sm:mt-0">
                        {/* For mobile view design */}
                        <div className="lg:hidden flex items-center justify-center mb-10">
                            {/* set modalImage to be the image before current in photos array based if previous arrow is selected */}
                            {hasPrevImage && <ArrowBackIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 rotate-90" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto - 1])}/>}
                        </div>
                        <div className="flex items-center justify-between relative h-[60vh] lg:h-[70vh] overflow-auto">
                            {
                                hasPrevImage && 
                                <div className="hidden lg:visible lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:flex lg:items-center lg:justify-center lg:h-full lg:mb-0">
                                    {/* set modalImage to be the image before current in photos array based if previous arrow is selected */}
                                    <ArrowBackIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 sm:rotate-0" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto - 1])}/>
                                </div>
                            }
                            <div className="flex flex-col items-center justify-center rounded-sm">
                                <Image
                                    className="w-[85%] sm:w-[85%] md:w-[80%] lg:w-[80%] xl:w-[75%]"
                                    src={modalImage.url} 
                                    alt="zoomed-image"
                                    style={{ objectFit: "contain" }}
                                    unoptimized
                                    width={900}
                                    height={700}
                                />
                                <div className="flex">
                                    <button className="sm:w-[10vw] w-[20vw] h-[4vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex justify-center items-center rounded-sm mt-3 mr-3 text-black font-bebas lg:text-2xl text-xl" onClick={() => handleDownload(modalImage)}>
                                        Download
                                    </button>
                                    <button className="sm:w-[10vw] w-[20vw] h-[4vh] bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex justify-center items-center rounded-sm mt-3 text-black font-bebas lg:text-2xl text-xl" onClick={closeModalImage}>
                                        Close
                                    </button>
                                </div>
                            </div>
                            {
                                hasNextImage && 
                                <div className="hidden lg:visible lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:flex lg:items-center lg:justify-center lg:h-full mb-10">
                                    {/* set modalImage to be the image after current in photos array based if next arrow is selected */}
                                    <ArrowForwardIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto + 1])}/>
                                </div>
                            }
                        </div>
                        {/* For mobile view design */}
                        <div className="lg:hidden flex items-center justify-center mt-10">
                            {/* set modalImage to be the image after current in photos array based if next arrow is selected */}
                            {hasNextImage && <ArrowForwardIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 rotate-90" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto + 1])}/>}
                        </div>
                    </div>
                )
            } 
        </div>
    );
};

export default Gallery;
