import React from 'react';
import planilha from '../../../public/assets/img/planilha.webp';
import styled from 'styled-components';

const SessaoQuatroContainer = styled.section`
  background: #fff;
  width: 100%;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  gap: 40px;
`;

const Texto = styled.div`
  flex: 1;

  a {
    font-size: 15px;
    text-decoration: none;
    display: block;
    margin-bottom: 4px;
  }

  h4 {
    font-size: 34px;
    font-weight: 700;
    margin: 0 0 8px 0;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 0;
    color: #333;
  }
`;

const Imagem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function SessaoQuatro() {
    return (
        <SessaoQuatroContainer>
            <Conteudo>
                <Texto>
                    <a href="">PLANILHA MASTER</a>
                    <h4>Conheça a planilha master</h4>
                    <p>
                        Com essa planilha você vai ter o controle<br /> financeiro do seu negócio e também relatórios<br />
                        para entender quais produtos você mais<br /> vende e qual margem de lucro de cada um.<br />
                        Quanto você recebe de cada cliente e o saldo<br /> devedor do mesmo, dentre outras análises.<br />
                        Veja o vídeo e veja mais.
                    </p>
                </Texto>
                <Imagem>
                    <img src={planilha} alt="imagem de uma planilha" />
                </Imagem>
            </Conteudo>
        </SessaoQuatroContainer>
    );
}
