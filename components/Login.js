
import Image from "next/image"
import { useMoralis } from 'react-moralis';
function Login() {
    const { authenticate}=useMoralis();
    return (
        <div className="bg-black relative text-white">
       
            <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4 ">
              <div className="bg-sky-200 rounded-full">
              {/* <Image
                   src="/log2b.png"
                  
                   width={200}
                   height={200}
               /> */}
              </div>
                            <div class="max-w-sm rounded overflow-hidden shadow-lg">
  
  <div class="px-8 py-16" style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
  <h1 className="text-5xl font-semibold mb-8 mx-2" style={{color:'black', fontWeight:'600'}}>
                   BlockChat
               </h1>
               <button onClick={authenticate} className="border-solid border-black border-2 bg-sky-200 items-center flex  rounded-lg p-4 text-black animate-pulse ">LOGIN  WITH  METAMASK
               <Image
                   src="/metaicon.png"
                  className="item-center"
                  width={35}
                  height={35}
               /></button>
  </div>
 
</div>
            </div>

            <div className="w-full h-screen">
                 <Image
                    src="/bg3.jpg"
                    layout="fill"
                    objectFit="cover"

                 />
            </div>
        </div>
    )
}

export default Login
