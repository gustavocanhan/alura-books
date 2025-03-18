/* eslint-disable jsx-a11y/alt-text */
import Header from './componentes/Header';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 100%);

  li {
    list-style: none;
  }
`;

export default function App() {
  return (
    <AppContainer>
      <Header />
    </AppContainer>
  );
}
