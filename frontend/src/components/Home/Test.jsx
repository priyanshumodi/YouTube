import React from 'react'
import Header from '../Header/Header'
import LeftNav from '../LeftNav/LeftNav'
const Test = () => {
  return (
    <div>
        <Header />
        <div className='flex flex-row h-[calc(100%-56px)]'>
            <LeftNav />
            <div className="grow w-[calc(100%-240px)] h-[705px] overflow-y-auto bg-black">
                {/* <div className='flex'>
                    <div className="flex h-[230px] w-[230px] overflow-hidden rounded-full md:ml-4">
                        <img 
                        src='http://res.cloudinary.com/priyanshu7/image/upload/v1720862753/zl04rns9qldmgod53acf.jpg' 
                        alt='profile' 
                        className='object-cover w-full h-full'
                        />
                    </div>
                    <div className='text-white'>
                        Priyanshu Modi
                    </div>
                </div> */}
                <div className="bg-background text-foreground p-4 mt-4">
                    <div className="flex">
                        <div className="flex h-[200px] w-[200px] overflow-hidden rounded-full md:ml-4">
                            <img className="object-cover w-full h-full" src='http://res.cloudinary.com/priyanshu7/image/upload/v1720862753/zl04rns9qldmgod53acf.jpg' alt="Profile Image" />
                        </div>
                        <div className="ml-4 pt-7 flex flex-col gap-1">
                          <h1 className="text-4xl font-bold text-white">priyanshu modi</h1>

                          <p className="text-zinc-400">@priyanshusuryawanshi3302 . 3 subscribers . 9 videos</p>
                          <p className="text-zinc-400">Instagram - suryavanshi212 <span className='text-white'>...more</span></p>

                          <div className="mt-4">
                            <button className="bg-white/[0.15] text-white hover:bg-white/[0.18] px-4 py-2 rounded-3xl font-medium">Customise channel</button>
                            <button className="bg-white/[0.15] text-white hover:bg-white/[0.18] px-4 py-2 rounded-3xl ml-2 font-medium">Manage videos</button>
                          </div>
                        </div>                
                    </div>
                    <nav className="mt-6">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-zinc-300 font-semibold text-lg hover:text-foreground">
                                  Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-300 font-semibold text-lg hover:text-foreground">
                                  Videos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-300 font-semibold text-lg hover:text-foreground">
                                  Shorts
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-300 font-semibold text-lg hover:text-foreground">
                                  Playlists
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-zinc-300 font-semibold text-lg hover:text-foreground">
                                  Community
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className='border-white border-t mt-3'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Test