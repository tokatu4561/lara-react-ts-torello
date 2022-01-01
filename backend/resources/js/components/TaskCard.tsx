import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskType } from "../types/Task";
import { TaskCardType } from "../types/TaskCard";
import { DeleteTaskCardButton } from "./button/DeleteTaskCardButton";
import { TaskCardTitle } from "./button/TaskCardTitle";
import { AddTaskInput } from "./input/AddTaskInput";
import { Tasks } from "./Tasks";

type Props = {
  key: number;
  index: number;
  draggableId: string;
  taskCardList: TaskCardType[];
  setTaskCardList: any;
};

export const TaskCard = (props: Props) => {
  const { key, index, draggableId, taskCardList, setTaskCardList } = props;
  const [inputText, setInputText] = useState<string>("");
  const [taskList, setTaskList] = useState<TaskType[]>([]);

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided) => (
        <div
          className="taskCard"
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className="flex-area" {...provided.dragHandleProps}>
            <TaskCardTitle />
            <DeleteTaskCardButton
              taskCardId={key}
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
