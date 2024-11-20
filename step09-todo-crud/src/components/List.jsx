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

    return (
        <div className="List">
            <h4>ToDo List 😸</h4>
            <input
                placeholder='검색어를 입력해주세요.'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="todos_wrapper">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                ))}
            </div>
        </div>
    );
};

export default List;
