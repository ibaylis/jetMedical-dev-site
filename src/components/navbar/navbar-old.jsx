import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


function navbar() {
    
  return (
   <>
    <div className="navbarJet">
      <a href="#home">Home</a>
      <a href="#news">News</a>
      <div className="dropdownJet">
        <button className="dropbtnJet">Dropdown 
          <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-contentJet">
          <div className="headerJet">
            <h2>Products</h2>
          </div>   
          <div className="rowJet">
            <div className="columnJet">
            
                <h3>DIALYSIS</h3>
                <a className='jet-menu-links' href="/">Duo-Jet<sup>&reg;</sup></a>                
                <a className='jet-menu-links' href="/">Duo-Jet<sup>&reg;</sup></a>
                <a className='jet-menu-links' href="/">Duo-Jet<sup>&reg;</sup> II</a>
                <a className='jet-menu-links' href="/">Dia-Flow</a>
                <a className='jet-menu-links' href="/">Jet Cath</a>
                <a className='jet-menu-links' href="/">Jet Peritoneal</a>
                <a className='jet-menu-links' href="/">Jet-Flow<sup>&reg;</sup></a>
                <a className='jet-menu-links' href ="/">Jet-Flow XF</a>
              
            </div>
            <div className="columnJet">
                <h3>INFUSION</h3>
                <a className='jet-menu-links' href ="/">Jet-Port</a>
                <a className='jet-menu-links' href ="/">Jet-Fuse</a>
                <a className='jet-menu-links' href ="/">Jet LT CVC</a>
                <a className='jet-menu-links' href ="/">Jet-PICC</a>
                <a className='jet-menu-links' href ="/">Jet-PICC CT</a>
                <a className='jet-menu-links' href ="/">Jet-Flow<sup>&reg;</sup></a>
                <a className='jet-menu-links' href ="/">1.9 &amp; 2.6 Jet-PICC</a>
            </div>
            <div className="columnJet">
              <h3>INTRODUCER</h3>
              <a className='jet-menu-links' href ="/">Lead Wire Introducer</a>
              <a className='jet-menu-links' href ="/">Valved Peelable Introducer</a>
              <a className='jet-menu-links' href ="/">Peelable Introducer</a>
              <a className='jet-menu-links' href ="/">Introducer Needle</a>
            </div>
            <div className="columnJet">
              <h3>ACCESSORIES</h3>
              <a className='jet-menu-links' href ="/">Guidewire</a>
              <a className='jet-menu-links' href ="/">Repair Kit</a>
              <a className='jet-menu-links' href ="/">Tunneling Trocar</a>
            </div>

          </div>
        </div>
      </div> 
    </div>
    <style jsx>{`
        .navbarJet {
          overflow: hidden;
          background-color: #333;
          font-family: Arial, Helvetica, sans-serif;
        }

        .navbarJet a {
          float: left;
          font-size: 16px;
          color: white;
          text-align: center;
          padding: 14px 16px;
          text-decoration: none;
        }

        .dropdownJet {
          float: left;
          overflow: hidden;
        }
        
        .dropdownJet .dropbtnJet {
          font-size: 16px;  
          border: none;
          outline: none;
          color: white;
          padding: 14px 16px;
          background-color: inherit;
          font: inherit;
          margin: 0;
        }

        .navbarJet a:hover, .dropdownJet:hover .dropbtnJet {
          background-color: red;
        }
        
        .dropdown-contentJet {
          display: none;
          position: absolute;
          background-color: #f9f9f9;
          width: 100%;
          left: 0;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
        }
        
        .dropdown-contentJet .header {
          background: red;
          padding: 16px;
          color: white;
        }
        
        .dropdownJet:hover .dropdown-contentJet {
          display: block;
        }

        /* Create three equal columns that floats next to each other */
.columnJet {
  float: left;
  width: 33.33%;
  padding: 10px;
  background-color: #ccc;
  height: 250px;
}

.columnJet a{
  float: none;
  color: black;
  padding: 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.columnJet a:hover {
  background-color: #ddd;
}

/* Clear floats after the columns */
.rowJet:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .columnJet {
    width: 100%;
    height: auto;
  }
}
      `}</style>
   </>
  )
}

export default navbar