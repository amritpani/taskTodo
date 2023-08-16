import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { AppContext } from "../AppContext";
import TodoList from "./TodoList";

const Todos = () => {
  const { lists, setList, selectedListItemIndex } = useContext(AppContext);
  const [todoName, setTodoName] = useState("");

  const addTodo = () => {
    const newTodo = {
      id: uuid(),
      todoName: todoName,
      isCompleted: false,
    };

    setList((prevLists) => {
      const updatedLists = [...prevLists];
      updatedLists[selectedListItemIndex].allTodos.push(newTodo);
      return updatedLists;
    });

    setTodoName("");
  };

  const handleDeleteTodo = (todoId) => {
    setList((prevLists) => {
      const updatedLists = [...prevLists];
      const todos = updatedLists[selectedListItemIndex].allTodos;
      const todoIndex = todos.findIndex((todo) => todo.id === todoId);
      if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
      }
      return updatedLists;
    });
  };

  const handleToggleTodo = (todoId) => {
    setList((prevLists) => {
      const updatedLists = prevLists.map((list, index) => {
        if (index === selectedListItemIndex) {
          const updatedTodos = list.allTodos.map((todo) => {
            if (todo.id === todoId) {
              return {
                ...todo,
                isCompleted: !todo.isCompleted,
              };
            }
            return todo;
          });

          return {
            ...list,
            allTodos: updatedTodos,
          };
        }
        return list;
      });

      return updatedLists;
    });
  };

  return (
    <div className="mainTodoList">
      {lists[selectedListItemIndex] && (
        <>
          <header>
            <h3>{lists[selectedListItemIndex].listName}</h3>
          </header>
          <div className="info">
            <div className="TodosSection">
              <input
                type="text"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
                required
                placeholder="Add Todo"
                className="Input-Todo"
              />
              <button className="btn2" onClick={addTodo}>
                Add Todo
              </button>
            </div>
            <TodoList
              todos={lists[selectedListItemIndex].allTodos}
              handleDeleteTodo={handleDeleteTodo}
              handleToggleTodo={handleToggleTodo}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Todos;
