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
      text-gray-700
      list-inside
      `}>
        <span className='
          font-semibold'>
          {title}:
        </span>
      {
        list.map((t, i)=>{
          return (
            <li className='
              list-image-none
              whitespace-nowrap
              '
              key={i}
            >
              <span className='
                inline-block
                -rotate-90
                origin-[40%_45%]
                '>
               г
              </span>
              <span>
                {'\u00A0'+t}
              </span>
            </li>
          )
        })
      }
    </ul>
  ) : ( '' )

}

function SampleCard({title, description, imgsrc, live, github, buildWith, features}) {
  return (
    <div className="
      group 
      bg-gray-100
      rounded-lg 
      border 
      border-gray-300 
      my-8
      p-2
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
              text-xl
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
              px-3
              text-sm'
            alt="Source control repo">
              {github && github.length > 0 ? 'src\u00A0\\' : ' '}
          </a>
        </div>
        <div           /* Card main text */
          className={`
            m-2 
            text-base 
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
            text-sm
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
          rounded-md
          ">
          <Image className="
            group-hover:scale-125
            object-cover
            filter dark:brightness-75
            transition-transform duration-500
            "
            fill="true"
            sizes="271px"
            quality={100}
            src={imgsrc}
            alt={description}
            placeholder='blur'
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
          my-32
          mx-auto
          '
      >  
       
        <div className='
          flex
          flex-row
          flex-wrap
          items-center
        '>
          <a    /* Gmail */ 
            className="
              text-lg
              font-bold
              flex-auto
              text-gray-900
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
              w-auto
              filter dark:invert'
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
              w-auto
              filter dark:invert'
            />
          </a>
        </div>
      </div>
      
      <div /* Cards */
        className="
          my-auto       
          text-center">

        <SampleCard
          title="Photomodeling.ca"
          live="https://photomodeling.ca"
          description="Digital services website"
          features={["Responsive","Serverless"]}
          buildWith={['HubSpot', 'Foundation']}
          imgsrc={PmPreview}
        />

        <SampleCard
          title="Gorillas.bas Online"
          live="https://gorillas.darrentmacdonald.com"
          description="Online emulator for multiplayer DOS game"
          features={["Mobile-friendly", "Nostalgic"]}
          buildWith={['Node', 'DOSBox', 'WebSocket']}
          imgsrc={GorillasPreview}
          github="https://github.com/engine99/gorillas#readme"
        />

        <SampleCard
          title="Sample Portfolio"
          live="#"
          description="This here website"
          features={["Responsive","Serverless","Dark mode"]}
          buildWith={['Next.js', 'Tailwind CSS']}
          imgsrc={BackgroundPicSm}
          github="https://github.com/engine99/darrentmacdonald#readme"
        />

        <SampleCard
          title="Artist Roster"
          live="https://www.darrentmacdonald.com/artross"
          description="Serverless CRUD demo"
          features={["Responsive","Serverless"]}
          buildWith={['React', 'MongoDB','API Gateway']}
          imgsrc={ArtRossPreviewPic}
          github="https://github.com/engine99/serverless-express-react-crud-roster#readme"
        />

        {/* <BusiCard
          title="Sudoku"
          live="https://www.darrentmacdonald.com/sudoku"
          description="Handy mobile-friendly Sudoku puzzle-solver"
          features={["Responsive","Serverless"]}
          buildWith={['Angular', 'Cordova']}
          imgsrc={SuPreviewPic}
          github="https://github.com/engine99/sudokusolver#readme"
        /> */}

      </div>
    </main>
  )
}
