import React from 'react'

export default function Header() {
  return (
    <>
    <nav className="flex w-screen fixed z-10 bg-white border-b-4 border-black">
        <div className="text-center min-w-max bg-black h-32 px-12 pt-10 pb-8 mx-16">
            <a className="" href="#">
                <span className=" text-white font-bebas text-5xl leading-10 underline uppercase">
                    name
                </span>
            </a>
        </div>    
        <ul className='flex flex-row justify-evenly w-full mr-16 pt-12 tracking-wider'>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase">
                        your scenarios
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase">
                        calculators
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase">
                        links
                    </span>
                </a>
            </li>
            <li>
                <a className="" href="#">
                    <span className="font-bebas text-2xl uppercase">
                        knowlegde
                    </span>
                </a>
            </li>
        </ul>
    </nav>
    <div className="h-40">

    </div>
    </>
  )
}