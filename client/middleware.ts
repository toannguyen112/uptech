import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(req: NextRequest) {
    const hasToken = req.cookies.get("adminToken");

    if (req.nextUrl.pathname.startsWith('/admin/')) {
        if (hasToken) {
            return NextResponse.next()
        } else {

            return NextResponse.rewrite(new URL('/admin/login', req.url))

        }
    }

}