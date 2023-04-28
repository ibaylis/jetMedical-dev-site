import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectsProductTab from './projectsProductTab';
import homeheaderBanner from "../public/images/homeheader_1.jpg";
import TestModals from '../components/TestModals';

import { motion as m } from 'framer-motion';

const AllEvents = ({data}) => {
  const [showModal, setShowModal]  = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const productTab = {
    paddingRight: "15rem",
    marginBottom: "-5rem"
  }

  return (
    <>
      <div className='banner'>
          
        <Image priority src={homeheaderBanner} width={1671} height={302} alt="Header"/>
      </div>
      <div className='mainProductPageNav'>
        <ul>
            <li><Link href="/">DIALYSIS</Link></li>
            <li><Link href="/projects-product-page">INFUSION</Link></li>
            <li><Link href="">INTRODUCER</Link></li>
            <li><Link href="">ACCESSORIES</Link></li>
                    
        </ul>
      </div>      
      <div className='subProductPageNav'>
        <ul>
            <li><Link href="/">JET-FUSE</Link></li>
            <li><Link href="">JET-PORT</Link></li>
            <li><Link href="">JET-PICC</Link></li>
            <li><Link href="">JET-PICC CT</Link></li>
            <li><Link href="">1.9 & 2.6 JET-PICC</Link></li>
                    
        </ul>
      </div>            
      <div className="products_page">
          <div className='productContentArea'>
            <span className='contentCopy'>
                  The <strong>Jet LT CVC Central Venous Catheter</strong> is indicated for Long Term central venous access in adults
                  and children. It can be used for total parenteral nutrition (T.P.N), infusion, blood products, and drugs. It can 
                  also be used for repeated with drawl of blood samples. 
              </span>
              <div>
                  <ul>
                    <li><strong>Lumens:</strong> Single, Dual, &amp; Triple</li>
                    <li><strong>Lengths:</strong> 90cm</li>
                    <li><strong>Material:</strong> Silicone</li>
                    <li><strong>Available In:</strong> 7F, 9.5F, 11F, &amp; 12.5F</li>
                  </ul>
              </div>

          </div>
          {/* <TestModals /> */}
          <div className="imgContentArea">
            <div>
              <button className="button" onClick={() => setShowModal(true)}>Ordering Information</button>
              <button className="button">Product IFUs</button>              
            </div>
          </div>
          <div className="relative flex mr-40" style={productTab}>
             <ProjectsProductTab />
          </div>
         {/* First Modal */}
         {showModal ? (
           <div initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}>

           <div
               className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
           >
           <div className="relative w-auto my-6 mx-auto max-w-3xl">
           {/*content*/}
           <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-300 outline-none focus:outline-none">
               {/*header*/}
               <div className="flex text-center justify-center content-center p-5 border-b border-solid border-slate-200 rounded-t">
                    <span className="text-1xl font-semibold text-blue-600 items-center">
                        Ordering Information
                    </span>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                    >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                    </button>
               </div>
               {/*body*/}
               <div className="relative p-6 flex-auto overflow-auto rounded-lg bg-gray-300">
                   <table className="w-full">
                       <thead className="bg-gray-50 border-b-2 border-blue-600">
                           <tr className='bg-blue-600'>
                                
                                <th colspan="3" className='p-3 text-sm font-semibold tracking-wide text-center text-white'>JET LT CVC BASIC SET</th>
                                
                           </tr>
                       </thead>
                       <tbody className='divide-x divide-blue-600'>
                           <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>JETHC17</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>7F X 900 SINGLE LUMEN</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/BOX</td>
                           </tr>
                           <tr className=''>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>JETHC19</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>9.5F X 90CM SINGLE LUMEN</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/BOX</td>
                           </tr>
                           <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>JETHC92</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>9.5F X 90CM DUAL LUMEN</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/BOX</td>
                           </tr>
                           <tr className=''>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>JETHC112</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>11F X 90CM DUAL LUMEN</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/BOX</td>
                           </tr>      
                           <tr className='bg-white'>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>JETHC123</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>12.5F X 90CM TRIPLE LUMEN</td>
                                <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>10/BOX</td>
                           </tr>                     
                       </tbody>
                       {/* <caption class="caption-bottom">
                            <span>BASIC SET CONTAINS: 1 Catheter 1 Introducer Needle 1 Guidewire 1 Peelable Introducer* 1 Tunneler 1 Scalpel 1|2|3 End Caps</span>
                            <ul>
                                <li>*7F KIT HAS A 8F PEELABLE INTRODUCER</li>
                                <li>9.5F KIT HAS A 10F PEELABLE INTRODUCER</li>
                                <li>11F KIT HAS A 12F PEELABLE INTRODUCER</li>
                                <li>12.5F KIT HAS A 13F PEELABLE INTRODUCER</li>
                            </ul>
                        </caption> */}
                   </table>
                   <div className='text-sm pt-5'>
                        <span className='flex pb-5 flex-wrap'>BASIC SET CONTAINS: 1 Catheter 1 Introducer Needle 1 Guidewire 1 Peelable Introducer 1 Tunneler 1 Scalpel 1|2|3 End Caps</span>
                        <div className='flex flex-col'>
                                <span>*7F KIT HAS A 8F PEELABLE INTRODUCER</span>
                                <span>9.5F KIT HAS A 10F PEELABLE INTRODUCER</span>
                                <span>11F KIT HAS A 12F PEELABLE INTRODUCER</span>
                                <span>12.5F KIT HAS A 13F PEELABLE INTRODUCER</span>
                        </div>
                    
                   </div>
               </div>
               {/*footer*/}
               <div className="flex items-center justify-end p-6 border-solid border-gray-300 rounded-b">
               <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                       onClick={() => setShowModal(false)}
               >Close</button>
               {/* <button
                   className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   type="button"
                   onClick={() => setShowModal(false)}
               >
                   Save Changes
               </button> */}
               </div>
           </div>
           </div>
           </div>
           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
           </div>
        ) : null }               
      </div>    
    </>
  )
}

export default AllEvents