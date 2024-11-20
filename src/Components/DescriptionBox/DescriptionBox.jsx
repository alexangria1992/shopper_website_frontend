import React from 'react';
import './DescriptionBox.css';
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className='descriptionbox-navigator'>
        <div className='descriptionbox-nav-box'>Description</div>
        <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
      </div>
      <div className='descriptionbox-description'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          assumenda porro perspiciatis ratione, deleniti expedita cupiditate
          odit. Aspernatur aliquid nihil tempore distinctio! Quos adipisci
          facilis rem quaerat, temporibus aliquam ad Lorem ipsum dolor sit amet
          consectetur adipisicing elit. <br />
          <br /> Provident cumque iure, itaque necessitatibus impedit
          exercitationem accusamus pariatur amet odit obcaecati ut soluta,
          dolorem iste magni repudiandae incidunt vero. Ducimus, ipsum. .
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
