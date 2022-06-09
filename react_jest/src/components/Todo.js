import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Todo = () => {
    return (
        <TodoContainer>
            <h1>TODO</h1>
            <div className="todo-top">
                <input type="text" name='addTodo' placeholder='Add a new task here ...' />
                <button>Add</button>
            </div>
            <div className="todo-main">
                <div className="todo-middle"></div>
                <div className="todo-bottom">
                    <span>tasks left</span>
                    <Link to={'/followers'}> <span>Followers</span></Link>
                </div>
            </div>

        </TodoContainer>
    )
}

const TodoContainer = styled.div`
    border: 2px dashed red;
    position: absolute;
    width: 70%;
    height: 70%;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    flex-direction: column;

    h1 {
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
        text-shadow: 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.342);
        font-weight: 500;
        color: #fff;
        margin-bottom: 10px;
    }

    .todo-top {
        display: flex;
        padding: 5px;
        background: #fff;
        margin-bottom: 10px;
        
        input {
            padding: 5px;
            flex: 1;
            margin-right: 10px;
            border: none;
        }
        button {
            padding: 5px 20px;
            background: #038C65;
            color: #fff;
            border-radius: 3px;
            border: none;
            cursor: pointer;
        }
    }

    .todo-main {
        display: flex;
        flex-direction: column;
        flex: 1;    
        padding: 20px 5px; 
        border: 1px dashed green;
        background: #fff;
    }

    .todo-bottom {
        margin-top: auto;
        background: #fff;
        display: flex;
        justify-content: space-between;
    }
`

export default Todo