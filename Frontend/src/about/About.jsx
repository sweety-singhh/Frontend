import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

  function About() {
    
    return (
      <>
      <Navbar></Navbar>
      <div class="max-w-screen-lg mx-auto p-6">        
        <h1 class="pt-28 text-4xl font-bold mb-6">About Us</h1>
        <p class="mb-4">Welcome to <strong>BookStore</strong>, your one-stop destination for all things books! 📚</p>
        <p class="mb-4">At BookStore, we believe in the magic of reading and the power of stories to transform lives. Our mission is to make books accessible to everyone, everywhere. Whether you're a lifelong reader or just starting your literary journey, we have something for you.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
        <p class="mb-4">Founded in [Year], BookStore started as a small, independent bookstore with a passion for connecting readers with the books they love. Over the years, we've grown into a vibrant online community, offering a vast selection of titles across all genres and interests.</p>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
        <ul class="list-disc list-inside mb-4">
            <li><strong>Wide Selection</strong>: From bestsellers to hidden gems, our catalog includes thousands of books in various genres, including fiction, non-fiction, children's books, academic texts, and more.</li>
            <li><strong>Personalized Recommendations</strong>: Our advanced recommendation system helps you discover new books based on your reading preferences and past purchases.</li>
            <li><strong>Community Engagement</strong>: Join our community of book lovers! Participate in book clubs, author events, and discussions to share your thoughts and connect with fellow readers.</li>
            <li><strong>Convenient Shopping</strong>: Enjoy a seamless shopping experience with easy navigation, secure payment options, and fast delivery.</li>
        </ul>
        
        <h2 class="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
        <p class="mb-4">At BookStore, we are committed to promoting literacy and fostering a love for reading. We partner with local libraries, schools, and literacy programs to support reading initiatives and provide access to books for underserved communities.</p>
        
        <p class="mt-8">Thank you for choosing BookStore. We hope you find your next great read with us!</p>
        <p class="mt-4">Happy Reading! 📖</p>
    </div>
        <Footer/>
      </>
    );
  }

  export default About;