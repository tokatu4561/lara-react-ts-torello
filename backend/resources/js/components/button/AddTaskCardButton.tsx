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
  };
  return (
    <div className="addTaskCardBtnArea">
      <button onClick={onCliclAddTaskCard} className="addTaskCardBtn">
        ＋
      </button>
    </div>
  );
};
