import React, { useState, useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';

const mockData = [
    { id: 0, isDone: false, content: "내용1", date: new Date().getTime() },
    { id: 1, isDone: false, content: "내용2", date: new Date().getTime() },
    { id: 2, isDone: false, content: "내용3", date: new Date().getTime() },
];

function App() {
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3); // 기본 mock 데이터가 2까지 있었으니까 3부터 시작

    // 추가하기, content를 전달받음 - Editor로부터
    const onCreate = (content) => {
        const newTodo = { id: idRef.current++, isDone: false, content: content, date: new Date().getTime() };
        setTodos([newTodo, ...todos]);
    };

    // 수정하기
    const onUpdate = (targetId) => {
        setTodos(todos.map((todo) => 
            todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
        ));
    };

    // 삭제하기
    const onDelete = (targetId) => {
        const filteredTodos = todos.filter((todo) => todo.id !== targetId);
        setTodos(filteredTodos);
    };

    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
            {/* props로 todos, onUpdate, onDelete 전달 */}
        </div>
    );
}

export default App;
