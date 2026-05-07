/* eslint-env node */
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
    'Knoku is an AI chat assistant for documentation sites. Sync your docs with the CLI and embed the widget to answer visitor questions from your own content.',
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
      className="dark:hidden"
      style={{ height: 24, width: 'auto' }}
    />
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src="/white_logo.svg"
      alt="Knoku"
      className="hidden dark:block"
      style={{ height: 24, width: 'auto' }}
    />
  </>
)

const AskAIButton = () => (
  <a
    href="#"
    aria-label="Ask AI"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '5px 10px',
      marginRight: '8px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: 500,
      color: 'inherit',
      textDecoration: 'none',
      backgroundColor: 'rgba(99, 102, 241, 0.08)',
      border: '1px solid rgba(99, 102, 241, 0.15)',
      transition: 'background-color 0.15s, border-color 0.15s',
    }}>
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#6366f1"
      strokeWidth="2"
      strokeLinejoin="round">
      <path d="M12 2.75l2.45 6.8L21.25 12l-6.8 2.45L12 21.25l-2.45-6.8L2.75 12l6.8-2.45L12 2.75z" />
    </svg>
    Ask AI
  </a>
)

export default async function RootLayout({ children }) {
  const navbar = (
    <Navbar logo={<Logo />}>
      <AskAIButton />
    </Navbar>
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              © {new Date().getFullYear()} Knoku · Built with{' '}
              <a
                href="https://nextra.site"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline' }}>
                Nextra
              </a>
              .
            </Footer>
          }
          editLink={null}
          feedback={{ content: null }}
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
