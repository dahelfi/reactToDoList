
import './App.scss';
import { Component } from 'react';

export default class TodoApp extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      newItem:"",
      list:[]
    }
  }

  addItem(){
    

    let newItem = {
      id: this.state.list.length +1,
      value: this.state.newItem.slice(),
      date: new Date().toDateString()
    };

    

    let list = [...this.state.list];

    list.push(newItem);
    
    
    this.setState({
      list, 
      newItem: ""
    });


  }

  updateInput(key, value){

   

    this.setState({
      [key]: value
    })
  }

  deleteItem(id){
    const list = [...this.state.list];

    const updatedList = list.filter(item=> item.id !== id);

    this.setState({
      list: updatedList
    });
  }
  

  showInformation(){
    console.log("hier dein array: ", this.state.list);
  }

  render(){
    return (
      <div className="app">
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <h1 style={{ color: "#eb348f", fontSize: "40px"}}>Add Your Note</h1>
          <div>
          <input style={{backgroundColor: "rgba(0,0,0,0.8)", color:"white", height:"30px"}} type="text" placeholder='Type item here...'         
          value={this.state.newItem} onChange={e=>this.updateInput("newItem", e.target.value)}/>
          <button style={{marginLeft:"15px", width:"50px", height:"30px", backgroundColor: "#f00707", color:"white", borderRadius: "6px", border: "1px solid #f00707"}} onClick={()=> this.addItem()}>Add</button>


          </div>
        
          <ul style={{ listStyleType: "none", margin: "0px", padding:"0px"}}>
            {this.state.list.map(item =>{
              return(
                <li key={item.id} className="list-Element" >
                <h7>{item.value}</h7>
                <p>{item.date}</p>
               
                <button  onClick={()=> this.deleteItem(item.id)}>
                X
                </button>

              </li>

              )
              
            })}
          </ul>

        </div>
      </div>
    );
  } 

}


