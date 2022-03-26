import { withIronSessionApiRoute, withIronSessionSsr } from 'iron-session/next';

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'sessionCookie',
  password: process.env.COOKIE_PASSWORD!,
};

export function withApiSession(handler: any) {
  return withIronSessionApiRoute(handler, cookieOptions);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieOptions);
}
