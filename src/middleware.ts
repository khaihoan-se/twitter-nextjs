// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
   // Setting url on the request
   const url = request.nextUrl.clone()
   // Getting cookies from the request
   const cookieToken = request.cookies.get('token')
   // check if the token is valid page Login   
   // if(url.pathname === '/home' || url.pathname === '/notifications' || url.pathname === '/messages' || url.pathname === '/i/bookmarks') {
   //    if(cookieToken == undefined) {
   //       return NextResponse.redirect(new URL('/', request.url))
   //    }
   // }
   // if(url.pathname === '/') {
   //    if(cookieToken) {
   //       return NextResponse.redirect(new URL('/home', request.url))
   //    }
   // }

   return NextResponse.next()
}