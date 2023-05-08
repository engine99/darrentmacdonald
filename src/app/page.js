import Image from 'next/image'
import BackgroundPic from '../../public/7692.jpg';
import SuPreviewPic from '../../public/su_preview.png';
import ArtRossPreviewPic from '../../public/artross_preview.png';
import GithubLogo from '../../public/GitHub_Logo.png'
import LILogo from '../../public/LI-Logo.png'
import { Rokkitt } from 'next/font/google';

const rokkitt = Rokkitt({
  subsets: ['latin'],
  weight: '700', 
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
      flex
      flex-row
      overflow:hidden
      transition-colors
      "
      >
      
      <div className="
          text-center
          flex-grow
          flex
          flex-col">
        <a href={live} className=''>
          <h2 className={`mb-3 text-2xl font-semibold`}>
            {title + ' '}
          </h2>
        </a>
        <div className={` m-0 text-sm opacity-50`}>
          {description}
        </div>
        <div className="flex-grow"></div>
        <div className=''>
          <a href={github} alt="github link">
          <Image
            src={GithubLogo}
            alt="Github logo"
            className='
              inline
              h-8
              w-auto'
            />
          </a>
          </div>
      </div>
      <a href={live}
        target="_blank"
        rel="noopener noreferrer"
        alt="Serverless Deployment">
        <div className="
          w-40
          h-40
          overflow-clip
          ">
          <Image className="
            block
            min-w-full
            min-h-full
            group-hover:scale-110
            rounded-md
            "
            src={imgsrc}
            alt={description}
            />
        </div>
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <main className="
      text-center
      text-base
      md:text-xl
      lg:text-2xl
    ">
      <div  /* Page Header */
        className='leading-relaxed'>  
        <a href="https://darrentmacdonald.com">
          <h1 className={`
          ${rokkitt.variable}
            font-serif
            font-bold
            text-2xl
            sm:text-4xl
            md:text-5xl
            leading-relaxed
            mt-24
            mx-auto
            `}
            >
            Darren T. MacDonald
          </h1>
        </a>
        
        <div className='
        font-bold'>
          <a href='mailto:darrentmacdonald@gmail.com'>Web</a> - 
          <a href='mailto:darrentmacdonald@gmail.com'> Cloud</a> - 
          <a href='mailto:photomodeling@gmail.com'> 3D</a>
        </div>

        <div className='
          flex
          flex-row
          flex-wrap
          items-center
          m-16'>
          <a  /* Gmail */ 
            className="
              text-lg
              font-bold
              flex-auto
            "
            href='mailto:darrentmacdonald@gmail.com'
            >
              @gmail.com
          </a>
          <a    /* LinkedIn */
            className='
              flex-auto' 
            href="https://www.linkedin.com/in/darren-t-macdonald"
          >
            <Image
            src={LILogo}
            alt="LinkedIn logo"
            className='
              max-w-auto
              inline
              h-5
              w-auto'
            />
          </a>
          <a    /* Github */
            className='
              flex-auto' 
            href="https://github.com/engine99"
          >
            <Image
            src={GithubLogo}
            alt="Github logo"
            className='
              max-w-auto
              inline
              h-7
              w-auto'
            />
          </a>
        </div>

        
      </div>
      
      
      <div /* Cards */
        className="
        my-auto       
        text-center">  

        <BusiCard
          title="Developer profile"
          live="www.hotmail.com"
          description="This site"
          imgsrc={BackgroundPic}
          github="https://github.com/engine99/darrentmacdonald"
        />

        <BusiCard
          title="Artist Roster"
          live="https://www.darrentmacdonald.com/artross"
          description="Serverless CRUD demo"
          imgsrc={ArtRossPreviewPic}
          github="https://github.com/engine99/serverless-express-react-crud-roster"
        />

        <BusiCard
          title="Sudoku"
          live="https://www.darrentmacdonald.com/sudoku"
          description="Handy mobile-friendly Sudoku puzzle-solver"
          imgsrc={SuPreviewPic}
          github="https://github.com/engine99/sudokusolver"
        />

      </div>
    </main>
  )
}
