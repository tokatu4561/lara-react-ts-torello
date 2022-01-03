import React, { ChangeEvent, useState } from "react";
import { TaskCardType } from "../../types/TaskCard";

type Props = {
    taskCard: TaskCardType;
    taskCardList: TaskCardType[];
    setTaskCardList: any;
};

export const TaskCardTitle = (props: Props) => {
    const { taskCard, taskCardList, setTaskCardList } = props;

    const [isClick, setIsClick] = useState<boolean>(false);
    const [inputCardTitle, setInputCardTitle] = useState<string>(
        taskCard.title
    );

    const handleClick = () => {
        setIsClick(true);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputCardTitle(e.target.value);
        console.log(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTaskCardList = taskCardList.map((iteraTaskCard) => {
            if (iteraTaskCard.id !== taskCard.id) {
                return iteraTaskCard;
            }
            iteraTaskCard.title = inputCardTitle;
            return iteraTaskCard;
        });
        setTaskCardList(newTaskCardList);

        setIsClick(false);
    };
    const handleBlur = (e: React.FormEvent) => {
        setIsClick(false);
    };

    return (
        <div className="taskCardTitleInputArea" onClick={handleClick}>
            {isClick ? (
                <form onSubmit={handleSubmit}>
                    <input
                        autoFocus
                        className="taskCardTitleInput"
                        type="text"
                        value={inputCardTitle}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={10}
                    />
                </form>
            ) : (
                <h3>{inputCardTitle}</h3>
            )}
        </div>
    );
};
