import React, { FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import { TaskType } from "../../types/Task";

type Props = {
    inputText: string;
    setInputText: any;
    taskList: TaskType[];
    setTaskList: any;
};

export const AddTaskInput = (props: Props) => {
    const { inputText, setInputText, taskList, setTaskList } = props;

    const handleChangeText = (e: any) => {
        setInputText(e.target.value);
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        //カードを追加する
        if (inputText === "") return;
        const taskId = uuidv4();
        setTaskList([
            ...taskList,
            {
                id: taskId,
                draggableId: `task-${taskId}`,
                text: inputText,
            },
        ]);
        setInputText("");
    };
    return (
        <div className="mb-4">
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="ここに入力してください"
                    onChange={handleChangeText}
                    value={inputText}
                />
            </form>
        </div>
    );
};
