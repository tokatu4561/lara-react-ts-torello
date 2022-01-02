import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../types/Task";

type Props = {
    index: number;
    task: TaskType;
    taskList: Array<TaskType>;
    setTaskList: any;
};
export const Task = (props: Props) => {
    const { index, task, taskList, setTaskList } = props;

    const handleDeteleTask = (id: number) => {
        const newTasks = taskList.filter((task: any) => task.id !== id);
        setTaskList(newTasks);
    };
    return (
        <Draggable index={index} draggableId={task.draggableId}>
            {(provided) => (
                <div
                    className="bg-gray-200 p-4 mb-4 border-solid shadow-lg flex justify-between"
                    key={task.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <p className="taskTitle">{task.text}</p>
                    <button
                        className="taskTrashButton"
                        onClick={() => {
                            handleDeteleTask(task.id);
                        }}
                    >
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </div>
            )}
        </Draggable>
    );
};
