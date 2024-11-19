import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Ref02 = () => {
     console.log("Ref02 coponent");
     const [count,setCount]=useState(0);// 값이 변경되면 리랜더링
     const countRef=useRef(0); // 값이 변경되어도 리랜더링되지 않는다, 그러나 값은 내부적으로 바뀌고 있음

     return (
          <div>
               <h3> Ref 와 state 비교</h3>
               <p>state : {count}
                    <button onClick={()=>setCount(count+1)}>stateUp</button></p>
                    
               <p>ref : {countRef.current}
               <button onClick={()=>countRef.current=countRef.current+1}>refUp</button>
               </p>
          </div>
     );
};

export default Ref02;