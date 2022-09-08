import styled from 'styled-components';
export const WrapperRol = styled.div`
    display: flex;
    flex-direction: column;

    .text-title{
        margin-top: 8%;
        margin-left:30vh;
        font-weight: bold;
        font-size: 24px;
        color: var(--blue_primary);
    }

    .grid-role{
        height: 70vh;
        width: 82vw;
        margin-left: 30vh;
    }

    .first-section{
        display: flex;
        flex-direction : row;
        align-items: center;
        justify-content: space-between;
    }
    .button-create{
        height: 40px;
        margin-top: 6vw;
        margin-right: 3%;
    }
`