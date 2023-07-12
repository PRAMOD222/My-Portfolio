import React, {useState, useEffect } from 'react'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`my-component ${isDarkMode ? "dark" : ""}`}>
        <div className='sticky bg-zinc-950 shadow-md shadow-slate-950 dark:bg-white'>
            <header className="text-orange-400 body-font dark:text-black">
                <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                    <Link href={'/'} className="flex title-font font-medium items-center  md:mb-0">
                        <Image src="/logo.png" alt="Picture of the author" width={180} height={10} />
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/about'} className="mr-5 hover:text-orange-600 font-semibold">About</Link>
                        <Link href={'/portfolio'} className="mr-5 hover:text-orange-600 font-semibold">Portfolio</Link>
                        <Link href={'/contact'} className="mr-5 hover:text-orange-600 font-semibold">Contacts</Link>
                        <Link href={'/projects'} className="mr-5 hover:text-orange-600 font-semibold">Projects</Link>
                    </nav>
                    <button className='font-semibold hover:text-orange-600' onClick={()=>{setIsDarkMode(!isDarkMode)}}>
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </header>
        </div>
        </div>
    )
}

export default Navbar
