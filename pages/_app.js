import '../styles/globals.css'
import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { wrapper } from '../components/store'

library.add(far, fab, fas)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps}/>
}

export default wrapper.withRedux(MyApp)
