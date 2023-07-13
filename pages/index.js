import Image from 'next/image'
import Head from "next/head";
import { useState, useContext } from 'react';
import DarkModeContext from '../components/DarkModeContext';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';
import { BsPersonFill } from 'react-icons/bs';



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
            {/* <h4 className='m-2 text-2xl '>Creative <span className='text-orange-400'>{word} </span></h4> */}
            <div className="text-orange-400 md:flex lg:flex">
              <div className="text-4xl text-white dark:text-black md:pr-2 lg:pr-2" >I am a Creative </div>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Web Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
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
              <button className="bg-stone-800 border border-orange-400 hover:bg-orange-400 text-white dark:hover:text-black font-bold py-3 px-14 rounded-full m-2 dark:text-white"><Link href={'/about'}><BsPersonFill className="inline-block mb-1 mr-2"/>About Me</Link></button>
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
    </div>
  )
}
