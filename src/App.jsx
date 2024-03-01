import Card from "./components/Card";       // importating the  card component
import './Style/App.css';                   // importating the style file

function App({Datas}){                      // creating App component and receiving destructure props       
    
    return(
      <div id ="container">                
     <ul className="unorderlist"> {                         // creating unorderlist  to display cards in a list format
        Datas.map((data) =>(                                // Iteration
        <Card key ={data.cardHeader} data= {data}/>         //  passing props to card component and using key to render the card
       
      ))} 
      </ul>
      
  </div>
    );
  
}

export default App;                                         // exporting to the main.jsx