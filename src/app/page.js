import Image from 'next/image'
import SuPreviewPic from '../../public/su_preview.png';

function BusiCard({title, description, imgsrc, href}) {
  return (
    <a className="
        group 
        rounded-lg 
        border 
        border-transparent 
        px-0
        transition-colors
        flex
        m-8
        h-32
        bg-gray-400
        hover:border-gray-300 
        hover:bg-gray-100 
        hover:dark:border-neutral-700 
        hover:dark:bg-neutral-800/30"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      
      <div className="
          text-center
          flex-1">
        <h2 className={`mb-3 text-2xl font-semibold`}>
          {title + ' '}
        </h2>
        <p className={`m-0 text-sm opacity-50`}>
          {description}
        </p>
      </div>
      <Image className="
      block
      w-auto

      "
        src={imgsrc}
        alt={description}
      />
    </a>
  )
}

export default function Home() {
  return (
    <main className="
      min-h-screen
      text-center
      p-px
    ">
      <div>
        <h1 className="
          font-serif
          text-5xl
          mt-8
        ">
          Darren T. MacDonald
        </h1>
      </div>
      <div className="mb-32       
                      text-center">

        <BusiCard
          title="Sudoku"
          href="https://www.darrentmacdonald.com/sudoku"
          description="Handy mobile-friendly Sudoku puzzle-solver"
          imgsrc={SuPreviewPic}
        />

      </div>
    </main>
  )
}
