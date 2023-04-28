import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import { MDBIcon } from 'mdb-react-ui-kit';


function navbar() {
    
  // let nav_toggleJet = document.querySelector('.nav_toggleJet');
  // let nav_toggle_iconJet = document.querySelector('.nav_toggleJet .jetIcon ');
  // let nav_menuJet = document.querySelector('.nav_menuJet');

  // nav_toggleJet.addEventListener('click', () => {
  //   nav_menuJet.classList.toggle('active');
  //   nav_toggle_iconJet.setAttribute('name',
  //     nav_menuJet.classList.contains('active') ? 'close-outline' : 'menu-outline'
  //   );
  // })

  return (
   <>
      <div className="containerJet">
        <nav className='navigationJet'>
          <ul className='nav_menuJet'>
            <li className='nav_listJet'>
              
                <Link href="/" legacyBehavior><a href="#" className='nav_linkJet uppercase'>Home</a></Link>
              
            </li>
            <li className='nav_listJet nav_list_menuJet'>
              
                <Link href="/projectsProductPage" legacyBehavior><a href="#" className='nav_linkJet uppercase'>Products <span className='jetIcon'>v</span></a></Link>
                
              
              <div className='dropdownJet'>
                <div className='dropdown-innerJet'>

                  {/* Products section of mega menu */}
                  <div className='dropdown-itemJet'>
                    <div className='item-headingJet'>DIALYSIS</div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Duo-Jet<sup>&reg;</sup></Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Duo-Jet<sup>&reg;</sup>&#20;&#20;II</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Dia-Flow</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      {/* <div className='item-imgJet'>
                        <img src={'/images/icon-4.svg'} alt="Icon" />
                      </div> */}
                      <div className='item-list-infoJet'>
                          <Link href="/">Jet Cath</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                          <Link href="/">Jet Peritoneal</Link>
                      </div>
                    </div>                    

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                        <Link href="/">Jet-Flow<sup>&reg;</sup></Link>
                      </div>
                    </div>                    

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                        <Link href="/">Jet-Flow XF</Link>
                      </div>
                    </div>                    

                  </div>

                  {/* Use Cases section of mega menu */}
                  <div className='dropdown-itemJet'>
                    <div className='item-headingJet'><Link href="/">INFUSION</Link></div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                         <Link href="/">Jet-Port</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Jet-Fuse</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Jet LT CVC</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                        <Link href="/">Jet-PICC</Link>
                      </div>
                    </div>
                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Jet-PICC CT</Link>
                      </div>
                    </div>
                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Jet-Flow<sup>&reg;</sup></Link>
                      </div>
                    </div>
                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">1.9 &amp; 2.6 Jet-PICC</Link>
                      </div>
                    </div>

                  </div>

                  {/* Resources section of mega menu */}
                  <div className='dropdown-itemJet'>
                    <div className='item-headingJet'>INTRODUCER</div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Lead Wire Introducer</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Valved Peelable Introducer</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Peelable Introducer</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Introducer Needle</Link>
                      </div>
                    </div>

                  </div>

                  {/* Company section of mega menu */}
                  <div className='dropdown-itemJet'>
                    <div className='item-headingJet'>ACCESSORIES</div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Guidewire</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Repair Kit</Link>
                      </div>
                    </div>

                    <div className='item-listJet'>
                      <div className='item-list-infoJet'>
                      <Link href="/">Tunneling Trocar</Link>
                      </div>
                    </div>

                  </div>


                </div>
              </div>
            </li>
            <li className='nav_listJet uppercase'>
              <Link href="/patientResources" legacyBehavior><a href="#" className='nav_linkJet'>Patient Resources</a></Link>
            </li>
            <li className='nav_listJet uppercase'>
              <Link href="/contactPage" legacyBehavior><a href="#" className='nav_linkJet'>Contact</a></Link>
            </li>
          </ul>
          {/* <div className='nav_actionJet'>
            <a href="#" className='btnJet'>Log in</a>
            <a href="#" className='btnJet-primary'>Sign up</a>
            <div className='nav_toggleJet'>
              <span className='jetIcon'>x</span>
            </div>
          </div> */}
        </nav>

      </div>
   </>
  )
}

export default navbar