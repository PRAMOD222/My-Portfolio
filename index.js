import Image from 'next/image'
import Head from "next/head";
import { useState } from 'react';

export default function Home() {

  let rword
  const [word, setword] = useState('');
  let words = ["Developer", "Designer", "Freelancer"];
  setTimeout(() => {
    rword = words[Math.floor(Math.random() * 3)];
    setword(rword)
  }, 3000);

  return (
    <div>
      <Head>
      </Head>
      <main className='bg-zinc-950 h-[89vh]'>
        <section className='main text-white flex  items-center justify-center'>


          <div className='border-2 border-orange-500 m-4'>
            <Image src="/Photo.jpg" alt="Picture of the author" width={280} height={10} />
          </div>

          <div className="intro  m-4 font-bold">
            <h1 className='text-6xl m-2'>PRAMOD <span className='text-orange-400'>KESARKAR</span></h1>
            <h4 className='m-2'>Code your vision into Reality</h4>
            <h4 className='m-2 text-2xl '>Creative <span className='text-orange-400'>{word} </span></h4>
            <div className="btn-cont mt-8">
              <button class="bg-stone-800 border border-orange-400 hover:bg-orange-400 text-white font-bold py-3 px-10 rounded-full m-2">Button</button>
              <button class="bg-orange-400 hover:bg-stone-800 hover:border hover:border-orange-400 text-white font-bold py-3 px-10 rounded-full m-2">Button</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
