import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footer = () => {
  return (
    <>
        <footer> 
          <div className="footer-item-list">


            <div>
                <nav>
                  <ul>
                    <span><Link href="/">DIALYSIS</Link></span>
                    <li><Link href="/">Duo-Jet<sup>&reg;</sup></Link></li>
                    <li><Link href="/">Duo-Jet<sup>&reg;</sup> II</Link></li>
                    <li><Link href="/">Dia-Flow</Link></li>
                    <li><Link href="/">Jet Cath</Link></li>
                    <li><Link href="/">Jet Peritoneal</Link></li>
                    <li><Link href="/">Jet-Flow<sup>&reg;</sup></Link></li>
                    <li><Link href="/">Jet-Flow XF</Link></li>
                  </ul>
                  </nav>
            </div>
            <div>
                <nav>
                  <ul>
                    <span><Link href="/">INFUSION</Link></span>
                    <li><Link href="/">Jet-Port</Link></li>
                    <li><Link href="/">Jet-Fuse</Link></li>
                    <li><Link href="/">Jet LT CVC</Link></li>
                    <li><Link href="/">Jet-PICC</Link></li>
                    <li><Link href="/">Jet-PICC CT</Link></li>
                    <li><Link href="/">Jet-Flow<sup>&reg;</sup></Link></li>
                    <li><Link href="/">1.9 &amp; 2.6 Jet-PICC</Link></li>
                  </ul>
                  </nav>
            </div>
            <div>
                <nav>
                  <ul>
                    <span><Link href="/">INTRODUCER</Link></span>
                    <li><Link href="/">Lead Wire Introducer</Link></li>
                    <li><Link href="/">Valved Peelable Introducer</Link></li>
                    <li><Link href="/">Peelable Introducer</Link></li>
                    <li><Link href="/">Introducer Needle</Link></li>
                  </ul>
                  </nav>
            </div>
            <div>
                <nav>
                  <ul>
                    <span><Link href="/">ACCESSORIES</Link></span>
                    <li><Link href="/">Guidewire</Link></li>
                    <li><Link href="/">Repair Kit</Link></li>
                    <li><Link href="/">Tunneling Trocar</Link></li>
                  </ul>
                  </nav>
            </div>                                    
          </div>


          
                <div className="footer-image">
                  <ul>
                    <li>Medical Components, Inc. 1499 Delp Drive | Harleysville, PA 19438 | 215.256.4201 | F: 215.256.1787 </li>
                  </ul>
                  <div>
                     <Image alt="jet medical logo" src={'/images/logo_jet.png'} width={100} height={50} />
                  </div>

                </div>
        </footer>
    </>
  )
}

export default footer



{/* <nav>
<ul>
  <li><Link href="/privacy-policy">Privacy Policy</Link></li>
</ul>
<ul>
  <li><Link href="/careers">Careers</Link></li>
  <li><Link href="/site-map">Site Map</Link></li>
  
</ul>
</nav>
<ul>
<li>Medical Components, Inc. 1499 Delp Drive</li>
<li>|</li>
<li>Harleysville, PA 19438 </li>
<li>|</li>
<li>215.256.4201</li>
<li>|</li>
<li> F: 215.256.1787 </li>
</ul> */}