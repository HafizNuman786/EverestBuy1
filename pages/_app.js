import store from "@/store/store"
import "../styles/styles.css"
import { Provider } from "react-redux"
export default function App({ Component, pageProps }) {
  return<>
  <Provider store={store}>
  <Component {...pageProps} />
  </Provider> 
  </> 
}
