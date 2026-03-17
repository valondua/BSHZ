import { withPayload } from '@payloadcms/next/withPayload'

const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sq',
        permanent: false,
      },
    ]
  },
}

export default withPayload(nextConfig)
