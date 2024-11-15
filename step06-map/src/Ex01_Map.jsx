import React from 'react';

const Ex01_Map = () => {
const items=["짬뽕","짜장","탕수육","짬짜면"];

     return (
          <div>
               <ul>
               {
                    items.map((item,index)=><li key={index}>{item} / {index}</li>)
                    // 리액트의 map에서는 키가 필요하다
               }
               </ul>
          </div>
     );
};

export default Ex01_Map;