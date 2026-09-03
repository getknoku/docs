/* eslint-env node */
import Script from 'next/script'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'

export const metadata = {
  metadataBase: new URL('https://docs.knoku.com'),
  title: {
    default: 'Knoku Docs',
    template: '%s — Knoku Docs'
  },
  description:
    'Knoku indexes your docs and answers with citations — widget, Slack, Discord, MCP, and API. Start a 14-day trial and connect a GitHub repo in minutes.',
  applicationName: 'Knoku Docs',
  appleWebApp: {
    title: 'Knoku Docs'
  }
}

const Logo = () => (
  <>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/dark_logo.svg"
      alt="Knoku"
      className="knoku-logo-light"
      style={{ height: 24, width: 'auto' }}
    />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/white_logo.svg"
      alt="Knoku"
      className="knoku-logo-dark"
      style={{ height: 24, width: 'auto' }}
    />
  </>
)

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar logo={<Logo />} />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              © {new Date().getFullYear()} Knoku · Built with Nextra ·{' '}
              <a
                href="/doc-platforms/nextra"
                style={{ textDecoration: 'underline' }}>
                Add Knoku to your Nextra site →
              </a>
            </Footer>
          }
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
        <Script
          src="https://cdn.knoku.com/widget.js"
          strategy="afterInteractive"
          data-project-id="6365fe85-3915-4ad8-b5f1-35d1a8aefba0"
          data-language="en"
          data-layout="modal"
          data-launcher-style="pill"
          data-launcher-align="bottom-right"
          data-launcher-show-icon="false"
          data-launcher-text="Ask Docs"
          data-greeting="Ask about sources, integrations, the widget, or the dashboard."
          data-suggested-questions="What sources can I connect to Knoku?|plug,Can I combine multiple sources in one project?|package,How are Public and Internal sources separated?|shield"
        />
      </body>
    </html>
  )
}
