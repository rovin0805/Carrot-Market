import { NextRequest, NextFetchEvent, NextResponse } from 'next/server';

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.ua?.isBot) {
    return new Response('A bot is not allowed to be here.', { status: 403 });
  }
  // if (!req.url.includes('/api')) {
  //   if (!req.url.includes('/enter') && !req.cookies.sessionCookie) {
  //     return NextResponse.redirect('/enter');
  //   }
  // }
}
