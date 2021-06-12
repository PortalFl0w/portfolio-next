import '../styles/globals.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"

library.add(far)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
}

export default MyApp
