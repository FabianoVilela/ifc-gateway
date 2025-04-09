import {
  type MiddlewareConfig,
  type NextRequest,
  NextResponse,
} from 'next/server';

const publicRoutes = [{ path: '/home', whenAuthenticated: 'next' }] as const;

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/home';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const publicRoute = publicRoutes.find(route => route.path === path);
  const apiKey = request.cookies.get('apiKey')?.value;

  // NOTE: If the user is not authenticated and trying to access a public route, allow them to proceed
  if (!apiKey && publicRoute) {
    return NextResponse.next();
  }

  // NOTE: User is not authenticated and trying to access a protected route
  if (!apiKey && !publicRoute) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE;

    return NextResponse.redirect(redirectUrl);
  }
}

export const config: MiddlewareConfig = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
