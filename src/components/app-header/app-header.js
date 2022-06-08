import React from "react";
import "./app-header.css";
import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
        h1 {
            font-size: 26px;
            color: ${props => props.colored ? 'red' : 'blue'};
            :hover {
                color: purple
            }
        }
        h2 {
            font-size: 1.2rem;
            color: grey;
        }
`

const AppHeader = ({allPosts, liked}) => {
    return ( 
        <Header colored>
            <h1>Оставь свою заметку</h1>
            <h2>Из {allPosts} записей понравилось {liked}</h2>
        </Header>
    )
};

export default AppHeader;