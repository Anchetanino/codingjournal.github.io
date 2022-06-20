import React from 'react'
import '../css/table.css'

const List = (props) => {
  return (
     <div className='thoughts'>
    <table>
      <tr className='header'>
        <th>Thoughts for the day</th>
        <th className='btn' onClick={props.Delete}> Delete All</th>
      </tr>
  {props.yourthoughts.map((list)=>{
    return(
        <tr>
              <td>
                <li className='lidate'>{list.date1} </li>
                <li className='lithoughts'>{list.thoughts} </li> </td>
              <td ><button onClick={props.Remove} id={list.id}>Remove</button></td>
      </tr> 
    )
 
  })}
   </table>
   </div>
  )
}

export default List