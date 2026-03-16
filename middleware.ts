import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(sq|de)/:path*', '/((?!api|admin|_next|media|favicon.ico).*)'],
}
