import { Card, Accordion } from 'flowbite-react'
import Image from 'next/image';
import React from 'react'

import homeHeaderIMG from "../public/images/homeheader_1.jpg"

function patientResources(props) {
  return (
    <>
        <div className="banner">

            <Image priority src={homeHeaderIMG} width={1671} height={302} alt="..."/>
        </div>
        <section className="pb-52">
            <Card className="mx-20 mt-11 mb-5 text-center" href="#">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Patient Resources
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex eveniet quis qui nemo ad quas quo vero omnis vel vitae!
                </p>
            </Card>

            <Accordion className="mx-20 mt-5 mb-5 text-center"  collapseAll={true}>
                <Accordion.Panel>
                    <Accordion.Title>
                        Site Care
                    </Accordion.Title>
                    <Accordion.Content>
                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reprehenderit ratione omnis architecto recusandae nesciunt aspernatur consectetur dolor, magni ex.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, harum.
                        <a
                        href="#"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                        get started
                        </a>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ullam laudantium natus voluptate voluptatibus tenetur non ad quos ratione placeat.
                    </p>
                    </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        IFU
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum cupiditate eveniet debitis praesentium tempore sunt adipisci dicta incidunt perferendis dolorem.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a
                            href="#"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                            Lorem ipsum dolor sit amet.
                            </a>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, magni!
                        </p>
                        </Accordion.Content>
                    </Accordion.Panel>
                    <Accordion.Panel>
                        <Accordion.Title>
                        PIP
                        </Accordion.Title>
                        <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque voluptatum laboriosam reiciendis nobis modi repudiandae quia veniam in, pariatur possimus?                                   </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias modi nemo optio vero quis dicta ipsam ut et minima maxime.
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, qui.
                        </p>
                        <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                            <li>
                            <a
                                href="#"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Lorem ipsum dolor sit amet.
                            </a>
                            </li>
                            <li>
                            <a
                                href="#"
                                rel="nofollow"
                                className="text-blue-600 hover:underline dark:text-blue-500"
                            >
                                Lorem ipsum dolor sit amet.
                            </a>
                            </li>
                        </ul>
                        </Accordion.Content>
                    </Accordion.Panel>
            </Accordion>

        </section>
    
    </>
  )
}



export default patientResources
