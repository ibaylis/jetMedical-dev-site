import React, { useState } from 'react';
import Image from 'next/image';
import formImage from "../public/images/CVC_3.jpg";

import contactHeader from "../public/images/contactheader.png";
import addressContactIcon from "../public/images/address_contact_icon.svg";
import emailContactIcon from "../public/images/email_contact_icon.svg";
import phoneContactIcon from "../public/images/phone_contact_icon.svg";

import { useFormik } from "formik";
import * as Yup from 'yup';
import { useRouter } from "next/router";
import { motion as m } from 'framer-motion';


const ContactPage = ({data}) => {
// Router
const router = useRouter()


    // Formik Logics

    const formik = useFormik({
        initialValues: {
            name: "",
            lname:"",
            company:"",
            phone:"",
            email: "",
            description: "",
            country: "United States",
            terms: "",
        },
        // Validate form
        validationSchema: Yup.object({
            name: Yup.string().max(20, "First Name must be 20 characters or less.").required("First Name is required"),
            lname: Yup.string().max(20, "Last Name must be 20 characters or less.").required("Last Name is required"),
            company: Yup.string().max(20, "Company must be 20 characters or less.").required("Company Name is required"),
            phone: Yup.number(10, "Phone Number must be 10 characters.").required("Phone Number is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            description: Yup.string().max(1000, "Company must be 1000 characters or less."),
            terms: Yup.array().required("Terms are required"),
        }),

        // Submit Forms
        onSubmit: (values) => {
            console.log(values);
            router.push({ pathname: '/success', query: values })
        }
    })

    const {name, lname, company, phone, email, description, country, terms} = formik.values;

  return (
    <m.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{ opacity: 0 }}>
      <div className='contactBanner'>
          
            <Image priority src={contactHeader} width='100%' height={159} alt="Dia Flow"/>
      </div>
      <main className="flex items-center justify-center container">
        <form onSubmit={formik.handleSubmit} className="bg-white flex rounded-lg w-100 font-latoRegular ">
            <div className="flex-1 text-gray-700 p-10">

                <div className="flex flex-row w-full p-8 text-base">
                    <div className="flex justify-center">
                        <Image className="w-1/6" priority src={addressContactIcon} width={171} height={150} alt="Dia Flow"/>
                        
                        <div className="mt-6">
                            <ul>
                                <li>Jet Medical SA</li>
                                <li>Rue Rritz-Courvoisier 402300 la</li>
                                <li>Chaux-de-Fonds Switzerland</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image className="w-1/6" priority src={emailContactIcon} width={171} height={150} alt="Dia Flow"/>
                        
                        <div className="mt-8">
                            <ul>
                                <li>customerservice@jetmedical.net</li>
                                <li>complaints@jetmedical.net</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Image className="w-1/6" priority src={phoneContactIcon} width={171} height={150} alt="Dia Flow"/>
                        
                        <div className="mt-8">
                            <ul>
                                <li>P:+41-32-9679021</li>
                                <li>f:+41-32-9679001</li>
                            </ul>
                        </div>
                    </div>

                </div>
                
                <div className="mt-6 grid gap-4 gap-y-2 text-sm">
                    <div className="pb-4 md:col-span-3">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.name && formik.errors.name ? "text-red-400" : ""}`} htmlFor="firstName">
                            {/* First Name<sup>*</sup> */}
                            {formik.touched.name && formik.errors.name ? formik.errors.name : "First Name*"}
                        </label>
                        <input 
                            className="bg-gray-100 border-gray-100 border-0 py-3 px-3 leading-normal rounded-md w-full placeholder-gray-100 focus:outline-none focus:bg-gray-100" 
                            type="text" name="name" placeholder="Enter your first name..." 
                            value={name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="pb-4 md:col-span-3">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.lname && formik.errors.lname ? "text-red-400" : ""}`} htmlFor="lastName">
                            {/* Last Name<sup>*</sup> */}
                            {formik.touched.lname && formik.errors.lname ? formik.errors.lname : "Last Name*"}
                        </label>
                        <input 
                            className="bg-gray-100 border-gray-100 border-0 py-3 px-3 leading-normal rounded-md w-full placeholder-gray-100 focus:outline-none focus:bg-gray-100" 
                            type="text" name="lastname" placeholder="Enter your last name..." 
                            value={lname}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="pb-4 md:col-span-6">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.company && formik.errors.company ? "text-red-400" : ""}`} htmlFor="company">
                            {/* company Address<sup>*</sup> */}
                            {formik.touched.company && formik.errors.company ? formik.errors.company : "Company*"}
                        </label>
                        <input 
                            className="bg-gray-100 border-gray-100 border-0 py-3 px-3 leading-normal rounded-md w-full placeholder-gray-100 focus:outline-none focus:bg-gray-100" 
                            type="company" name="company" placeholder="Enter your company..." 
                            value={company}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="pb-4 md:col-span-6">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.phone && formik.errors.phone ? "text-red-400" : ""}`} htmlFor="phone">
                            {/* phone Address<sup>*</sup> */}
                            {formik.touched.phone && formik.errors.phone ? formik.errors.phone : "phone Number*"}
                        </label>
                        <input 
                            className="bg-gray-100 border-gray-100 border-0 py-3 px-3 leading-normal rounded-md w-full placeholder-gray-100 focus:outline-none focus:bg-gray-100" 
                            type="phone" name="phone" placeholder="Enter your phone..." 
                            value={phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="pb-4 md:col-span-6">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.email && formik.errors.email ? "text-red-400" : ""}`} htmlFor="email">
                            {/* Email Address<sup>*</sup> */}
                            {formik.touched.email && formik.errors.email ? formik.errors.email : "Email Address*"}
                        </label>
                        <input 
                            className="bg-gray-100 border-gray-100 border-0 py-3 px-3 leading-normal rounded-md w-full placeholder-gray-100 focus:outline-none focus:bg-gray-100" 
                            type="email" name="email" placeholder="Enter your email..." 
                            value={email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="flex flex-col text-gray-500">
                        <label className={`block font-latoBold text-sm pb-2 `} htmlFor="subject">
                            Subject<sup>*</sup>
                        </label>
                        <div className="items-center mb-1">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium dark:text-gray-300">Product Information</label>
                        </div>
                        <div className="items-center mb-1">
                            <input defaultChecked id="default-radio-2" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium dark:text-gray-300">Patient Information</label>
                        </div>
                        <div className="items-center mb-1">
                            <input defaultChecked id="default-radio-3" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-3" className="ml-2 text-sm font-medium dark:text-gray-300">SCCP Information</label>
                        </div>
                        <div className="items-center mb-1">
                            <input defaultChecked id="default-radio-4" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-4" className="ml-2 text-sm font-medium dark:text-gray-300">Sales Information</label>
                        </div>
                        <div className="items-center mb-1">
                            <input defaultChecked id="default-radio-5" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-5" className="ml-2 text-sm font-medium dark:text-gray-300">Gneral Inquiry</label>
                        </div>
                        <div className="items-center mb-1">
                            <input defaultChecked id="default-radio-6" type="radio" value="" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label htmlFor="default-radio-6" className="ml-2 text-sm font-medium dark:text-gray-300">Other</label>
                        </div>

                    </div>

                    <div className="pb-4 md:col-span-6">
                        <label className={`block font-latoBold text-sm pb-2`} htmlFor="description">
                            Please Provide Details<sup>*</sup>
                        </label>
                        <textarea 
                            className="bg-gray-100 rounded border border-gray-100 leading-normal resize-none w-full h-40 py-2 px-3 font-medium 
                            placeholder-gray-700 focus:outline-none focus:bg-gray-100" 
                            type="description" name="description" placeholder='' 
                            value={description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        >
                        </textarea>

                    </div>







                    <div className="pb-4 md:col-span-6">
                        <label className="block font-latoBold text-sm pb-2" htmlFor="contry">
                            Country<sup>*</sup>
                        </label>
                        <select 
                            className="border-2 border-gray-500 p-2 rounded-md w-1/2 focus:border-teal-500 focus:ring-teal-500" 
                            name="country" placeholder="Select Country..." 
                            value={country}
                            onChange={formik.handleChange}
                        >
                            <option>United States</option>
                            <option>United Kingdom</option>
                            <option>Canada</option>
                            <option>Japan</option>

                        </select>
                    </div>
                    <div className="pb-4 md:col-span-6">
                        <label className={`block font-latoBold text-sm pb-2 ${formik.touched.terms && formik.errors.terms ? "text-red-400" : ""}`} htmlFor="terms">
                            {/* Terms of Service<sup>*</sup> */}
                            {formik.touched.terms && formik.errors.terms ? formik.errors.terms : "Terms of Service*"}
                        </label>
                        <div className="flex items-center gap-2">
                            <input 
                                type="checkbox" 
                                name="terms" 
                                value="checked" 
                                
                                onChange={formik.handleChange}
                                className="h-5 w-5 text-teal-500 border-2 focus:border-teal-500 focus:ring-teal-50" 
                            />
                            <p className="text-sm font-latoBold text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, voluptatibus.
                            </p>
                        </div>
                    </div>
                    <button type="submit" 
                        className="bg-yellow-500 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-1/2">
                        Send
                    </button>                     
                    
                </div>
                </div>

            
        </form>
      </main>

  
    </m.div>
  )
}

export default ContactPage