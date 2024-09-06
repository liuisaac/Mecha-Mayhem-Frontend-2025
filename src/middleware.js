import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    const { pathname } = request.nextUrl;
  
    // If the request matches the /api route, rewrite it to your backend
    if (pathname.startsWith('/api')) {
      const backendUrl = `https://mecha-mayhem-frontend.vercel.app/${pathname}`;
      console.log(backendUrl);
      return NextResponse.rewrite(backendUrl);
    }
  
    return NextResponse.next();
  }
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/api/:path*'],
}