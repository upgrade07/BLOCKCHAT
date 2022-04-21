import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
function MyApp({ Component, pageProps }) {
  return(
    <MoralisProvider appId="JmDBgKhJhnj2xK84aGpCZJOcGU5SYJ6GAPNqJtAU"
     serverUrl="https://clitrjrleikz.usemoralis.com:2053/server">
<Component {...pageProps} />
    </MoralisProvider>
    
  ) 
}

export default MyApp
