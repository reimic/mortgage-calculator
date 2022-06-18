import React from 'react'

export default function Header() {
  return (
    <>
    <nav className="fixed w-screen z-50 bg-white border-b-4 border-black">
        <div className="flex container mx-auto">
        <div className="text-center min-w-max bg-black h-32 px-12 pt-10 pb-8">
            <a className="" href="#">
                <span className=" text-white font-bebas text-5xl leading-10 underline uppercase">
                    name
                </span>
            </a>
        </div>    
        <ul className='flex flex-row justify-evenly pt-12 tracking-wider w-full'>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase px-4">
                        your scenarios
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase px-4">
                        calculators
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase px-4">
                        links
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase px-4">
                        knowlegde
                    </span>
                </a>
            </li>
        </ul>
        </div>
    </nav>
    <div className="h-40">

    </div>
    </>
  )
}