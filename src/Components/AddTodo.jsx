
import {useState} from 'react'
import Adduser from './AddUser';

function Addtodo(props) {
    const [user,setUser] = useState("")
    const [userItems,setUserItems] = useState([])

    const addUserInfo = () =>{
        var newItems = {
            title : user,
            status : false,

        };
        setUserItems([...userItems,newItems]);

    };
    

    const toggleBut =(index) => {
        var newArray = userItems.map((items, i) => {
            return index === i ? {...items, status: !items.status} : items;
        });
        setUserItems(newArray);
    };

    const deleteItem =(index) =>{
        var filteredData = userItems.filter((items,i) =>{
            return index != i;
        });
        setUserItems(filteredData);
    }

    return(
        <div style = {{marginTop : "100px"}}>
            <h1 style = {{marginLeft : "-100px"}}>ToDo-List</h1>
            <input  value = {user}type = "text" placeholder='Enter Text' 
            onChange={(e) => {setUser(e.target.value);
            }} style = {{width : "200px",height : "40px",borderRadius : "5px",border : '2px solid black'}}/>&nbsp;&nbsp;&nbsp;
            <button onClick={addUserInfo} style = {{width : "100px",height : "40px",borderRadius : "5px" ,backgroundColor : "green",color : "white",fontSize  :"800",fontWeight : '800',border : 'none'}}class= "buttonadd">Add Users</button>
           <Adduser useritem = {userItems} deleteItem = {deleteItem} toggleBut = {toggleBut}/>

        </div>
    )
}


export default Addtodo;
