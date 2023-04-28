import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../navbar/navbar';

const header = () => {
  return (
    
    <header>
        <a href="#" className="logoJet">
          <img href="/" src={'/images/logo_jet.png'} width={125} height={75} />
        </a>
        <div className="headerNavBackground">
        {/* <Navbar />  */}
        
          <div className='topNav'>
              <Navbar /> 
              {/* <Image alt="jet medical logo" src={'/images/logo_jet.png'} width={100} height={50} /> */}
              
              {/* <nav>
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/projects">Products</Link></li>
                  <li><Link href="/about-us">IFUs</Link></li>
                  <li><Link href="/contact-us">Contact</Link></li>
                </ul>
              </nav> */}

          </div>
                      
        </div>
      </header>

  )
}

export default header