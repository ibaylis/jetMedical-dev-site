import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import AllEvents from '../../src/components/projects/projects-page';


const EventsPage = ({data}) => {
  
  return <AllEvents data={data} />
}

export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
