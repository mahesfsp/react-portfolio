
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
export default function Header() {

    const [toggleMenu,setToggleMenu] = useState(false);
    return (
        <header className="flex justify-between px-5 py-2 bg-primary">
          <a className="font-bold text-white" href="#">Maheswari Marimuthu</a>
          <nav className="hidden md:block">
          <ul className="flex text-white">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/projects">Projects</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
          </nav>

         {toggleMenu && <nav className="block md:hidden">
          <ul className="flex flex-col text-white mobile-nav">
                <li className="nav-item"><a href="/">Home</a></li>
                <li className="nav-item"><a href="/about">About</a></li>
                <li className="nav-item"><a href="/projects">Projects</a></li>
                <li className="nav-item"><a href="/contact">Contact</a></li>
            </ul>
          </nav>}

          <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'>
           <Bars3Icon className='text-white h-5'></Bars3Icon>
           
          </button>
          
        </header>
    );
}
