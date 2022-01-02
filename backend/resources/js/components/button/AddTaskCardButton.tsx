import React from "react";
import { v4 as uuid } from "uuid";
import { TaskCardType } from "../../types/TaskCard";

type Props = {
    taskCardList: TaskCardType[];
    setTaskCardList: any;
};

export const AddTaskCardButton = (props: Props) => {
    const { taskCardList, setTaskCardList } = props;
    const onCliclAddTaskCard = () => {
        // タスクカードを追加する
        const taskCardId = uuid();
        setTaskCardList([
            ...taskCardList,
            {
                id: taskCardId,
                draggableId: `item1+${taskCardId}`,
            },
        ]);
        console.log(taskCardList);
    };
    return (
        <div className="rounded-full ml-4 mt-8 w-8 h-8 shadow-md text-center bg-indigo-400">
            <button onClick={onCliclAddTaskCard} className="py-2">
                ＋
            </button>
        </div>
    );
};
