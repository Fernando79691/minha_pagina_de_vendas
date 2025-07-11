import React from 'react'
import styled from 'styled-components'

const BotaoPadrao = styled.button`
    background: linear-gradient(87.25deg, #103E9E 0%, #049DD9 33.33%, #103E9E 66.66%);
    width: 500px;
    height: 48px;
    border-radius: 28px;
    font-size: 18px;
    font-weight: 700;
    color: #ffffff;
    border: none;

    &:hover {
        background: linear-gradient(87.25deg, #0a46c7 0%, #01b4fb 33.33%, #064bcE 66.66%);
    }
`;

export default function Botao({ children, link }) {
    return (
        <BotaoPadrao onClick={() => window.open(link, "_blank")}>
            {children}
        </BotaoPadrao>
    )
}
