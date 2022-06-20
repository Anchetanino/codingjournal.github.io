import React, { useEffect, useState } from 'react'
import '../css/table.css';
import List2 from './List2';

const Task = () => {
    
    const bodystyle={display: "flex", flexdirection: "row", gap: "50px"}
    const [id, setId] = useState(Date.now())
    const [date, setDate] = useState('')
    const [task, setTask] = useState('')
    const [yourtask, setYourTask] = useState([])
    const year = new Date().getFullYear()
    const month = new Date().getMonth() + 1;
    const hours = new Date().getDate()
    const dateToday = `${year}-${month}-${hours}`
    

    function tasksubmit(event){
        event.preventDefault();
         const data = {id: id, date, task};
      setYourTask([...yourtask, data]);
      setId(Date.now());
      setDate('');
      setTask('');
    }

    const Remove = (e) => {
      let numID = parseInt(e.target.id);
      let newList = [...yourtask].filter(list => {return list.id !== numID});
      setYourTask(newList);
      }
      const Delete = () => {
        setYourTask([]);
    };
    useEffect(()=>{
      localStorage.setItem('task',JSON.stringify(yourtask))
    }, [yourtask])
    return (
    <div >

        
        <div  style={{border: "5px solid darkblue", width: "400px", height:"400px", borderRadius:"20px"}}> 
        <form onSubmit={(e)=>{tasksubmit(e)}}>
          <div style={{display:"block", float: "right", padding:"10px"}}>
            <label htmlFor="">Date:</label>
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} min={new Date().toISOString().split('T')[0]} />
          </div>
          
           
        <label htmlFor="" style={{display:"block", float: "left", paddingTop:"10px", paddingLeft: "10px"}}> <b>Task for the Day:</b> </label>
         <input type="text" placeholder='Share us your task' value={task} onChange={(e)=> setTask(e.target.value)} style={{width:"90%", marginBottom:"10px"}}/>
        <button type='submit' style={{display:"block", float: "right",}}>Save</button>
        </form>
  <List2 yourtask={yourtask} Remove = {Remove} Delete={Delete}/>
         
    </div>   {console.log(dateToday)}
    </div>
 
    )
}

export default Task