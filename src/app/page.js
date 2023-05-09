import Image from 'next/image'
import BackgroundPicSm from '../../public/7692sm.png';
import SuPreviewPic from '../../public/su_preview.png';
import ArtRossPreviewPic from '../../public/artross_preview.png';
import GithubLogo from '../../public/GitHub_Logo.png'
import LILogo from '../../public/LI-Logo.png'
import GorillasPreview from '../../public/gorillas_preview.png'
import PmPreview from '../../public/pm_preview.png'
import { Vollkorn } from 'next/font/google';
import { Fragment } from 'react';

const vollkorn = Vollkorn({
  subsets: ['latin'],
  variable: '--font-domine',
})

function UlList({className, title, list}) {
  return Array.isArray(list) && list.length > 0 ? (
    <ul className={`
      ${className}
      text-base
      text-gray-700
      list-inside
      `}>
        <span className='
          text-sm
          font-semibold'>
          {title}:
        </span>
      {
        list.map((t, i)=>{
          return (
            <li className='
              list-image-none
              '
              key={i}
            >
              <span className='
                inline-block
                -rotate-90
                origin-[40%_45%]
                '>
               г</span>
               <Fragment>
                &nbsp;
                </Fragment>
                <span>
                  {t}
                </span>
            </li>
          )
        })
      }
    </ul>
  ) : ( '' )

}

function BusiCard({title, description, imgsrc, live, github, buildWith, features}) {
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
      text-left
      "
      >
      <div          /* Card text */
        className="
          flex-grow
          flex
          flex-col
          px-2    md:px-4   lg:px-8
          py-4
          w-2/3
          ">
        <div          /* Card text top row */
          className='
            flex 
            flex-row
            items-start'>
          <a href={live} 
            className='
            '>
            <h2 className={`
              text-xl   md:text-2xl lg:text-3xl
              text-left
              font-semibold
              text-gray-800
              `}>
              {title + ' '}
            </h2>
          </a>
          <div className='flex-grow'></div>
          <a href={github}
            className='
              text-white
              bg-gray-600
              border-gray-300
              border-1
              shadow-md
              rounded-md
              px-3'
            alt="Source control repo">
              {github && github.length > 0 ? 'src\\' : ' '}
          </a>
        </div>
        <div           /* Card main text */
          className={`
            m-2 
            text-lg 
            text-gray-700
            text-left`}>
          {description}
        </div>
        <div        /* Card bottom */
          className="
            leading-loose
            flex-grow
            flex
            flex-row
            flex-wrap
            mt-3
            ">
          <UlList className="
            basis-1/2"
            title="Why it's great"
            list={features}
            />
          <UlList className="
            basis-1/2"
            title='Built with'
            list={buildWith}
            />
      </div>
    </div>
      <a          /* Card Image */
        className="
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
          title="Photomodeling.ca"
          live="https://photomodeling.ca"
          description="Digital services website"
          features={["Responsive","Serverless"]}
          buildWith={['HubSpot', 'Foundation']}
          imgsrc={PmPreview}
        />

        <BusiCard
          title="Gorillas.bas Online"
          live="https://gorillas.darrentmacdonald.com"
          description="Online emulator for multiplayer DOS game"
          features={["Mobile-friendly","Nostalgic"]}
          buildWith={['DOSBox', 'WebSocket']}
          imgsrc={GorillasPreview}
          github="https://github.com/engine99/gorillas#readme"
        />

        <BusiCard
          title="Sample Portfolio"
          live="#"
          description="This here site."
          features={["Responsive","Serverless"]}
          buildWith={['Next.js', 'Tailwind CSS']}
          imgsrc={BackgroundPicSm}
          github="https://github.com/engine99/darrentmacdonald#readme"
        />

        <BusiCard
          title="Artist Roster"
          live="https://www.darrentmacdonald.com/artross"
          description="Serverless CRUD demo"
          features={["Responsive","Serverless"]}
          buildWith={['React', 'MongoDB']}
          imgsrc={ArtRossPreviewPic}
          github="https://github.com/engine99/serverless-express-react-crud-roster#readme"
        />

        <BusiCard
          title="Sudoku"
          live="https://www.darrentmacdonald.com/sudoku"
          description="Handy mobile-friendly Sudoku puzzle-solver"
          features={["Responsive","Serverless"]}
          buildWith={['Angular', 'Cordova']}
          imgsrc={SuPreviewPic}
          github="https://github.com/engine99/sudokusolver#readme"
        />

      </div>
    </main>
  )
}
