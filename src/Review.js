import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight,FaChevronCircleLeft,FaChevronCircleRight } from 'react-icons/fa';


const Review = () => {
  const [index,setIndex] = useState(0); 
  const {name,job,image,text} = people[index];
  function handleLeft()
  {
    setIndex(prev => (prev+1)%4);
  }
  const handleright = () => {
    setIndex((prev) => {
      if(prev == 0)
      {
        return 3;
      }
      else{
        return prev-1;
      }
    });
  }
  const handleRandom = () => {
    let num = Math.floor(Math.random()*people.length);
    setIndex(num);
  }
  return( 
  <article className='review'>
    <div className='img-container'>
      <img src={image} className='person-img'/>
      <span className='quote-icon'><FaQuoteRight /></span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{text}</p>
    <div className='button-container'>
      <button className='prev-btn' onClick={handleright}>
        <FaChevronCircleLeft/>
      </button>
      <button className='next-btn' onClick = {handleLeft}>
        <FaChevronCircleRight/>
      </button>
    </div>
    <button className='random-btn' onClick={handleRandom}>surprise me</button>
    </article>
  )
};

export default Review;
