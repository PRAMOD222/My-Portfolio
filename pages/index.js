import Image from 'next/image'
import Head from "next/head";
import { useContext } from 'react';
import DarkModeContext from '../components/DarkModeContext';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { BsPersonFill } from 'react-icons/bs';
import { BiCodeBlock } from 'react-icons/bi';
import { MdOutlineWeb, MdOutlineGraphicEq } from 'react-icons/md';
import styles from '../styles/home.module.css'



export default function Home() {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Head>
      </Head>
      <main className='bg-zinc-950 md:h-[89vh] dark:bg-white dark:text-black'>
        <section className='main text-white dark:text-black flex flex-col md:flex md:flex-row lg:flex lg:flex-row items-center justify-center '>


          <div className='border-2 border-orange-500 m-4'>
            <Image src="/Photo.jpg" alt="Picture of the author" width={280} height={10} />
          </div>

          <div className="intro  m-4 font-bold">
            <h1 className='text-6xl m-2'>PRAMOD <span className='text-orange-400'>KESARKAR</span></h1>
            <h4 className='m-2'>Code your vision into Reality</h4>
            <div className="text-orange-400 md:flex lg:flex">
              <div className="text-4xl text-white dark:text-black md:pr-2 lg:pr-2 mx-2" > I am a Creative </div>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  1000,
                  'Designer',
                  1000,
                  'Freelancer',
                  1000,
                  'Editor',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </div>
            <div className="flex flex-col btn-cont mt-8 md:flex-row lg:flex-row">
              <button className="bg-stone-800 border border-orange-400 hover:bg-orange-400 text-white dark:hover:text-black font-bold py-3 px-14 rounded-full m-2 dark:text-white"><Link href={'/about'}><BsPersonFill className="inline-block mb-1 mr-2" />About Me</Link></button>
              {/* <button className="bg-orange-400 border border-orange-400 hover:bg-stone-800 hover:border hover:border-orange-400 dark:hover:text-white  text-white dark:text-black font-bold py-3 px-10 rounded-full m-2">Download MY CV</button> */}
              <a
                href="/Pramod_Kesarkar.pdf" // Replace with the actual filename of your CV file
                download
                className="bg-orange-400 border border-orange-400 hover:bg-stone-800 hover:border hover:border-orange-400 dark:hover:text-white text-white dark:text-black font-bold py-3 px-10 rounded-full m-2 flex justify-center "
              >
                Download My CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <section className='dark:bg-white bg-zinc-900 text-white dark:text-black text-center py-10'>
        <h2 className='text-4xl font-bold drop-shadow-lg shadow-white'><span className={styles.head}>WHAT I DO</span></h2>


        <div className='grid md:grid-cols-3 md:grid-rows-1 '>


          <div className="dark:hover:text-white dark:text-black hover:border-white dark:hover:border-gray-500 dark:border-gray-200 text-black hover:z-10 border border-white m-10 p-10 relative overflow-hidden hover:text-white before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-orange-500 before:opacity-0 before:-z-10  hover:before:top-0 hover:before:opacity-100 before:transition-all before:duration-500 bg-zinc-300 shadow-lg dark:shadow-orange-600 shadow-slate-300 dark:bg-slate-100">
            <span className="flex align-middle justify-center">
              <BiCodeBlock className="text-6xl" />
            </span> 
            <h2 className="text-xl font-bold">Web Development</h2>
            <p>
              I specialize in creating responsive and user-friendly websites using
              the latest technologies and best practices. From front-end to back-end,
              I ensure a seamless online experience.
            </p>
          </div>

          <div className="dark:hover:text-white dark:text-black hover:border-white dark:hover:border-gray-500 dark:border-gray-200 text-black hover:z-10 border border-white m-10 p-10 relative overflow-hidden hover:text-white before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-orange-500 before:opacity-0 before:-z-10  hover:before:top-0 hover:before:opacity-100 before:transition-all before:duration-500 bg-zinc-300 shadow-lg dark:shadow-orange-600 shadow-slate-300 dark:bg-slate-100">
            
            <span className='flex  align-middle justify-center'><MdOutlineWeb className='text-6xl' /></span>
            <h2 className='text-xl font-bold'>Web Design</h2>
            <p>I design visually appealing and modern website layouts that reflect your brand identity. Using clean aesthetics and thoughtful UX/UI design, I create websites that leave a lasting impression.</p>
          </div>

          <div className="dark:hover:text-white dark:text-black hover:border-white dark:hover:border-gray-500 dark:border-gray-200 text-black hover:z-10 border border-white m-10 p-10 relative overflow-hidden hover:text-white before:absolute before:top-[-100%] before:left-0 before:w-full before:h-full before:bg-orange-500 before:opacity-0 before:-z-10  hover:before:top-0 hover:before:opacity-100 before:transition-all before:duration-500 bg-zinc-300 shadow-lg dark:shadow-orange-600 shadow-slate-300 dark:bg-slate-100">
            
            <span className='flex  align-middle justify-center'><MdOutlineGraphicEq className='text-6xl' /></span>
            <h2 className='text-xl font-bold'>Graphics</h2>
            <p>Whether its logos, banners, or illustrations, I craft captivating graphic designs that convey your message effectively. I focus on combining creativity with strategic visuals.</p>
          </div>



        </div>
      </section>
    </div>
  )
}
