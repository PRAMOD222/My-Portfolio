import React, {useContext } from 'react'
import Image from "next/image";
import Link from "next/link";
import DarkModeContext from '../components/DarkModeContext';
import { BsFillSunFill, BsFillMoonStarsFill} from 'react-icons/bs';

const Navbar = () => {
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    const handleDarkModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
      };

    return (
        <div className={`my-component ${isDarkMode ? "dark" : ""} sticky top-0 z-50`}>
            <div className=' bg-zinc-950  dark:bg-white'>
                <header className="text-orange-400 body-font dark:text-black">
                    <div className="container mx-auto flex justify-between p-3 flex-col md:flex-row items-center">
                        <Link href={'/'} className="flex title-font font-medium items-center  md:mb-0">
                            <Image src="https://pramod222.github.io/My-Portfolio/logo.png" alt="Picture of the author" width={180} height={10} />
                        </Link>
                        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                            <Link href={'/'} className="mr-5 hover:text-orange-600 font-semibold">Home</Link>
                            <Link href={'/about'} className="mr-5 hover:text-orange-600 font-semibold">About</Link>
                            <Link href={'/portfolio'} className="mr-5 hover:text-orange-600 font-semibold">Portfolio</Link>
                            <Link href={'/contact'} className="mr-5 hover:text-orange-600 font-semibold">Contacts</Link>
                        </nav>
                        <button className='font-semibold hover:text-orange-600' onClick={handleDarkModeToggle}>
                            {isDarkMode ? <BsFillMoonStarsFill className="text-lg"/> : <BsFillSunFill className="text-lg"/>}
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Navbar
