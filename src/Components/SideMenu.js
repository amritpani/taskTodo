import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { AppContext } from "../AppContext";
import ListItems from "./ListItems";

const Sidebar = () => {
  const { lists, setList, setSelectedListItemIndex } = useContext(AppContext);
  const [listName, setListName] = useState("");

  const addList = () => {
    const newList = {
      id: uuid(),
      listName: listName,
      allTodos: [],
    };
    setList((prevLists) => [...prevLists, newList]);
    setListName("");
  };

  const handleTaskClick = (index) => {
    setSelectedListItemIndex(index);
  };

  const handleDeleteTask = (index) => {
    setList((prevLists) => {
      const updatedLists = [...prevLists];
      updatedLists.splice(index, 1);
      return updatedLists;
    });
    setSelectedListItemIndex(null);
  };

  return (
    <div className="sidebar">
      <h3 className="TaskTitleh3">Task Title</h3>
      <div>
        <input
          type="text"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          placeholder="Add Your Task Title"
          className="taskInput"
        />
        <button className="btn1" onClick={addList}>
          Add
        </button>
      </div>
      <ListItems
        lists={lists}
        handleTaskClick={handleTaskClick}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default Sidebar;
