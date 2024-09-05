import React, { useEffect, useState } from 'react';
import Cards from "./Cards";

import axios from "axios";
import { Link } from 'react-router-dom';
function Course() {
 const [book,setBook] =useState([])
 useEffect(() =>{
  const getBook=async()=>{
    try {
   const res =await  axios.get("http://localhost:4001/book");
   console.log(res.data)
   setBook(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  getBook();
 },[])



  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
     <div className='flex flex-col items-center justify-center text-center'>
      <h1 className='pt-28 text-2xl  md:text-4xl'>
        We're delighted to have you
         <span className='text-pink-500'> Here! :)</span>
         </h1>
      <p className='mt-12 max-w-2xl'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni unde officia nisi fugit itaque nostrum cupiditate veritatis maiores neque excepturi, obcaecati facilis repellendus eligendi odit illo molestias voluptatum dolorum modi. hgevcjk jrhkl4wn jdkbflrk edbk3jbd34kl f jhrbk3j4 hjdbejkrb4j hdb3iufjn45lkgn 
        </p>
        <Link to="/">
        <button className=' mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
          Back
          </button>
          </Link>
     </div>
     <div className='mt-12 grid grid-cols-1 md:grid-cols-3 '> 
      {
        book.map((item) => (
          <Cards key= {item.id} item={item}/>
        ))
       
      }
     </div>
      
     </div>
    </>
  )
}

export default Course
