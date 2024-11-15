import React from 'react';
import "./Product.css";

const Product = ({name,price,id}) => {
     return (
          // 컴포넌트의 이름과 같은 className 만들기
          <div className="Product">
               <h3 className="h3">{id} {name}</h3>
               <div className="div">{price}</div>
          </div>
     );
};

export default Product;