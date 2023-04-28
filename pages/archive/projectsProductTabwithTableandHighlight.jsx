import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './projectsProductTabwithTableandHighlight.module.css';

function projectsProductTabwithTableandHighlight() {
  return (
    <>
    <div className={styles.bodyJetProd}>
        <div className={styles.containerJetProd}>
            <div className={styles.content}>
                <input type="radio" name="indicator" defaultChecked id="home" />
                <input type="radio" name="indicator" id="blog" />
                <input type="radio" name="indicator" id="help" />
                <input type="radio" name="indicator" id="code" />
                <input type="radio" name="indicator" id="about" />
                <div className={styles.textContent}>
                    <div className={`${styles.home} ${styles.text}`}>
                        {/* <div className='title'>Jet LT CVC</div> */}
                        <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/jetLTCVC.jpg' width={300} height={300} />

                    </div>
                    <div className={`${styles.blog} ${styles.text}`}>
                        {/* <div className='title'>Jet PICC</div> */}
                        <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/1.92.6jetpicc.jpg' width={300} height={300} />

                    </div>
                </div>
                <div className={styles.list}>
                    <label htmlFor="home" className={styles.home}>
                        <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/jetLTCVC.jpg' width={150} height={150} />

                    </label>
                    <label htmlFor="blog" className={styles.blog}>
                        <img href="/" src='http://localhost:10089/wp-content/uploads/2023/01/1.92.6jetpicc.jpg' width={150} height={150} />
                    </label>
                    <div className={styles.indicator}></div>
                </div>

            </div>
        </div>
    </div>
    <div></div>

    </>
  )
}

export default projectsProductTabwithTableandHighlight;