import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../types/Task";
import { TaskCardType } from "../types/TaskCard";
import { DeleteTaskCardButton } from "./button/DeleteTaskCardButton";
import { TaskCardTitle } from "./button/TaskCardTitle";
import { AddTaskInput } from "./input/AddTaskInput";
import { Tasks } from "./Tasks";

type Props = {
    index: number;
    taskCard: any;
    taskCardList: TaskCardType[];
    setTaskCardList: any;
};

export const TaskCard = (props: Props) => {
    const { index, taskCard, taskCardList, setTaskCardList } = props;
    const [inputText, setInputText] = useState<string>("");
    const [taskList, setTaskList] = useState<TaskType[]>([]);

    return (
        <Draggable draggableId={taskCard.draggableId} index={index}>
            {(provided) => (
                <div
                    className="bg-white mr-4 rounded overflow-hidden shadow-lg p-4"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                >
                    <div
                        className="flex mb-4 justify-between"
                        {...provided.dragHandleProps}
                    >
                        <TaskCardTitle title={taskCard.title} />
                        <DeleteTaskCardButton
                            taskCardId={taskCard.id}
                            taskCardList={taskCardList}
                            setTaskCardList={setTaskCardList}
                        />
                    </div>
                    <AddTaskInput
                        inputText={inputText}
                        setInputText={setInputText}
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                    <Tasks
                        inputText={inputText}
                        taskList={taskList}
                        setTaskList={setTaskList}
                    />
                </div>
            )}
        </Draggable>
    );
};
