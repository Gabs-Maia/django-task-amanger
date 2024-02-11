"use client"
import { useGlobalState } from "@/app/context/globalProvider";
import React from "react";
import styled from "styled-components";

interface Props{
    title: string;
}

function TaskItem({ title }: Props){
    const { theme, deleteTask, updateTask} = useGlobalState();
    return(
        <TaskItemStyled>

        </TaskItemStyled>
    )
}

const TaskItemStyled = styled.div``


export default TaskItem;