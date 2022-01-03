import React, { useCallback, useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import axios from "../../../node_modules/axios/index";

import { TaskCardType } from "../types/TaskCard";
import { AddTaskCardButton } from "./button/AddTaskCardButton";
import { TaskCard } from "./TaskCard";

export const TaskCards = () => {
    const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPostsData();
    }, []);

    //一覧情報を取得
    const getPostsData = useCallback(() => {
        setLoading(true);
        axios
            .get<TaskCardType[]>("api/task_cards")
            .then((response) => {
                setTaskCardList(response.data);
            })
            .catch((e) => {
                console.log("通信に失敗しました");
                console.log(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    // 現在のタスクカードを保存する
    const onClickSaveTask = async () => {
        setLoading(true);
        await axios
            .post("/api/task_cards/create", {
                taskCards: taskCardList,
            })
            .then((res) => {
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // タスクカードを並び替える
    const handleDragEnd = (result: any) => {
        const newTaskList = taskCardList;
        //　ドラッグ対象を切り取ってドロップ対象の場所に追加する
        const removedTask = newTaskList.splice(result.source.index, 1);
        newTaskList.splice(result.destination.index, 0, removedTask[0]);

        console.log(taskCardList);
        setTaskCardList(newTaskList);
    };

    return (
        <>
            {loading ? (
                <div className="flex justify-center">
                    <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
                </div>
            ) : (
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
                                <button onClick={onClickSaveTask}>
                                    保存する
                                </button>
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            )}
        </>
    );
};
