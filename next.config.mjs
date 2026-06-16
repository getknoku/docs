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
      },
      {
        source: '/integrations/github-discussions',
        destination: '/sources/github-discussions',
        permanent: true
      },
      {
        source: '/integrations/github-issues',
        destination: '/sources/github-issues',
        permanent: true
      },
      {
        source: '/integrations/widget-builder',
        destination: '/widget/widget-builder',
        permanent: true
      },
      {
        source: '/api',
        destination: 'https://api.knoku.com/v1/docs',
        permanent: false
      },
      {
        source: '/api/:path*',
        destination: 'https://api.knoku.com/v1/docs',
        permanent: false
      }
    ]
  }
})
