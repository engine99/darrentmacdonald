import Image from 'next/image'
import BackgroundPicSm from '../../public/7692sm.png';
import SuPreviewPic from '../../public/su_preview.png';
import ArtRossPreviewPic from '../../public/artross_preview.png';
import GithubLogo from '../../public/GitHub_Logo.png'
import GithubMark from '../../public/github-mark.png'
import LILogo from '../../public/LI-Logo.png'
import { Rokkitt } from 'next/font/google';
import { Vollkorn } from 'next/font/google';

const rokkitt = Rokkitt({
  subsets: ['latin'],
  variable: '--font-rokkitt',
})

const vollkorn = Vollkorn({
  subsets: ['latin'],
  variable: '--font-domine',
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
      my-8
      flex
      flex-row
      overflow:hidden
      transition-colors
      "
      >
      
      <div className="
          flex-grow
          flex
          flex-col
          px-8
          py-4
          w-2/3
          ">
        <div className='
          flex 
          flex-row
          items-start'>
          <a href={live} 
            className='
            '>
            <h2 className={`
              mb-3 
              text-3xl
              text-left
              font-semibold
              text-gray-800
              `}>
              {title + ' '}
            </h2>
          </a>
          <div className='flex-grow'></div>
          <a href={github}
            className=''
            alt="github link">
            <Image
              src={GithubMark}
              alt="Github mark"
              className='
                h-6
                w-auto'
            />
          </a>
        </div>
        <div className={`
          m-0 
          text-base 
          text-gray-700
          text-left`}>
          {description}
        </div>
        <div className="flex-grow"></div>
      </div>
      <a className="
        w-1/3"
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        alt="Serverless Deployment">
        <div className="
          overflow-hidden
          relative
          h-full
          ">
          <Image className="
            group-hover:scale-110
            rounded-md
            object-cover
            "
            fill="true"
            sizes="271px"
            quality={100}
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
    ">
      <div  /* Page Header */
        className='
          mt-36
          mx-auto
          '
        >  
        <a  className={`
          ${vollkorn.className}
            font-bold
            leading-relaxed
            text-2xl    sm:text-3xl   md:text-4xl  lg:text-5xl
            `} 
          href="https://darrentmacdonald.com">
          <h1 className='leading-loose'
            >
            Darren T. MacDonald
          </h1>
        </a>
        
        <div className='
        font-bold
        leading-relaxed
        text-base   sm:text-xl  md:text-2xl  lg:text-3xl
        '>
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
          <a    /* Gmail */ 
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
          imgsrc={BackgroundPicSm}
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
