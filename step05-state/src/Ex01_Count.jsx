import React from 'react';

import './Ex01_Count.css';
import { useState } from 'react';
const Ex01_Count = () => {
    console.log("call...");
    let i=0;

    const[no,setNo]=useState(0);// no 변수, setNo는 함수, 이게 훅

    //더하기
    const plusFun=() => {
        setNo(no+1);
        i++;
    }

    //빼기
const minusFun = () => {
    setNo(no-1);
    i--;
    }

    return (
        <div className="Ex01_Count">
            <button onClick={minusFun}>빼기</button>
            <span>{i}/{no}</span>
            <button onClick={plusFun}>더하기</button>
        </div>
    );
};

export default Ex01_Count;