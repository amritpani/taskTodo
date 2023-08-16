const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
  const handleDelete = (todoId) => {
    handleDeleteTodo(todoId);
  };

  const handleToggle = (todoId) => {
    handleToggleTodo(todoId);
  };

  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-show">
          <div
            className={`todo-name ${todo.isCompleted ? "completed-task" : ""}`}
          >
            <span
              style={{
                textDecoration: todo.isCompleted ? "line-through" : "none",
              }}
            >
              {todo.todoName}
            </span>
          </div>
          <div className="todo-btn">
            <button
              className="mark-as-read-btn"
              onClick={() => handleToggle(todo.id)}
            >
              ✅
            </button>
            <button
              className="delete-btn2"
              onClick={() => handleDelete(todo.id)}
            >
              ⛔
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
