import Image from 'next/image'
import SuPreviewPic from '../../public/su_preview.png';
import { Rokkitt } from 'next/font/google';


const rokkitt = Rokkitt({
  subsets: ['latin'],
  variable: '--font-rokkitt',
})

function BusiCard({title, description, imgsrc, live, github}) {
  return (
    <div className="
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
      >
      
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
        <p>
          <a href={live}
            target="_blank"
            rel="noopener noreferrer"
            alt="Serverless Deployment">
            Serverless Deployment
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
    </div>
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
        <h1 className={`
          ${rokkitt.variable}
          font-serif
          text-5xl
          leading-loose
          mt-24
        `}
        >
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
