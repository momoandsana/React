import React from 'react';
import { useMemo } from 'react';
import { useState } from 'react';

const Memo01 = () => {
     const[list,setList]=useState([1,2,3,4,5,]);
     const[str,setStr]=useState("합계");

     //userMemo 를 이용해서 합 구하기
     const memorizationResult=useMemo(()=>{
          console.log("useMemo call....");

          let sum=0;

          list.forEach((i)=>{
               sum+=i;
          })
          return sum;
     },[list]);// 디펜덴시가 비어 있으므로 state list 가 변경될 때 함수를 실행한다, list 가 들어가면 추가에서는 호출되고, text변경에서는 호출이 되지 않는다

     // list 안에 있는 값을 모두 합하기
     // const getAddResult=()=>{
     //      console.log("getAddResult call....");

     //      let sum=0;

     //      list.forEach((i)=>{
     //           sum+=i;
     //      })
     //      return sum;
     // }
     return (
          <div>
               <h3>userMemo 사용하기</h3>
               {
                    list.map((item,index)=><h6 key={index}>{item}</h6>)
               }
               <h3> {str} : {memorizationResult}</h3>
               <button onClick={()=>setList([...list ,20])}>추가</button>
               {/* 기존의 list를 가지고 오고 20을 추가해줌 */}
               <button onClick={()=>setStr("결과")}>text 변경</button>
          </div>
     );
};

export default Memo01;