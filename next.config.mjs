import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/'
})

export default withNextra({
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/overview',
        permanent: true
      },
      {
        source: '/documentation/:path*',
        destination: '/:path*',
        permanent: true
      }
    ]
  }
})
