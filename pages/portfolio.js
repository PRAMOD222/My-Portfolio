import React,{useContext} from 'react'
import Image from 'next/image'
import DarkModeContext from '../components/DarkModeContext';

const Portfolio = () => {

  const { isDarkMode } = useContext(DarkModeContext);
  
  const handleOnClick = ()=>{
    console.log("clicked");
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
    <div className='bg-zinc-950 text-white dark:bg-white dark:text-black '>
      <div className="head">
        <h1 className="text-3xl flex justify-center md:text-6xl lg:text-7xl">MY<span className='text-orange-400 ml-3'> PORTFOLIOS</span></h1>
        <p className='flex justify-center mx-3 text-xs my-3 md:text-2xl lg:text-2xl xl:text-2xl'>A FEW DESIGN AND CODING PROJECTS.FOR MORE? EMAIL ME.</p>
      </div>
      <main className=''>
        
        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5 m-2"> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P1.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>

        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P1.png" alt="Picture of the author" onClick={handleOnClick} width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>

        <section className='md:flex md:justify-center'>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P1.png" alt="Picture of the author" onClick={handleOnClick} width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P2.png" alt="Picture of the author" width={380} height={10} /> </div>
          <div className="w-fit md:m-5 m-2 "> <Image className='border-2 border-orange-500 rounded-sm transition ease-in-out delay-40 hover:-translate-y-1 hover:scale-110 duration-300' src="https://pramod222.github.io/My-Portfolio/P3.png" alt="Picture of the author" width={380} height={10} /> </div>
        </section>
        
      </main>
    </div>
    </div>
  )
}

export default Portfolio
