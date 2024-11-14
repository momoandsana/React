import React from 'react';
import { useState } from 'react';

const EX02_form = () => {
     const [name,setName]=useState("희정");
     const [age,setAge]=useState(20);

     const inputName=(e)=>{// e는 이벤트 객체, e가 아니어도 된다, inputName 함수는 이벤트 핸들러
          // console.log(e);
          // console.log(e.target);
          // console.log(e.target.value);
          // console.log(e.target.name);

          const{name,value,type}=e.target;// 구조분해할당
          console.log(name);
          console.log(value);
          console.log(type);

          //state 변경
          setName(e.target.value);// 내가 입력한 값으로 상태 변경

     }

     const inputAge=(e)=>{// e
          console.log("e = " + e);// 이거는 string 으로 변환
          console.log(e);// 이거는 객체로 받는다
          console.log(e.target);
          console.log(e.target.value);
          console.log(e.target.name);

          setAge(e.target.value);

     }

     return (
          <div>
               <h2> 폼 입력값 - state Test</h2>
               이름 : <input type="text" value={name} name="username" onChange={inputName}/>
               {/* 나이 : <input type="text" value={age} name="agename" onChange={inputAge}/> */}
               나이 : <input type="text" value={age} name="agename" 
               onChange={(e)=>setAge(e.target.value)}/>
               {/* onChange 는 입력 필드의 값이 변경될 때마다 호출
               지금 코드는 바로 값을 입력 받아 상태변경을 해버림, 익명함수 사용 */}
          </div>
     );
};

export default EX02_form;