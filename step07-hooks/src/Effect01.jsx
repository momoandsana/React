import React, { useEffect, useState } from 'react';

const Effect01 = () => {
    const [num, setNo] = useState(0); 
    const[search,setSearch] = useState(10);

    useEffect(() => {// 마운트될 때, 업데이트될 때
        console.log("useEffect... 렌더링될 때 실행됩니다");
    }); 

    useEffect(()=>{
     console.log("1. userEffect.. 최초에 한 번만")
    },[]);//두 번째 인수에 빈 배열[] 을 전달하면 최초에 한 번만 실행

    useEffect(()=>{
    console.log("2. useEffect[search].. search state update...");

},[search]);// search 가 변할 때 같이 호출

useEffect(()=>{
     console.log("3. useEffect[search].. search state update...");
     test();
 
 },[search]);// search 가 변할 때 같이 호출

const test=()=>{
     setNo(100);// 상태값이 변경되기 때문에 리랜더링이 된다
}

    return (
        <div>
            <h1>Effect 함수 테스트</h1>
            <h4>num: {num}</h4>
            <button onClick={() => setNo(num + 1)}>증가</button>
            <hr/>
            <h4>search : {search}</h4>
            <button onClick={()=>setSearch(search+2)}>검색</button>
        </div>
    );
};

export default Effect01;
