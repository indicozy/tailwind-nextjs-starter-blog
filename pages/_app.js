import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'
import Script from 'next/script'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'

const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@600&display=swap');
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
        </script>
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Script
        id="show-banner"
        dangerouslySetInnerHTML={{
          __html: `(function(d,t) { var BASE_URL="https://crm.op-onai.kz"; var g=d.createElement(t),s=d.getElementsByTagName(t)[0]; g.src=BASE_URL+"/packs/js/sdk.js"; g.defer = true; g.async = true; s.parentNode.insertBefore(g,s); g.onload=function(){ window.chatwootSDK.run({ websiteToken: 'i2nPSWRjjS18C6gqx89EHw8w', baseUrl: BASE_URL }) } })(document,"script");`,
        }}
      />
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
