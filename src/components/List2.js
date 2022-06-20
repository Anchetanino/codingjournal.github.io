import React from 'react'

const List2 = (props) => {
    return (
        <div className='task'>
       <table>
         <tr className='header'>
           <th>Task</th>
           <th className='btn' onClick={props.Delete}> Delete All</th>
         </tr>
     {props.yourtask.map((list)=>{
       return(
           <tr>
                 <td>
                <li className='lidate'>{list.date} </li>
                <li className='litask'>{list.task} </li> </td>
              <td ><button onClick={props.Remove} id={list.id}>Done</button></td>
         </tr> 
       )
    
     })}
      </table>
      </div>
     )
}

export default List2