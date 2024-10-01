/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "lh3.googleusercontent.com",
            "localhost",
            "storage.googleapis.com",
            "mecha-mayhem-frontend.vercel.app",
            "mecha-photo-gallery.s3.amazonaws.com",
        ],
    },
};

export default nextConfig;
