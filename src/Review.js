import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex] = useState(0); 
  const {name,job,image,text} = people[index];
  return( 
  <article className='review'>
    <div className='img-container'>
      <img src={image} className='person-img'/>
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <button className='prev-button'>
      
    </button>
  </article>
  )
};

export default Review;
