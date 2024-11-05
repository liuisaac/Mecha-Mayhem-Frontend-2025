"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';

const Gallery = () => {    
    const [photos, setPhotos] = useState([]);
    const [modalImage, setModalImage] = useState(null);

    useEffect(() => {
        setPhotos([{url: "/odellcatch.jpg"}, {url: "/gwilsoncatch.jpeg"}, {url: "/jaredmccain.jpg"}]);
        // fetchPhotos();
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
        document.body.style.overflow = modalImage ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalImage?.url]);

    const moveImage = (isLeft) => {
        // set modalImage to be the image before / after current in photos array based if left or right array was selected
        const currentIndex = photos.findIndex((photo) => photo.url === modalImage?.url);
        console.log("Current Index: " + currentIndex);
        const nextIndex = currentIndex + (isLeft == true ? -1 : 1);
        console.log("Next Index: " + nextIndex);

        if (currentIndex >= 0 && nextIndex < photos.length) {
            setModalImage(photos[nextIndex]);
        }
    };

    const isLeftImage = modalImage && photos.findIndex((photo) => photo.url === modalImage?.url) > 0;
    const isRightImage = modalImage && photos.findIndex((photo) => photo.url === modalImage?.url) < photos.length - 1;

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
                    <div className="fixed top-10 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-20">
                        <div className="flex w-full justify-end mr-40 b-5">
                            <DownloadIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 mr-1" fontSize="large">
                            </DownloadIcon>
                            <CloseIcon className=" hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={closeModalImage}>
                            </CloseIcon>
                        </div>
                        <div className="flex flex-row h-3/4 relative w-full">
                            {
                                isLeftImage && 
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 sm:w-40">
                                    <ArrowBackIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={() => moveImage(true)}>
                                    </ArrowBackIcon>
                                </div>
                            }
                            <div className="flex justify-center w-full">
                                <Image
                                    src={modalImage.url} 
                                    alt="zoomed-image"
                                    style={{ objectFit: "cover" }}
                                    unoptimized
                                    width={900}
                                    height={700}
                                />
                            </div>
                            {
                                isRightImage && 
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 sm:w-40">
                                    <ArrowForwardIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={() => moveImage(false)}>
                                    </ArrowForwardIcon>
                                </div>
                            }
                        </div>
                    </div>
                )
            } 
        </div>
    );
};

export default Gallery;
