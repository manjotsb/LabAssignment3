import React from "react";
import { useState } from "react";
import { View } from "react-native";
import ToDoList from "./src/ToDoList";

export default function App() {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to gym',
    'Walk Dog',
  ])

  return(
    <View>
      <div>
        <h1>To-Do List</h1>
        <ToDoList tasks={tasks}/>
      </div>
    </View>
  );
}