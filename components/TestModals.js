import React, { useState } from 'react';
import Image from 'next/image';
import Trophy from "../public/trophy.png";
import Gift from "../public/gift.png";
import {AiFillFire} from "react-icons/ai";
import Link from 'next/link';

const TestModals = () => {
  const [showModal, setShowModal]  = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  return (
    <div className="flex md:flex-col justify-center items-center mt-1">
        <div className="flex gap-5">
            <button type="button" 
                    className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center 
                                gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                    onClick={() => setShowModal(true)}
            >
                Ordering Information <AiFillFire className="text-xl" />
            </button>
            
            
            <button type="button" 
                    className="bg-blue-600 text-white active:bg-black hover:bg-black flex justify-center items-center 
                    gap-2 font-bold px-6 h-12 rounded-md shadow hover:shadow-lg outline-none focus:outline-none"
                    onClick={() => setShowSecondModal(true)}
            >
                
            Product Literature <AiFillFire className="text-xl" />
            </button>
        </div>
        {/* First Modal */}
        {showModal ? (
           <>

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
               <button
                   className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                   type="button"
                   onClick={() => setShowModal(false)}
               >
                   Save Changes
               </button>
               </div>
           </div>
           </div>
           </div>
           <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
           </>
        ) : null }
        {/* Second Modal */}
        {showSecondModal ? (
            <>
            <div className="mt-10 flex justify-center items-center flex-col w-96 rounded-lg shadow-xl h-auto p-2 absolute bg-white">
                <Image src={Gift} width={100} height={100} style={{objectFit:"cover"}} />
                <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
                    May your life be filled with success and achievments.
                </h2>
                <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                        onClick={() => setShowSecondModal(false)}
                >Close</button>
            </div>

            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold">
                    Modal Title
                </h3>
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
                <div className="relative p-6 flex-auto overflow-auto rounded-lg shadow">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b-2 border-gray-200">
                            <tr>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Song</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Artist</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Year</th>
                            </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-100'>
                            <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Malcolm Lockyer</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1961</td>
                            </tr>
                            <tr className='bg-gray-50'>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Witchy Woman</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>The Eagles</td>
                            <td className='p-3 text-sm text-gray-700'>1972</td>
                            </tr>
                            <tr className='bg-white'>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Shining Star</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>Earth, Wind, and Fire</td>
                            <td className='p-3 text-sm text-gray-700 whitespace-nowrap'>1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
                        onClick={() => setShowSecondModal(false)}
                >Close</button>
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowSecondModal(false)}
                >
                    Save Changes
                </button>
                </div>
            </div>
            </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        ) : null }
    </div>
  )
}

export default TestModals