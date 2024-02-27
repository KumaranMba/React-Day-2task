import Card from "./components/Card"

function App({ListItems},{cardHeader}){
  console.log(ListItems);
  console.log(cardHeader);
  for(let i=0;i<ListItems.length;i++){
    return(
      <div id ="container">
      <div id= "card1">
      <ul >{ListItems[0].map(Item=>
        <Card key={Item.id} Item={Item}/>
      )}  
         </ul>
         </div>
      <div id="card2">
        <ul >{ListItems[1].map(Item=>
        <Card key={Item.id} Item={Item}/>
      )}  
         </ul>
         </div>
      <div id="card3">
      <ul >{ListItems[2].map(Item=>
        <Card key={Item.id} Item={Item}/>
                   )}  
         </ul>
        </div>
      </div>
    )
  } 
}

export default App;