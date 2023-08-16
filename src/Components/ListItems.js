import React from "react";

const ListItems = ({ lists, handleTaskClick, handleDeleteTask }) => {
  return (
    <div>
      {lists.map((list, index) => (
        <div key={list.id} className="Show-list">
          <div className="list" onClick={() => handleTaskClick(index)}>
            {list.listName}
          </div>
          <button
            className="delete-list-btn"
            onClick={() => handleDeleteTask(index)}
          >
            ⛔
          </button>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
