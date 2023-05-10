import './globals.css'

import BackgroundPic from '../../public/7692.jpg';
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'
import { Providers } from './providers';

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
        <Providers>   {/* Provides a dark theme */}
          <Image
            className='
              fixed
              top-0
              min-w-full
              min-h-full
              max-w-screen-xl
              -z-10
              filter 
                dark:grayscale 
                dark:invert
                dark:brightness-125
              '
            src={BackgroundPic}
            alt="Beautiful New Brunswick"
            height={1500}
          />
          <div className='
            paperPage
            text-gray-800
            bg-transparent
            mx-auto
            mt-4
            w-10/12
            max-w-4xl
            z-10'
          >
            {children}
          </div>
          
        </Providers>  
      </body>
    </html>
  )
}
