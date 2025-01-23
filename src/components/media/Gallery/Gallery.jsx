"use client";

import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
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
                name: `${photo.url}`,
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
        document.body.style.overflow = modalImage ? "hidden" : "visible";
        return () => {
            document.body.style.overflow = "visible";
        };
    }, [modalImage]);

    // index of zoomed in photo in photos array
    const indexOfModalPhoto =
        modalImage && photos.findIndex((photo) => photo.url === modalImage.url);

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
                    <figure key={index} className="flex-row-start">
                        <div
                            onClick={() => openModalImage(photo)}
                            className="relative w-full 2xl:h-[20vw] lg:h-[40vh] sm:h-[60vh] h-[80vw] hover:scale-105 transition duration-400 ease-in-out rounded-sm hover:cursor-pointer"
                        >
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
            {modalImage && (
                <div
                    className="fixed top-8 lg:top-10 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-20 mt-4 lg:mt-1 sm:mt-0"
                    onClick={closeModalImage} // Close modal on click outside
                >
                    {/* Modal content wrapper with stopPropagation to prevent closing when clicking inside */}
                    <div
                        className="flex flex-col items-center justify-center relative"
                        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside modal
                    >
                        {/* For mobile view design */}
                        <div className="lg:hidden flex items-center justify-center mb-10">
                            {hasPrevImage && (
                                <ArrowBackIcon
                                    className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 rotate-90"
                                    fontSize="large"
                                    onClick={() =>
                                        setModalImage(
                                            photos[indexOfModalPhoto - 1]
                                        )
                                    }
                                />
                            )}
                        </div>
                        <div className="flex items-center justify-between relative h-[45vh] sm:h-[55vh] lg:h-[70vh] overflow-auto">
                            {hasPrevImage && (
                                <div className="hidden lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:flex lg:items-center lg:justify-center lg:h-full lg:mb-0">
                                    <ArrowBackIcon
                                        className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 sm:rotate-0"
                                        fontSize="large"
                                        onClick={() =>
                                            setModalImage(
                                                photos[indexOfModalPhoto - 1]
                                            )
                                        }
                                    />
                                </div>
                            )}
                            <div className="flex flex-col items-center justify-center rounded-sm">
                                <Image
                                    className="h-[85%] sm:h-[85%] md:w-[80%] lg:h-[80%] xl:h-[75%]"
                                    src={modalImage.url}
                                    alt="zoomed-image"
                                    style={{ objectFit: "contain" }}
                                    unoptimized
                                    width={900}
                                    height={700}
                                />
                                <div className="flex">
                                    <button
                                        className="sm:w-64 w-[30vw] h-10 bg-[#E31F2B] hover:bg-white transition duration-100 ease-in-out group flex justify-center items-center rounded-sm mt-3 text-black font-bebas lg:text-2xl text-xl gap-2"
                                        onClick={() =>
                                            handleDownload(modalImage)
                                        }
                                    >
                                        <DownloadIcon /> Download
                                    </button>
                                </div>
                            </div>
                            {hasNextImage && (
                                <div className="hidden lg:absolute lg:right-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:flex lg:items-center lg:justify-center lg:h-full mb-10">
                                    <ArrowForwardIcon
                                        className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200"
                                        fontSize="large"
                                        onClick={() =>
                                            setModalImage(
                                                photos[indexOfModalPhoto + 1]
                                            )
                                        }
                                    />
                                </div>
                            )}
                        </div>
                        <div className="lg:hidden flex items-center justify-center mt-10">
                            {hasNextImage && (
                                <ArrowForwardIcon
                                    className="hover:text-gray-500 active:text-gray-700 cursor-pointer transition-colors duration-200 rotate-90"
                                    fontSize="large"
                                    onClick={() =>
                                        setModalImage(
                                            photos[indexOfModalPhoto + 1]
                                        )
                                    }
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
