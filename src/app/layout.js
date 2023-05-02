import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'darrentmacdonald.com',
  description: 'A collection of digital projects',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link as="style" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rokkitt:wght@500;700" />
      </head>
      <body className="
      px-8
      {inter.className}
      ">
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
