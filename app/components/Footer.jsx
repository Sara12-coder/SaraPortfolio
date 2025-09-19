import React from 'react'
import Image from 'next/image';
import {assets,workData} from '@/assets/assets' 

const Footer = () => {
  return (
    <div className='mt-0'>
        <div className='text-center'>
        <Image src={assets.sara1Logo} alt='' className='w-36 mx-auto mb-2'/>
      

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='' className='w-6'/>
            saraammu1209@gmail.com
        </div>
    </div>


    <div className="sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
  <div></div>

<p className="text-center sm:text-left text-base sm:text-lg md:text-xl text-dark-600 flex items-center justify-center sm:justify-start">
  Developed by <span className="ml-1 text-red-500">❤️</span> Sara
</p>
  <ul className="flex items-center gap-10 justify-end ml-auto">
    <li>
      <a target="_blank" href="https://github.com/Sara12-coder/">Github</a>
    </li>
    <li>
      <a target="_blank" href="https://www.linkedin.com/in/sara-kartin-2005k/">LinkedIn</a>
    </li>
    <li>
      <a target="_blank" href="https://www.instagram.com/______sarx/?hl=en">Instagram</a>
    </li>
  </ul>
</div>

    </div>
  )
}

export default Footer
