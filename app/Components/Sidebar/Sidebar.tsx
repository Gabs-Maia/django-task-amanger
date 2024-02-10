"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/globalProvider";
import Image from "next/image";

import menu from "@/app/utils/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


function Sidebar(){
    const { theme } = useGlobalState();
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = (link: string) => {
        router.push(link);
};

return(
    <SidebarStyled theme={theme}>
    <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
            <Image width={70} height={70} src="/avatar1.png" alt="profile" />    
        </div> 
        <h1>
            <span>John</span>
            <span>Alegro</span>
        </h1>
    </div>
    <ul className="nav-items">
        {menu.map((item)=>{
            const link = item.link;
            return(
              <li 
                className={`nav-item ${pathname === link ? "active" : ""}`} 
                onClick={() => {
                    handleClick(item.link);
                }}
                >
                 {item.icon}
                 <Link href={item.link}>{item.title}</Link>    
              </li>
            )
        })}
    </ul>
</SidebarStyled>
);
}

const SidebarStyled = styled.nav`
    position: relative;
    width: ${(props) => props.theme.sidebarWidth};
    background-color: ${(props) => props.theme.borderColor2};
    border: 2px solid ${(props) => props.theme.borderColor2};
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    color: ${(props) => props.theme.colorGrey3};

    .profile{
        margin: 1.5rem;
        padding: 1rem 0.8rem;
        position: relative; 

        boder-radius: 1rem;
        cursor: pointer;

        font-weight: 500;
        color: ${(props) => props.theme.colorGrey0};

        display: flex;
        align-items: center;

        .profile-overlay{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%
            backdrop-filter: blur(10px);
            z-index: 0;
            background: ${(props) => props.theme.colorBg3};
            transition: all 0.55s linear;
            border-radius: 1rem;
            border: 2px solide ${(props) => props.theme.borderColor2};

            opacity: 0.2;
        }

        h1{
           font-size: 1.2rem;
           display: flex;
           flex-direction: column; 

           line-height = 0.9
        }
    }
`;
export default Sidebar;