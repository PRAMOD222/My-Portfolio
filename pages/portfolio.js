import React from 'react'
import Image from 'next/image'

const portfolio = () => {
  
  const handleOnClick = ()=>{
    console.log("clicked");
  }

  return (
    <div className='bg-zinc-950 text-white'>
      <div className="head">
        <h1 className="text-3xl flex justify-center md:text-6xl lg:text-7xl">MY<span className='text-orange-400 ml-3'> PORTFOLIOS</span></h1>
        <p className='flex justify-center mx-3 text-xs my-3 md:text-2xl lg:text-2xl xl:text-2xl'>A FEW DESIGN AND CODING PROJECTS.FOR MORE? EMAIL ME.</p>
      </div>
      <main className=''>
        
        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p1.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>

        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p1.png" alt="Picture of the author" onClick={handleOnClick} width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>

        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p1.png" alt="Picture of the author" onClick={handleOnClick} width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5  "> <Image className='rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="/p3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>
        
      </main>
    </div>
  )
}

export default portfolio