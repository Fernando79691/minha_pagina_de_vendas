import React from 'react'
import styled from 'styled-components'
import celular from '../../../public/assets/img/celular.webp'

const SessaoDoisContainer = styled.section`
  background: linear-gradient(90.95deg, #0D1F47 0%, #142C62 30%, #0A1329 63%, #0C0F18 100%);
  width: 100%;
  height: 604px;
  display: flex;
  justify-content: center;
`;

const Conteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .imagem-container {
    position: relative;
    width: 478px;
    height: 483px;
    margin-right: 100px;

    img {
      width: 100%;
      height: 100%;
    }

    span {
      position: absolute;
      font-size: 40px;
      font-weight: bold;
      color: rgba(255, 255, 255, 0.06);
      text-transform: uppercase;
      white-space: nowrap;
    }

    .eleve-top {
      top: 40%;
      left: -20px;
    }

    .eleve-middle {
      top: 0%;
      right: 45px;
    }

    .eleve-bottom {
      bottom: 90px;
      right: -80px;
    }
  }

  .textos {
    width: 498px;
    text-align: center;

    h3 {
      font-size: 34px;
      font-weight: 700;
      background: linear-gradient(87.52deg, #EFC6D3 0%, #049DD9 33.33%, #EFC6D3 66.67%, #2793F2 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }

    p {
      font-size: 21px;
      font-weight: 400;
      color: #ffffff;

      strong {
        font-weight: 700;
      }
    }
  }
`;

const SessaoDoisRodape = styled.div`
  background: linear-gradient(270deg, #049DD9 0%, #215DE4 50%, #061129 100%);
  width: 100%;
  height: 54px;
`;

export default function SessaoDois() {
    return (
        <>
            <SessaoDoisContainer>
                <Conteudo>
                    <div className="imagem-container">
                        <img src={celular} alt="imagem de celular proposta comercial" />
                        <span className="eleve-top">ELEVE O</span>
                        <span className="eleve-middle">ELEVE O</span>
                        <span className="eleve-bottom">ELEVE O</span>
                    </div>

                    <div className='textos'>
                        <h3>
                            Domine o seu negócio com um <br />método descomplicado!
                        </h3>
                        <p>
                            Dentro do Doc Master você terá acesso às <br />
                            mesmas ferramentas que eu uso dentro da <br />
                            minha operação, para fechar contratos, começar <br />
                            projetos e controlar gastos, <strong>tudo 100% editável!</strong>
                        </p>
                    </div>
                </Conteudo>
            </SessaoDoisContainer>
            <SessaoDoisRodape />
        </>
    )
}
