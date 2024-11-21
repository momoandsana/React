import React, { useState } from 'react';
import "./List.css";
import TodoItem from './TodoItem';

const List = ({ todos, onUpdate, onDelete }) => { // props 구조 분해
    const [search, setSearch] = useState("");

    // todos가 배열인지 확인하는 방어 코드 추가
    if (!Array.isArray(todos)) {
        console.error("Error: todos is not an array", todos);
        return null; // 또는 에러 메시지를 보여줄 수 있습니다.
    }

    // 검색어를 입력했을 때 검색어를 포함한 todos 정보 조회
    const getFilterData=()=>{
     if(search==="")return todos;

     const searchedTodos
     =todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()));
     return searchedTodos;
    }

    const filteredTodos=getFilterData();// lIst 컴포넌트가 리랜더링 될 때마다

    const getAnalyzedData=()=>{
        console.log("getAnalyzedData call...");

        const totalCount=todos.length;
        const doneCount=todos.filter((todo)=>todo.isDone).length;
        const notDoneCount=totalCount-doneCount;

        return {totalCount,doneCount,notDoneCount};
    }

    const{totalCount,doneCount,notDoneCount}=getAnalyzedData();

    return (
        <div className="List">
            <h4>ToDo List 😸</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>doneCount : {doneCount}</div>
                <div>notDoneCount : {notDoneCount}</div>
            </div>
            <input
                placeholder='검색어를 입력해주세요.'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="todos_wrapper">
                {
               //  todos.map((todo) => (
                    filteredTodos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default List;
