import React from 'react';
import { useEffect } from 'react';

const Timer = () => {
     useEffect(()=>{
          console.log("Timer userEffect call");
          const timerStop=setInterval(()=>{
               console.log("타이머 실행 중...");
          },1000);

          //정리작업, 정리하지 않으면 백그라운드에서 계속 타이머가 돌고 있는다
          return ()=>{
               console.log("자원을 정리합니다...");
               clearInterval(timerStop);

          };
     },[]);// 최초에 랜덜이 될 때만

     return (
          <div>
               <span>타이머를 시작합니다 - Console 확인</span>
          </div>
     );
};

export default Timer;