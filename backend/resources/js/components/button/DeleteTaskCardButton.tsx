import React from "react";
import { TaskCardType } from "../../types/TaskCard";

type Props = {
  taskCardId: number;
  taskCardList: TaskCardType[];
  setTaskCardList: any;
};

export const DeleteTaskCardButton = (props: Props) => {
  const { taskCardId, taskCardList, setTaskCardList } = props;

  const deleteTaskCard = (id: number) => {
    //タスクカードを削除する
    let newTaskCardList = taskCardList.filter((taskCard) => id !== taskCard.id);
    setTaskCardList(newTaskCardList);
  };
  return (
    <div>
      <button
        className="taskCardDeleteBtn"
        onClick={() => deleteTaskCard(taskCardId)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};
