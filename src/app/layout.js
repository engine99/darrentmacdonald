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
      <body className='
      px-8
      {inter.className}
      '>
        <div className='
        paperPage
        mx-auto
        max-width:800px'>
          {children}
        </div>
          
      </body>
    </html>
  )
}
