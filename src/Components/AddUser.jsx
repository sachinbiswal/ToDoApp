import React from "react";
import hover from '../Components/hover.css'
function Adduser ({useritem ,deleteItem,toggleBut}){


    return(
        <div>
            {
                useritem.map ((items,index) =>{
                    return <div style = {{display  :"flex",justifyContent :'center',alignItems : "center",margin : '10px',padding : "10px"}}>
                        <h3>{items.title}</h3>&nbsp;&nbsp;&nbsp;
                        <h4 style = {{color : "green"}}>{items.status ? "Completed" : "Not Completed"}</h4>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => {toggleBut(index);
                        }} style = {{width : "60px",height : "40px",borderRadius : "50%" ,backgroundColor : "green",color : "white",fontSize  :"800",fontWeight : '800',border : 'none'}}>Toggle</button>&nbsp;&nbsp;&nbsp;
                        <button onClick={() => {deleteItem(index);
                        }} style = {{width : "60px",height : "40px",borderRadius : "50%",backgroundColor : "red",color : "white",fontSize  :"800",fontWeight : '800',border : "none"}}>Delete</button>

                    </div>
                })}
        </div>
    )
}
export default Adduser;