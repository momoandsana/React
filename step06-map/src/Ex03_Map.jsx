import React from 'react';
import Product from './components/Product';

const Ex03_Map = () => {
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
                    // const(name,price,id)={...product}

                    // <Product key={product.id} name={product.name} price={product.price}/>
                    <Product key={product.id} {...product}/>
                    // 스프레드 연산자, 컴포넌트 가지고 오기
               )
               }
               </ul>
               
          </div>
     );
};

export default Ex03_Map;