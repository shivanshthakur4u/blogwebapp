import React from 'react'
import { ImFacebook,ImYoutube,ImTwitter} from "react-icons/im";
const header = () => {
  return (
    <header className='bg-gray-50'>
       <div className='xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between'>
        <div className='md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0'>
           <input type='text' className='input-text' placeholder='Search...'/>
        </div>
        <div className='shrink w-80 sm:order-2'>
          <a>Design</a>

        </div>

        <div className='w-96 order-3 flex justify-center'>
        <div className='flex gap-6'>
            <a><ImFacebook/></a>
            <a><ImYoutube/></a>
            <a><ImTwitter/></a>
        </div>

        </div>
       </div>
    </header>
  )
}

export default header