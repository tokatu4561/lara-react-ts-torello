import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { TaskType } from "../types/Task";
import { Task } from "./Task";

type Props = {
  inputText: string;
  taskList: Array<TaskType>;
  setTaskList: any;
};

export const Tasks = (props: Props) => {
  const { taskList, setTaskList } = props;

  const handleDragEnd = (result: any) => {
    // タスクを並び替える
    let newTaskList = taskList;
    //　ドラッグ対象を切り取ってドロップ対象の場所に追加する
    const removedTask = newTaskList.splice(result.source.index, 1);
    taskList.splice(result.destination.index, 0, removedTask[0]);

    setTaskList(newTaskList);
  };
  return (
    <div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task: TaskType, index: number) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    taskList={taskList}
                    setTaskList={setTaskList}
                    task={task}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
