import React from 'react'
import { useRouter } from 'next/router'
import { motion as m } from 'framer-motion';

export default function Success() {
    const router = useRouter();

    return (
    <>
        <m.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }} className="h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">Thank you {router.query.name} {router.query.lname}! Your request is sent and we will contact you soon. </h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over at {router.query.email}. For immediate assistance, please call 215-256-4201 and the operator will direct your call.
                </p>
            </div>
        </m.main>
    </>
  )
}