import React, { useState } from "react";

let initialCounter = [0, 0, 0, 0, 0, 0, 0, 0];

const ArrayCounter = () => {
  const [count, setCount] = useState(initialCounter);

  const handleClick = (index) => {
    const addCounter = count.map((c, i)=>{
        if(i===index){
            return c+1;
        }
        else{
            return c;
        }
    })
    setCount(addCounter)
  }

  return (
    <>
      {count.map((count, index) => {
        return (
          <li>
            {count}:<button onClick={()=>handleClick(index)}>+1</button>
          </li>
        );
      })}
    </>
  );
};

export default ArrayCounter;
