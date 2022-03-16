// import GA from './GoogleAnalytics'
import Plausible from './Plausible'
// import SimpleAnalytics from './SimpleAnalytics'
// import Umami from './Umami'
import siteMetadata from '@/data/siteMetadata'

const isProduction = process.env.NODE_ENV === 'production'

const Analytics = () => {
  return <>{isProduction && siteMetadata.analytics.plausibleDataDomain && <Plausible />}</>
}

export default Analytics
