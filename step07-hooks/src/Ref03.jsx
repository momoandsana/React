import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const Ref03 = () => {
     console.log("Ref03 component");
     // const [count,setCount]=useState(0);// 값이 변경되면 리랜더링
     const countRef=useRef(0); // 값이 변경되어도 리랜더링되지 않는다, 그러나 값은 내부적으로 바뀌고 있음
     let countLet=0;
     /*
     let는 함수가 호출되면 0으로 초기화
     */

     const[render,setRender]=useState(0);

     const letCheck=()=>{
          countLet++;
          console.log("countLet = "+countLet);
     }

     const refCheck=()=>{
          countRef.current=countRef.current+1;
          console.log("countRef.current = "+countRef.current);
     }

     return (
          <div>
               <h3> Ref 와 let 비교</h3>
               <p>let : {countLet}
                    <button onClick={letCheck}>letUp</button></p>
                    
               <p>ref : {countRef.current}
               <button onClick={refCheck}>refUp</button>
               </p>
               <button onClick={()=>setRender(render+1)}>리랜더링</button>
               {/* let 은 이거 누르면 초기화, ref는 값을 유지 */}
          </div>
     );
};

export default Ref03;