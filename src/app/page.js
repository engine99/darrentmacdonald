import Image from 'next/image'
import SuPreviewPic from '../../public/su_preview.png';

function BusiCard({title, description, imgsrc, href, github}) {
  return (
    <a className="
      group 
      bg-gray-100
      rounded-lg 
      border 
      border-gray-300 
      p-0.5
      m-8
      h-32
      flex
      overflow:hidden
      transition-colors
      "
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
        <p>
          <a href={github} alt="github link">
            {github}
          </a>
        </p>
      </div>
      <div className="
        w-40
        overflow-hidden
        ">
        <Image className="
          block
          w-auto
          group-hover:scale-110
          rounded-md
          "
          style=""
          src={imgsrc}
          alt={description}
          />
      </div>
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
          leading-loose
          mt-24
        "
        style={{"fontFamily":"Rokkitt, Sans"}}>
          Darren T. MacDonald
        </h1>
        <p>Web - Cloud - 3D</p>
      </div>
      <div className="my-32       
                      text-center">

        <BusiCard
          title="Sudoku"
          href="https://www.darrentmacdonald.com/sudoku"
          description="Handy mobile-friendly Sudoku puzzle-solver"
          imgsrc={SuPreviewPic}
          github="https://github.com/engine99/sudokusolver"
        />

      </div>
    </main>
  )
}
