import './globals.css'

import BackgroundPic from '../../public/7692.jpg';
import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import { Rokkitt } from 'next/font/google';

const nunito = Nunito_Sans({
   weight: ['400', '700'], 
   subsets: ['latin'],
   variable: '--font-nunito',
   })

   

export const metadata = {
  title: 'darrentmacdonald.com',
  description: 'A collection of digital projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className=
        {`
        ${nunito.className}
        font-normal
        h-full
        `}
      >
        <Image
          className='
            fixed
            top-0
            min-w-full
            min-h-full
            max-w-screen-xl
            -z-10
            '
          src={BackgroundPic}
          alt="Beautiful New Brunswick"
        />
        <div className='
          paperPage
          text-gray-900
          bg-transparent
          mx-auto
          mt-4
          w-10/12
          max-w-4xl
          z-10'
        >
          {children}
        </div>
          
      </body>
    </html>
  )
}
