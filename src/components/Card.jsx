import React from 'react';

function Card({Item}) {
  return (
    <div id = "card">
         <div id="header">
          
         </div>
        
       <div id ="body" >
        <li>{Item.content}</li> 
        </div>
        

    </div>
  )
}

export default Card;