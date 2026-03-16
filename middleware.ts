import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(sq|de|fr|it|en)/:path*', '/((?!api|admin|_next|media|favicon.ico).*)'],
}
