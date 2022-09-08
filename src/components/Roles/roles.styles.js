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

export const WrapperNewRole = styled.div`
    display: flex;
    flex-direction: column;

    .input-form-role{
        display: flex;
        margin: 15px 0px 20px 0px;
        width: 80%;
        margin-left:30vh;
    }
    .button-form-role{
        width: 80%;
        height: 40px;
        display: flex;
        margin-left:30vh;
        background-color: var(--green_primary);
    }
    .first-section{
        margin-top: 10vh;
        margin-left:30vh;
        margin-right:5vh;
        display: flex;
        align-items: center;
        justify-content: space-between;
        Button{
            background-color: var(--red_primary);
        }
    }
    .check-button{
        margin-left: 30vh;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`

export const InputData = styled.input`
    border-radius: 4px;
    font: inherit;
    letter-spacing: inherit;
    box-sizing: content-box;
    background: none;
    height: 1.4375em;
    margin: 0;
    display: block;
    min-width: 0;
    width: 77% !important;
    -webkit-animation-duration: 10ms;
    animation-duration: 10ms;
    padding: 16.5px 14px;
    border-color: rgba(0, 0, 0, 0.23);
`