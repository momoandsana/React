import React from 'react';

const Ex02_Map = () => {
     const products=[
          {id:1,name:"짬뽕",price:8000},
          {id:2,name:"짜장",price:6500},
          {id:3,name:"탕수육",price:25000},
          {id:4,name:"짬짜면",price:9000}
     ];
     return (
          <div>
               <ul>
               {
                    products.map((product) => 
                    <li key={product.id}>{product.name} : {product.price}</li>)
               }
               </ul>
               
          </div>
     );
};

export default Ex02_Map;