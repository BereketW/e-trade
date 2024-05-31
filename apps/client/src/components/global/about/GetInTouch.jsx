import Image from "next/image";
import about02 from "../../public/img/about-02.png"
import about03 from "../../public/img/about-03.png"


const GetInTouch = ({reverse})=>{
   return(
    <main  className="px-20 py-20">
        <div
          className={`flex  ${reverse ? 'flex-col md:flex-row lg:flex-row' : 'flex-col md:flex-row  lg:flex-row'} `}
        style={{
            display:'flex',
           flexDirection: reverse ?  'flex flex-col' : 'row-reverse flex-col',
           gap:40
        }}
      
        > 
            <div>
                <Image className="size-[24rem] rounded-lg object-cover" 
                 src={reverse ? about02 : about03}
            />
            </div>

            <div className="flex flex-col items-start justify-center">
                <p className="text-gray-500">Features #01</p>
                <h1 className="py-4 text-5xl font-semibold">Solutions that work together</h1>
                <p className="max-w-[40rem] text-gray-500">Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.</p>

                <button className="border font-semibold py-4 px-10 mt-10 hover:bg-blue-700 hover:text-white rounded-md hover:duration-150">Get In Touch</button>
            </div>
        
        </div>
    </main>
   )
}
export default GetInTouch;