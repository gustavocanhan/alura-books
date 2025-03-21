/* eslint-disable jsx-a11y/alt-text */
import { livros } from './dadosUltimosLancamentos.js';
import { Titulo } from '../Titulo/index.js';
import livroAngular from '../../imagens/livro2.png';
import CardRecomenda from '../CardRecomenda/index.js';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  padding-bottom: 20px;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor='#EB9B00' tamanhoFonte='36px'>
        ÚLTIMOS LANÇAMENTOS
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} />
        ))}
      </NovosLivrosContainer>
      <CardRecomenda
        titulo='Talvez você se interesse por'
        subtitulo='Angular 11'
        descricao='Construindo uma aplicação com a plataforma Google'
        image={livroAngular}
      />
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
