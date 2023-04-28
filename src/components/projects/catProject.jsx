import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const CatEvent = ({data, pageName}) => {
  return (
    <div className="cat_events">
        <h1>Projects in {pageName}22</h1>
        <div className="content">
        {/* {data.map(ev => (
            <Link key={ev.id} href={`/projects/${ev.city}/${ev.id}`} passHref legacyBehavior>
                <a className="card">
                    <Image width={300} height={300} alt={ev.title} src={ev.image} />
                    <h2> {ev.title} 1</h2>
                    <p> {ev.description} </p>
                    <p> {ev.description} </p>
                </a>

            </Link>
        ))} */}

        </div>
    </div>
  )
}

export default CatEvent