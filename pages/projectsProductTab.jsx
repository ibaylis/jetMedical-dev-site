import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import styles from './projectsProductTab.module.css';
import styles from './projectsProductTab.module.css';


import cvc1MainIMG from "../public/images/CVC_1.jpg";
import cvc2MainIMG from "../public/images/CVC_2.jpg";
import cvc3MainIMG from "../public/images/CVC_3.jpg";

import cvc1Thumbnail from "../public/images/selected_thumbnail_CVC_1.jpg";
import cvc2Thumbnail from "../public/images/selected_thumbnail_CVC_2.jpg";
import cvc3Thumbnail from "../public/images/selected_thumbnail_CVC_3.jpg";

function projectsProductTab() {
  return (
    <>
    <div className='bodyJetProd'>
        <div className='containerJetProd'>
            <div className='content'>
                <input type="radio" name="indicator" defaultChecked id="home" />
                <input type="radio" name="indicator" id="blog" />
                <input type="radio" name="indicator" id="an" />
                <input type="radio" name="indicator" id="code" />
                <input type="radio" name="indicator" id="about" />
                <div className='text-content'>
                    <div className='home text w-max'>
                        {/* <div className='title'>Jet LT CVC</div> */}
                        {/* <img href="/" src='../src/images/' width={300} height={300} /> */}
                        
                        <Image priority src={cvc3MainIMG} width="100%" height="100%" alt="CVC" />
                    </div>
                    <div className='blog text w-max'>
                        {/* <div className='title'>Jet PICC</div> */}
                        {/* <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/1.92.6jetpicc.jpg' width={300} height={300} /> */}
                        <Image priority src={cvc1MainIMG} width="100%" height="100%" alt="CVC" />

                    </div>
                    <div className='an text w-max'>
                        {/* <div className='title'>Jet PICC</div> */}
                        {/* <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/1.92.6jetpicc.jpg' width={300} height={300} /> */}
                        <Image priority src={cvc2MainIMG} width="100%" height="100%" alt="CVC"/>

                    </div>   
                    <div className='code text w-max'>
                        {/* <div className='title'>Jet PICC</div> */}
                        {/* <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/1.92.6jetpicc.jpg' width={300} height={300} /> */}
                        <Image priority src={cvc3MainIMG} width="100%" height="100%" alt="CVC"/>

                    </div>                                      
                </div>
                <div className='listJet jetIMGGroup1'>
                    <label htmlFor="home" className='home jetIMG1 w-max'>
                        <img href="/" src={'/images/selected_thumbnail_CVC_3.jpg'} width={93} height={93} />
                        {/* <Image priority src={'/images/CVC_3.jpg'} width={183} height={80} alt="Dia Flow"/> */}
                    </label>
                    <label htmlFor="blog" className='blog jetIMG1 w-max'>
                        <img href="/"  src={'/images/selected_thumbnail_CVC_1.jpg'}  width={93} height={93} />
                        {/* <Image priority src={'/images/CVC_1.jpg'} width={183} height={80} alt="Dia Flow"/> */}
                    </label>
                </div>
                <div className='listJet jetIMGGroup2'>
                    <label htmlFor="an" className='an jetIMG2 w-max'>
                        <img href="/" src={'/images/selected_thumbnail_CVC_2.jpg'}  width={93} height={93} />
                        {/* <Image priority src={'/images/CVC_2.jpg'} width={183} height={80} alt="Dia Flow"/> */}
                    </label>    
                    <label htmlFor="code" className='code jetIMG2 w-max'>
                        <img href="/" src={'/images/selected_thumbnail_CVC_3.jpg'}  width={93} height={93} />
                        {/* <Image priority src={'/images/CVC_3.jpg'} width={183} height={80} alt="Dia Flow"/> */}
                    </label>                                        
                    {/* <div className='indicator'></div> */}
                </div>

                {/* <div className='list jetIMGGroup1'>
                    <label htmlFor="home" className='home jetIMG1'>
                        {/* <img href="/" src={'/images/selected_thumbnail_CVC_3.jpg'} width={93} height={93} /> 
                        <Image priority className="imghover" src={'/images/CVC_3.jpg'} width={183} height={80} alt="Dia Flow"/>
                    </label>
                    <label htmlFor="blog" className='blog jetIMG1'>
                        <img href="/"  src={'/images/selected_thumbnail_CVC_1.jpg'}  width={93} height={93} />
                        {/* <Image priority className="imghover" src={'/images/CVC_1.jpg'} width={183} height={80} alt="Dia Flow"/> 
                    </label>
                </div>
                <div className='list jetIMGGroup2'>
                    <label htmlFor="an" className='an jetIMG2'>
                        <img href="/" src={'/images/selected_thumbnail_CVC_2.jpg'}  width={93} height={93} />
                        {/* <Image priority className="imghover" src={'/images/CVC_2.jpg'} width={183} height={80} alt="Dia Flow"/> 
                    </label>    
                    <label htmlFor="code" className='code jetIMG2'>
                        <img href="/" src={'/images/selected_thumbnail_CVC_3.jpg'}  width={93} height={93} />
                        {/* <Image priority className="imghover" src={'/images/CVC_3.jpg'} width={183} height={80} alt="Dia Flow"/> 
                    </label>                                        
                    {/* <div className='indicator'></div> 
                </div> */}

            </div>
        </div>
    </div>
    <div></div>
    <style jsx>
        {
            `
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            .bodyJetProd {
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                bottom: 3rem;
                
            }
            .containerJetProd {
                max-width: 950px;
                width: 100%;
                background: #fff;
                border-radius: 12px;
                margin: 0;
                padding: 2px;
            }

            .containerJetProd .main-title {
                font-size: 30px;
                font-weight: 500;
                margin-bottom: 20px;
            }
            .containerJetProd .content {
                display: flex;
                align-items: center;
                justify-content: space-between;
padding-left: 5rem;
            }
            .containerJetProd .content .listJet {
                display: flex;
                flex-direction: column;
                position: relative;
                margin-right: 7rem;
                bottom: 5.9rem;
                left: 5rem;
            }


            .content .listJet label {
                font-size: 22px;
                font-weight: 500;
                line-height: 60px;
                cursor: pointer;
                
                padding-left: 1rem;
                color: #333;
                z-index: 12;
                transition: all 0.4s ease;
            }


            

            #home:checked ~ .listJet .home,
            #blog:checked ~ .listJet .blog,
            #an:checked ~ .listJet .an,
            #code:checked ~ .listJet .code,
            #about:checked ~ .listJet .about {
                color: #fff;
            }
            .listJet .imghover {
                filter: grayscale(100%) !important;
            }
            .listJet img {
                filter: grayscale(100%);
            }

            #home:checked ~ .listJet .home img,
            #blog:checked ~ .listJet .blog img,
            #an:checked ~ .listJet .an img,
            #code:checked ~ .listJet .code img            
             {

                filter: grayscale(0%);
            }

            .content .indicator {
                position: absolute;
                height: 60px;
                width: 100%;
                top: 0;
                left: 0;
                background: #6d50e2;
                border-radius: 12px;
                transition: all 0.4s ease;
            }

            

            #home:checked ~ .indicator {
                top: 0;
            }
            #blog:checked ~ .listJet .indicator {
                top: 60px;
            }
            #an:checked ~ .listJet .indicator {
                top: 120px;
            }
            #code:checked ~ .listJet .indicator {
                top: 180px;
            }
            #about:checked ~ .listJet .indicator {
                top: 240px;
            }

            .containerJetProd input[type="radio"] {
                display: none;
            } 

            .containerJetProd .content .text-content {
                width: 80%;
                height: 100%;
                left: 3rem;
                bottom: 2rem;
            }            

            .containerJetProd .text-content .text {
                display: none;
            }    

            .containerJetProd .text-content .home {
                display: block;
            }        

            #home:checked ~ .text-content .home,
            #blog:checked ~ .text-content .blog,
            #an:checked ~ .text-content .an,
            #code:checked ~ .text-content .code,
            #about:checked ~ .text-content .about {
                display: block;
            }

            #blog:checked ~ .text-content .home,
            #an:checked ~ .text-content .home,
            #code:checked ~ .text-content .home,
            #about:checked ~ .text-content .home {
                display: none;
            }            
            
            .containerJetProd .text-content .title {
                font-size: 25px;
                font-weight: 500;
                margin-bottom: 10px;
            }

            .containerJetProd .text-content {
                position: relative;
                bottom: 4rem;
                z-index: 1;
                text-align: justify;
            }     
            
         

            `
        }
        
    </style>
    </>
  )
}

export default projectsProductTab;