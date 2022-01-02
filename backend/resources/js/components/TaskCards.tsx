import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import axios from "../../../node_modules/axios/index";

import { TaskCardType } from "../types/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
    const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([]);
    useEffect(() => {
        getPostsData();
    }, []);

    //一覧情報を取得
    const getPostsData = () => {
        axios
            .get<TaskCardType[]>("api/task_cards")
            .then((response) => {
                setTaskCardList(response.data);
            })
            .catch((e) => {
                console.log("通信に失敗しました");
                console.log(e.message);
            });
    };

    // 現在のタスクカードを保存する
    const onClickSaveTask = () => {};

    const handleDragEnd = (result: any) => {
        // タスクカードを並び替える
        const newTaskList = taskCardList;
        //　ドラッグ対象を切り取ってドロップ対象の場所に追加する
        const removedTask = newTaskList.splice(result.source.index, 1);
        newTaskList.splice(result.destination.index, 0, removedTask[0]);

        console.log(taskCardList);
        setTaskCardList(newTaskList);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        className="flex"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {taskCardList.map((taskCard, index) => (
                            <TaskCard
                                key={taskCard.id}
                                index={index}
                                taskCard={taskCard}
                                taskCardList={taskCardList}
                                setTaskCardList={setTaskCardList}
                            ></TaskCard>
                        ))}
                        {provided.placeholder}
                        <AddTaskCardButton
                            taskCardList={taskCardList}
                            setTaskCardList={setTaskCardList}
                        />
                        <button onClick={onClickSaveTask}>保存する</button>
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};
