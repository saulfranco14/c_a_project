import styled from 'styled-components';

export const WrapperLogin = styled.section`
    margin: 0;
    padding: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 40%;
    .row-section{
        height:20rem;
        border: 3px solid var(--blue_primary);
        border-radius: 10px;
    }
    .text-login{
        background-color: var(--blue_primary);
        color: var(--white_primary);
        display:flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 40px;
        font-size: 18px;
        font-weight: bold;
        border-radius: 5px 5px 0px 0px;
    }
    .input-login{
        margin-top: 15px;
    }
    .input-form-login{
        margin-top: 15px;
        margin-bottom: 15px;
    }
    .box-form{
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;
    }
    .button-form-login{
        margin-top: 20px;
    }
    @media only screen and (max-width: 768px) {
        width: 90%;
    }
`