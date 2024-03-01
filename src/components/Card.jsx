import React from 'react';           

function Card({data}) {                           // creating card component and receiving props
  
  return (                                        //  return the HTML and  JSX code for each card
   <div className ="card">                                              
   <div className="Header">                       
       <div className="title">                    
        {data.cardHeader}                                 
      </div>
     <h1 className="price">{data.payment}</h1>
     <hr/>
   </div>
    
    <br/>
   <div className ="body">                         
     <ul className ="ul">                           
       {data.features.map((feature)=>(
         <li key ={feature.id}>{feature.disabled?(<span style ={{color:'gray'}}>"✘" {feature.content}</span>
           ):(<span style={{color:'black'}}>{feature.important ?"✔":"✘"} {feature.content}</span>)}</li>
          ))}
      </ul>
      <div>
      <li key={data.button.id}>{data.button.disabled?(<span className ="disabledBtn" style={{backgroundColor:"#6EA8FE",color:'white', fontSize:"0.9375em"}}><b>{data.button.content}</b></span>
      ):(<span className ="btn" style={{backgroundColor:"#0d6efd",color:'white',fontSize:"0.9375em"}}><b>{data.button.content}</b></span>)}</li>
      </div>
      
    </div>                                    
    </div>                                    // using working with array list and conditional rendering the datas are displayed

  )
}

export default Card;                         // exporting to the App component