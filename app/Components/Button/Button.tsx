"use client";
import { useGlobalState } from "@/app/context/globalProvider";

import React from "react";
import styled from "styled-components";

interface Props {
    icon?: React.ReactNode;
    name?: string;
    background?: string;
    padding?: string;
    borderRad?: string;
    fw?: string;
    fs?: string;
    click?: () => void;
    type?: "submit" | "button" | "reset" | undefined;
    border?: string;
    color?: string;
}

function Button({
    icon,
    name,
    background,
    padding,
    borderRad,
    fw,
    fs,
    click,
    type,
    border,
    color,
}: Props){
    const { theme } = useGlobalState();

    return (
        <ButtonStyled
            type={type}

        >
            {icon && icon}
            {name}
        </ButtonStyled>
    )

}

const ButtonStyled = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colorGrey2};
    z-index: 5; 
    cursor: pointer;

    transition: all 0.55s ease-in-out;
`;

export default Button;