import React, { useEffect, useState } from 'react';
import Thoughts from './Thoughts';
import Task from './Task';


const Main = () => {
   const style={
      display: "flex", 
      gap: "100px",
      justifyContent: "center",
      marginTop: "100px"
   }
    return (
   <div style={style}>
<Thoughts />
<Task />
   </div>
  )
}

export default Main