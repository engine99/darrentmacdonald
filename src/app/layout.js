import './globals.css'

import BackgroundPic from '../../public/7692.jpg';
import { Inter } from 'next/font/google'
import { Nunito_Sans } from 'next/font/google'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })
const nunito = Nunito_Sans({ weight: '400', subsets: ['latin'] })

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
      {nunito.className}
      >
        <Image
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
          black
          bg-transparent
          mx-auto
          mt-4
          max-w-4xl'>
            {children}
          </div>
          
      </body>
    </html>
  )
}
