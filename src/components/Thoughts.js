import React, { useEffect, useState } from 'react'
import List from './List';
import '../css/table.css';



const Thoughts = () => {
    const style={border: "1px solid blue", width: "400px", height:"400px"};

    const [id, setId] = useState(Date.now())
    const [date1, setDate1] = useState(new Date().toLocaleDateString() )
    const [date2, setDate2] = useState('')
    const [thoughts, setThoughts] = useState('')
    const [yourthoughts, setYourthoughts] = useState([])
    

    function thoughtssubmit(event){
        event.preventDefault();
         const data = {id: id, date1, thoughts};
      setYourthoughts([...yourthoughts, data]);
      setId(Date.now());
      setThoughts('');
    }

    const Remove = (e) => {
      let numID = parseInt(e.target.id);
      let newList = [...yourthoughts].filter(list => {return list.id !== numID});
      setYourthoughts(newList);
      }
      const Delete = () => {
        setYourthoughts([]);
    };
    useEffect(()=>{
      localStorage.setItem('Thoughts',JSON.stringify(yourthoughts))
    }, [yourthoughts])
    return (
    <div >

        
        <div  style={{border: "5px solid darkblue", width: "400px", height:"400px", borderRadius:"20px"}}> 
        <form onSubmit={(e)=>{thoughtssubmit(e)}}>
          <div style={{display:"block", float: "right", padding:"10px"}}>
             <label htmlFor="" >Date:</label>
            <input type="text" value={date1} onChange={(e)=> setDate1(e.target.value) }style={{width:"60px"}} readOnly/>
          </div>
         
             <label htmlFor="" style={{display:"block", float: "left", paddingTop:"10px", paddingLeft: "10px"}}> <b>Thoughts for the Day:</b> </label>
         <input type="text" placeholder='Share us your thoughts' value={thoughts} onChange={(e)=> setThoughts(e.target.value)} style={{width:"90%", marginBottom:"10px"}}/>
       
      
        <button type='submit' style={{display:"block", float: "right",}}>Save</button>
        </form>
  <List yourthoughts={yourthoughts} Remove = {Remove} Delete={Delete}/>
         
    </div>
    </div>
    )
}

export default Thoughts