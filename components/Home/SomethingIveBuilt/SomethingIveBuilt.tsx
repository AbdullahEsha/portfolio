import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import ArrowIcon from '../../Icons/ArrowIcon'
import Img from '../../smallComp/image/Img'
import GithubIcon from '../../Icons/GithubIconForSomethingIveBuild'
import ExternalLink from '../../Icons/ExternalLink'

export default function SomethingIveBuilt() {
  const router = useRouter()
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            'flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary'
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {' '}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {' '}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://butterflymatrimonial.com"
                target={'_blank'}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={'/butterfly.jpg'}
                alt={'Project Screen shot'}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={'/butterfly.jpg'}
                  alt={'Project Screen shot'}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://butterflymatrimonial.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Butterfly Matrimonial
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  Butterfly Matrimonial is a{' '}
                  <span className="text-AAsecondary">matrimonial website</span>{' '}
                  that provides a{' '}
                  <span className="text-AAsecondary">platform</span> for the
                  users to find their{' '}
                  <span className="text-AAsecondary">life partner</span> based
                  on their <span className="text-AAsecondary">community</span>{' '}
                  and <span className="text-AAsecondary">profession</span>. The
                  project is built using{' '}
                  <span className="text-AAsecondary">React.js</span> and{' '}
                  <span className="text-AAsecondary">Laravel 9</span> for the
                  backend. It also provides{' '}
                  <span className="text-AAsecondary">Online CV</span> create
                  feature for the users.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">Laravel 9</span>
                <span className="pr-4 z-10">PHP</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">MySQL</span>
                <span className="pr-4 z-10">Online CV</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com" />
                <a
                  href="https://butterflymatrimonial.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <ExternalLink
                    url={'https://butterflymatrimonial.com'}
                    router={router}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a href={'https://swopme.co'} target="_blank" rel="noreferrer">
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={'/swop.jpg'}
                alt={'Project Screen shot'}
                className={`w-full rounded h-full`}
              />
            </div>
          </div>

          {/* right Content */}
          <div className="md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={'/swop.jpg'}
                  alt={'Project Screen shot'}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://swopme.co"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Swop
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  Swop is a <span className="text-AAsecondary">NFC token</span>{' '}
                  that provides a{' '}
                  <span className="text-AAsecondary">digital wallet</span> for
                  users to store their{' '}
                  <span className="text-AAsecondary">NFTs</span> and{' '}
                  <span className="text-AAsecondary">cryptocurrency</span>. The
                  project is built using{' '}
                  <span className="text-AAsecondary">Next.js</span> and{' '}
                  <span className="text-AAsecondary">Express.js</span> for the
                  backend. It also provides{' '}
                  <span className="text-AAsecondary">online payment</span> using
                  Stripe. The project is hosted on{' '}
                  <span className="text-AAsecondary">DigitalOcean</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-start"
              >
                <span className="pr-4 z-10">NFC Token</span>
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">Express.js</span>
                <span className="pr-4 z-10">JavaScript</span>
                <span className="pr-4 z-10">Redux</span>
                <span className="pr-4 z-10">DigitalOcean</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com" />
                <a href="https://swopme.co" target={'_blank'} rel="noreferrer">
                  <ExternalLink url={''} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  3*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <Link href={'https://www.bayshorecommunication.com'}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link>

              <Img
                src={'/bayshore.jpg'}
                alt={'Project Screen shot'}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={'/bayshore.jpg'}
                  alt={'Project Screen shot'}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={'https://www.bayshorecommunication.com'}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Bayshore Communication
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project aim to help the{' '}
                  <span className="text-AAsecondary">business</span> to grow
                  their{' '}
                  <span className="text-AAsecondary">online presence</span> and{' '}
                  <span className="text-AAsecondary">customer base</span>. The
                  project is built using{' '}
                  <span className="text-AAsecondary">Next.js</span> and{' '}
                  <span className="text-AAsecondary">Tailwind CSS</span>. It
                  also provides{' '}
                  <span className="text-AAsecondary">online payment</span> using{' '}
                  <span className="text-AAsecondary">Stripe</span>.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Tailwind CSS</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Vercel</span>
                <span className="pr-4 z-10">Stripe</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com" />
                <ExternalLink
                  url={'https://www.bayshorecommunication.com'}
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 4 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <Link href={'https://www.halalkababncurry.com'}>
                <div className="absolute w-full h-full rounded bg-AAsecondary transition-opacity opacity-10 hover:opacity-0 hover:cursor-pointer duration-300" />
              </Link>
              <Img
                src={'/halal-kabab.jpg'}
                alt={'Project Screen shot'}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={'/halal-kabab.jpg'}
                  alt={'Project Screen shot'}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <Link href={'https://www.halalkababncurry.com'}>
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Halal Kabab & Curry
                  </span>
                </Link>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left ">
                  {/* write about halal kabab and curry a project for restrurant online using javaScript bootstrap */}
                  This project is a{' '}
                  <span className="text-AAsecondary">restaurant website</span>{' '}
                  that provides a <span className="text-AAsecondary">menu</span>{' '}
                  for the customers to order online. It also provides{' '}
                  <span className="text-AAsecondary">location</span> and{' '}
                  <span className="text-AAsecondary">contact</span> information
                  for the customers. It also provides{' '}
                  <span className="text-AAsecondary">online payment</span> using
                  PayPal. The project is built using{' '}
                  <span className="text-AAsecondary">Next.js</span> and{' '}
                  <span className="text-AAsecondary">Bootstrap</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Google APi</span>
                <span className="pr-4 z-10">PayPal</span>
                <span className="pr-4 z-10">Bootstrap</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">JWT</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com" />
                <ExternalLink
                  url={'https://www.halalkababncurry.com'}
                  router={router}
                />
              </div>
            </div>
          </div>
        </div>

        {/* // ? Project 5 */}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96"
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              <a
                href="https://www.nazaaralifestyle.com"
                target={'_blank'}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <div className="absolute px-2 bg-AAprimary rounded  ml-4 mt-2 ">
                <span className="text-AAsecondary text-xl">
                  In initiation...
                </span>
              </div>

              <Img
                src={'/nazaara.jpg'}
                alt={'Project Screen shot'}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={'/nazaara.jpg'}
                  alt={'Project Screen shot'}
                  className={`w-full h-full `}
                />
              </div>
            </div>
            <div className="absolute w-full   rounded  ml-4 mt-2  text-end pr-8">
              <div className="w-full"></div>
              <span className="text-AAsecondary sm:text-lg bg-AAprimary px-2 py-1 rounded">
                In initiation...
              </span>
            </div>
            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end sm:space-y-3 space-y-1"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://www.nazaaralifestyle.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Nazaara Lifestyle
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  This project is a{' '}
                  <span className="text-AAsecondary">e-commerce</span> platform
                  using <span className="text-AAsecondary">Next.js</span> and{' '}
                  <span className="text-AAsecondary">Express.js</span> for the
                  backend. Some of the features include{' '}
                  <span className="text-AAsecondary">user authentication</span>,
                  a <span className="text-AAsecondary">shopping cart</span>, and{' '}
                  <span className="text-AAsecondary">payment gateway</span>. The
                  project is still in the development phase and will be launched
                  soon.
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">TypeScript</span>
                <span className="pr-4 z-10">Express.js</span>
                <span className="pr-4 z-10">MongoDB</span>
                <span className="pr-4 z-10">SSL Commerz</span>
                <span className="pr-4 z-10">AWS EC2</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5 sm:pt-0 pt-2">
                <GithubIcon link="https://github.com" />
                <a
                  href="https://www.nazaaralifestyle.com"
                  target={'_blank'}
                  rel="noreferrer"
                >
                  <ExternalLink
                    url={'https://www.nazaaralifestyle.com'}
                    router={router}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
