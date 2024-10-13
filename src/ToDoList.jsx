import React from "react";

export default function ToDoList({tasks}) {
    return(
        <ul>
            {tasks.map((tasks, index) => (
                <li key={index}>{tasks}</li>
            ))}
        </ul>
    );
}