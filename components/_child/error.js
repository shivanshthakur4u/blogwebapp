import Image from "next/image"



const error = () => {
  return (
    <div className=" flex flex-col justify-center items-center py-10">
        <h1 className="text-3xl font-bold text-orange-600 py-10">Something Went Wrong</h1>
        <Image src={'https://cdn.pixabay.com/photo/2016/04/24/13/24/error-1349562_960_720.png'} width={400} height={400}/>
    </div>
  )
}

export default error