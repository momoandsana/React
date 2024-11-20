import React, { useState, useRef } from 'react';
import "./Editor.css";

const Editor = ({ onCreate }) => {
    const [content, setContent] = useState("");
    const contentRef = useRef();

    // 추가 클릭했을 때
    const onSubmit = () => {
        if (content === "") {
            // input 요소에 커서 놓기 - DOM 접근
            contentRef.current.focus(); // 커서 놓기
            return;
        }

        onCreate(content); // App.jsx의 함수 호출
        setContent(""); // 제출했으니까 input 지우기
    };

    // 엔터를 입력했을 때 자동으로 추가
    const onKeyDown = (e) => { // 함수 이름 대소문자 수정
        if (e.key === "Enter") { // e.keyCode 대신 e.key 사용
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                type="text"
                placeholder='새로운 todo'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                ref={contentRef}
                onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
