import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider appId="RYiB2mjHNkv9RsejfQEe8XDUY0OT2kolRQvzie17"
     serverUrl="https://v83p1bphxeqj.usemoralis.com:2053/server">
<Component {...pageProps} />
    </MoralisProvider>
    
  ) 
}

export default MyApp
