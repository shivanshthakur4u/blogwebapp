import Newsletter from "../components/_child/nwesletter"
import Link from "next/link";
import { ImFacebook,ImYoutube,ImTwitter} from "react-icons/im";
const footer = () => {
  const date=new Date().getFullYear()
  const bg={
    background:"url('/images/bgimage2.png') no-repeat",
    backgroundPosition:"bottom left",
   
  }
  return (
    <footer className="bg-gray-50" style={bg} >
    <Newsletter/>
     <div className="container mx-auto flex justify-center py-12">
      <div className="py-8">
        <div className="flex gap-6 justify-center">
        <Link legacyBehavior href={"#"}><a><ImFacebook color="#888888"/></a></Link>
          <Link legacyBehavior href={"#"}><a><ImYoutube color="#888888"/></a></Link>
          <Link legacyBehavior href={"#"}><a><ImTwitter color="#888888"/></a></Link>
        </div>
        <p className="py-5 text-gray-400">{`Copyright @${date} All right reserved`}</p>
        <p className="text-gray-400 text-center">Terms & Condition</p>
      </div>
     </div>
    </footer>
  )
}

export default footer