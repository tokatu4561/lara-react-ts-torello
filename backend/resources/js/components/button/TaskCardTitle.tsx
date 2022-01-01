import React, { ChangeEvent, useState } from "react";

export const TaskCardTitle: React.FC = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [inputCardTitle, setInputCardTitle] = useState<string>("Today");

  const handleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCardTitle(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
