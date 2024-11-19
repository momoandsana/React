import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Ref04 = () => {
     const[count,setCount]=useState(0);
     const countRef=useRef(0);

     useEffect(()=>{
          console.log("useEffect call...");

          // setCount(count+1);//state 변경 - 무한루프

          countRef.current=countRef.current+1;// ref로 변경


     })

     return (
          <div>
             <h3>리랜더링 횟수</h3>  
             <p>count:{count} / {countRef.current}</p>
             <button onClick={()=>setCount(count+1)}>Up</button>
          </div>
     );
};

export default Ref04;