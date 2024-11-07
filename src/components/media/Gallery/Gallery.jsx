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
        document.body.style.overflow = modalImage ? 'hidden' : 'unset';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [modalImage]);

    // index of zoomed in photo in photos array
    const indexOfModalPhoto = modalImage && photos.findIndex((photo) => photo.url === modalImage.url);

    // controls if left/right arrows are displayed based on position in photos array
    const hasPrevImage = modalImage && indexOfModalPhoto > 0;
    const hasNextImage = modalImage && indexOfModalPhoto < photos.length - 1;

    // handles photo download
    const handleDownload = async () => {
        try {
            const response = await axios.get(modalImage.url, {
                responseType: "blob",
            });

            // create temp url that points to blob object in browser memory ("pointer to Blob" in memory)
            const href = URL.createObjectURL(response.data);

            // create "a" HTML element with href to file and click
            const link = document.createElement("a");
            link.href = href;
            link.download = modalImage.name;
            link.click();

            // clean up "a" element & remove ObjectURL
            document.body.removeChild(link);
            URL.revokeObjectURL(href);
        } catch (error) {
            console.log(`Error downloading image: ${modalImage.url}`);
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
                    <div className="fixed top-10 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-20">
                        <div className="flex w-full justify-end mr-40 b-5 mb-3">
                            <DownloadIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 mr-1" fontSize="large" onClick={handleDownload}/>
                            <CloseIcon className=" hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={closeModalImage}/>
                        </div>
                        <div className="flex flex-row h-3/4 relative w-full">
                            {
                                hasPrevImage && 
                                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 sm:w-40">
                                    {/* set modalImage to be the image before current in photos array based if previous arrow is selected */}
                                    <ArrowBackIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto - 1])}/>
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
                                hasNextImage && 
                                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-10 sm:w-40">
                                    {/* set modalImage to be the image after current in photos array based if next arrow is selected */}
                                    <ArrowForwardIcon className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200" fontSize="large" onClick={() => setModalImage(photos[indexOfModalPhoto + 1])}/>
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
