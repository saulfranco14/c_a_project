import styled from 'styled-components';

export const SideBar = styled.div`
    position: fixed;
    height: 93vh;
    background-color: var(--blue_primary);
    margin-top: 4rem;
    color: var(--white_primary);
    font-size: 18px;
    width: 180px;
    ul{
        li{
            margin:10px 10px 20px 10px;
            list-style: none;
            text-transform:capitalize;
            cursor: pointer;
            font-weight: bold;
        }
        li:hover{
            border-bottom: 3px solid var(--white_primary);
            width:50px;
        }
    }
`