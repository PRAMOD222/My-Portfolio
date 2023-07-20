import React, { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/link'
import DarkModeContext from '../components/DarkModeContext';

import {FaGithubSquare, FaLinkedin, FaInstagramSquare } from 'react-icons/fa';


const Footer = () => {
    const { isDarkMode } = useContext(DarkModeContext);
    return (
        <div className={isDarkMode ? "dark" : ""}>
            <footer className="text-white body-font bg-zinc-900 dark:bg-gray-200">
                <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-6 mt-20">
                        <Link href={'/'} className="flex title-font font-medium items-center  md:mb-0">
                            <Image src="/logo.png" alt="Picture of the author" width={180} height={10} />
                        </Link>
                        
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">SERVICES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Web Devlopment</a>
                                </li>
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Web Design</a>
                                </li>
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Graphics Design</a>
                                </li>
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Logo Design</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-2/4  w-full px-4">
                            <h2 className="title-font font-medium text-orange-500 tracking-widest text-sm mb-3">BLOGS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href='https://pramod222.github.io/GitHub_Blog/' className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">How to use GitHub</a>
                                </li>
                                <li>
                                    <a href='https://pramod222.github.io/React_Blog/index.html' className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Getimg started with React.js</a>
                                </li>
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Everything you should know about a Website</a>
                                </li>
                                <li>
                                    <a className="dark:text-slate-700 text-slate-400  hover:text-orange-600 dark:hover:text-orange-600 cursor-pointer">Basics of VS Code</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-zinc-950 dark:bg-gray-400">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left dark:text-zinc-800">© 2023 Pramod —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="dark:text-slate-700 text-slate-400  ml-1" target="_blank">@PK Developer</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0  justify-center sm:justify-start">
                            <a href={"https://github.com/PRAMOD222"} className="text-gray-500">
                            <FaGithubSquare className="text-gray-300 text-3xl dark:text-gray-800"/>
                            </a>
                            <a href={"https://www.linkedin.com/in/pramod-kesarkar-38b87922a/"} className="ml-3 text-gray-500">
                            <FaLinkedin className="text-gray-300 text-3xl dark:text-gray-800"/>
                            </a>
                            <a href={"https://www.instagram.com/pramod_kesarkar1/"} className="ml-3 text-gray-500">
                            <FaInstagramSquare className="text-gray-300 text-3xl dark:text-gray-800"/>
                            </a>
                            <a className="ml-3 text-gray-500">
                                
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
