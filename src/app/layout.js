import './globals.css'

import BackgroundPic from '../../public/7692.jpg';
import { Inter } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'darrentmacdonald.com',
  description: 'A collection of digital projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="
      {inter.className}
      ">
        <Image
          className='hidden md:block '
          src={BackgroundPic}
          alt="Beautiful New Brunswick"
          style={{
            "zIndex": "-10",
            top: 0,
            position: "fixed",
            width: "100%"
          }}
        />

          <div className='
          paperPage
          bg-gray-50
          mx-auto
          mt-4
          max-w-4xl
          drop-shadow-xl'>
            {children}
          </div>
          
      </body>
    </html>
  )
}
