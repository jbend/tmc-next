import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { defineCustomElements } from "@trimble-oss/modus-web-components/loader";

function TmcApp({ Component, pageProps }: AppProps) {
  defineCustomElements();
  return <Component {...pageProps} />
}

export default TmcApp
