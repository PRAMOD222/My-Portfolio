import React from 'react'
import ProgressBar from '../components/ProgressBar';

const about = () => {
    return (
        <div className='bg-zinc-950 text-white'>
            <div className="border border-black">
                <div className="">
                    <h1 className="flex justify-center text-2xl mt-3 md:text-4xl">PRAMOD <span className="text-orange-400 ml-3"> KESARKAR</span></h1>
                    <h6 className="flex justify-center mt-4 text-xs md:text-xl"><span className="text-orange-400 mr-1">---</span> I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I
                        DO <span className="text-orange-400 ml-1">---</span></h6>
                </div>
                <div className="flex flex-col text-sm border-t-2 border-b-2 border-orange-400 mt-4 border-dashed md:flex md:flex-row md:justify-center md:text-base md:mx-12">
                    <div className='flex ml-4 md:px-10 md:text-xl'>
                        <div className="m-1 p-2 text-orange-400">
                            <div className="text-sm my-4">First Name</div>
                            <div className="text-sm my-4">Last Name</div>
                            <div className="text-sm my-4">Birthdate</div>
                            <div className="text-sm my-4">Nationality</div>
                            <div className="text-sm my-4">Address</div>
                        </div>
                        <div className='mt-1 p-2'>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                        </div>
                        <div className='mt-1 p-2'>
                            <div className="font-semibold mx-2 text-sm my-4">Pramod</div>
                            <div className="font-semibold mx-2 text-sm my-4">Kesarkar</div>
                            <div className="font-semibold mx-2 text-sm my-4">18-09-1999</div>
                            <div className="font-semibold mx-2 text-sm my-4">Indian</div>
                            <div className="font-semibold mx-2 text-sm my-4">Shippur</div>
                        </div>
                    </div>
                    <div className="flex ml-4 md:text-xl">
                        <div className="m-1 p-2 text-orange-400">
                            <div className="text-sm my-4">Langages</div>
                            <div className="text-sm my-4">Phone</div>
                            <div className="text-sm my-4">Alt No</div>
                            <div className="text-sm my-4">Email</div>
                            <div className="text-sm my-4">Alt Mail</div>
                        </div>
                        <div className='mt-1 p-2'>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                            <div className="font-semibold mx-2 text-sm my-4">:</div>
                        </div>
                        <div className='mt-1 p-2'>
                            <div className="font-semibold ml-2 text-sm my-4">English</div>
                            <div className="font-semibold ml-2 text-sm my-4">7219294594</div>
                            <div className="font-semibold ml-2 text-sm my-4">8208354383</div>
                            <div className="font-semibold ml-2 text-sm my-4">pramodkesarakar@gmail.com</div>
                            <div className="font-semibold ml-2 text-sm my-4">pkesarkar2222@gmail.com</div>
                        </div>
                    </div>
                </div>

                <div className="sm:flex sm:flex-col flex flex-col md:flex md:flex-row lg:flex lg:flex-row justify-center mt-2">
                    <div className="ml-2 md:w-1/2 md:mx-12 lg:w-1/2 lg:mx-12">
                        <h1 className='text-2xl text-orange-400 mx-3'>Education</h1>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h6 className="date">2020 - 2023</h6>
                            <h2 className="text-xl text-orange-400">B TECH DEGREE</h2>
                            <p className="spe"><span className="fname">Specialization - </span> Electronics and Telecommunication</p>
                            <p className="clg"><span className="fname">College - </span> Sant Gajanan Maharaj Collage of Engg</p>
                            <div><br /></div>
                        </div>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h6 className="date">2017 - 2019</h6>
                            <h2 className="text-xl text-orange-400">DIPLOMA</h2>
                            <p className="spe"><span className="fname">Specialization - </span> Electronics and Telecommunication</p>
                            <p className="clg"><span className="fname">College - </span> Sant Gajanan Maharaj Rural polytecnic</p>
                            <div><br /></div>
                        </div>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h6 className="date">2015 - 2017</h6>
                            <h2 className="text-xl text-orange-400">12th MCVC</h2>
                            <p className="spe"><span className="fname">Specialization - </span> Electronics and Telecommunication</p>
                            <p className="clg"><span className="fname">College - </span>Sadhana Junior College gadhinglaj</p>
                            <div><br /></div>
                        </div>
                    </div>

                    <div className="ml-2 md:w-1/2 md:mx-12 lg:w-1/2 lg:mx-12">
                        <h1 className='text-2xl text-orange-400 mx-3'>Projects</h1>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h2 className="text-xl text-orange-400">BusKaro Bus location tracking system</h2>
                            <h6 className="date">06 - 2023</h6>
                            <p className=""><span className="fname">Description - </span> It is a Web app Made with Next.js And used for bus location tracking, ticket booking, Timetable this uses a raspbery pi as a location divice with a neo 6 gps module </p>
                        </div>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h2 className="text-xl text-orange-400">News app</h2>
                            <h6 className="date">04 - 2023</h6>
                            <p className=""><span className="fname">Description - </span> It is a Web app Made with React.js And used for Reading news and latest headlines it has diferant sections for sports, Technology, Helth, and etc </p>
                        </div>
                        <div className="border-b-2 border-orange-500 mx-3 my-2">
                            <h2 className="text-xl text-orange-400">BusKaro Bus location tracking system</h2>
                            <h6 className="date">06 - 2023</h6>
                            <p className=""><span className="fname">Description - </span> It is a Web app Made with Next.js And used for bus location tracking, ticket booking, Timetable this uses a raspbery pi as a location divice with a neo 6 gps module </p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center align-middle mt-2 mb-4">
                    <h2 className="text-3xl text-orange-500">SKILLS</h2>
                </div>
                <div className="md:mx-12 lg:mx-12 mx-4">
                    <div className="md:flex lg:flex xl:flex">
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>HTML</p>
                            <ProgressBar prog={90} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>CSS</p>
                            <ProgressBar prog={80} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>JavaScript</p>
                            <ProgressBar prog={85} />
                        </div>
                    </div>
                    <div className="md:flex lg:flex xl:flex">
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>React</p>
                            <ProgressBar prog={80} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>Anguler</p>
                            <ProgressBar prog={70} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>Next.js</p>
                            <ProgressBar prog={80} />
                        </div>
                    </div>
                    <div className="md:flex lg:flex xl:flex">
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>Node.js</p>
                            <ProgressBar prog={70} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>Express.js</p>
                            <ProgressBar prog={70} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>TypeScript</p>
                            <ProgressBar prog={60} />
                        </div>
                    </div>
                    <div className="md:flex lg:flex xl:flex">
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>MongoDB</p>
                            <ProgressBar prog={80} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>SQL</p>
                            <ProgressBar prog={60} />
                        </div>
                        <div className="md:w-1/3 lg:w-1/3 md:mx-3 md:my-5 lg:mx-3 lg:my-5 mx-2 my-4">
                            <p className='m-2'>GitHub</p>
                            <ProgressBar prog={80} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default about
