


import React, { useState } from 'react';


// core version + navigation, pagination modules:

import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';





import {Swiper,SwiperSlide} from 'swiper/react'



// // init Swiper:
// const swiper = new Swiper('.swiper', {
//   // configure Swiper to use modules
//   modules: [Navigation, Pagination],
// });




export default Curiosidade;

function Curiosidade() {


  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });


 

 

  const data = [
    {id:'1',image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    {id:'2',image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    {id:'3',image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
    {id:'4',image:'https://sujeitoprogramador.com/wp-content/uploads/2022/08/fullstack-blog.png'},
  ]
  
   
  
   
  
  return(
  <div className="container">
  <h1 className="title">Slider com react Js</h1>
  
   
  
  <Swiper 
  slidesPerView={1}
	pagination={{clickable:true}}	
	navigation>

{data.map( (item)=>(
<SwiperSlide key={item.id}>
<img 
		src={item.image}
		alt="Slider"	
		className="slide-item"
	/>
    </SwiperSlide>
    ))}
  </Swiper>
  </div>
  )

    }