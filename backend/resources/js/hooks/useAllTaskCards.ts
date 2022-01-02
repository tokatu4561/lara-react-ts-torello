import React, { useEffect, useState } from "react";
import { TaskCardType } from "../types/TaskCard";

export const useAllTaskCards = () => {
    const [taskCardList, setTaskCardList] = useState<TaskCardType[]>([]);

    return {};
};
