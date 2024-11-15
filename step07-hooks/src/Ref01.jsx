import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

const Ref01 = () => {
     console.log("Ref01 컴포넌트 call...");
     const inputRef=useRef();// Dom 요소 접근
     const [no,setNo]=useState(0);


     // inputRef.current.focus();// 커서 놓기, 여기서는 코드 안 먹힘, Dom 을 만들기 전이기 때문에. useEffect 안에 들어가야 한다

  // 마운트, update 될 때
//   useEffect(()=>{
//     console.log("userEffect 랜더링...");
//     console.log(inputRef.current);

//     inputRef.current.focus();// 커서 놓기, Dom 이 만들어지고 useEffect 가 호출되기 때문에 여기서 focus 코드 넣어야 한다
//   });

  // 마운트 될 때만 하고 싶다
  useEffect(()=>{
     console.log("userEffect 랜더링...🙌");
     console.log(inputRef.current);
 
     inputRef.current.focus();// 커서 놓기, Dom 이 만들어지고 useEffect 가 호출되기 때문에 여기서 focus 코드 넣어야 한다
   },[]);

  const login=()=>{
     setNo(no+1);// state 의 값이 변경되고 화면을 다시 랜더링한다
     alert(`${inputRef.current.value}님 로그인 중입니다`);
     inputRef.current.value='';
     inputRef.current.focus();
  }

     return (
          <div>
               no:{no}<br/>
               <input type="text" ref={inputRef}/>
               <button onClick={login}>로그인하기 </button>
          </div>
     );
};

export default Ref01;