import Link from 'next/link'
import { useState,  useContext } from 'react';
import Image from "next/image";
import DarkModeContext from '../components/DarkModeContext';


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

    const handleDarkModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
      };
    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-500 body-font mt-2 ml-2 ">
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path
                            fillRule="evenodd"
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                    ) : (
                        <path
                            fillRule="evenodd"
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                    )}
                </svg>
            </button>
            <aside className={`bg-gray-800 ${isOpen ? "block" : "hidden"} md:block fixed z-40 top-0 left-0 h-screen w-72`}>
                <div className="px-4 py-2">
                    <button onClick={() => setIsOpen(false)} className="float-right text-orange-500 body-font">
                        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                            />
                        </svg>
                    </button>
                    <Link onClick={() => setIsOpen(false)} href={'/'} className="flex title-font font-medium items-center  md:mb-0">
                        <Image src="pramod222.github.io/My-Portfolio/logo.png" alt="Picture of the author" width={180} height={10} />
                    </Link>
                    <nav className="flex flex-col text-orange-400 body-font">
                        <Link onClick={() => setIsOpen(false)} href={'/about'} className="mr-5 font-semibold px-4 py-6 text-2xl">About</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/portfolio'} className="mr-5 font-semibold px-4 py-6  text-2xl">Portfolio</Link>
                        <Link onClick={() => setIsOpen(false)} href={'/contact'} className="mr-5 font-semibold px-4 py-6  text-2xl">Contacts</Link>
                    </nav>
                    <button className='mr-5 font-semibold px-4 py-6  text-2xl text-orange-400 body-font' onClick={handleDarkModeToggle}>
                            {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>
            </aside>
        </>
    )
}
export default Sidebar
