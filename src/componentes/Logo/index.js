import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const ContainerLogo = styled.div`
  display: flex;
  font-size: 30px;
`;

const LogoIMG = styled.img`
  margin-right: 10px;
`;

export default function Logo() {
  return (
    <ContainerLogo>
      <LogoIMG src={logo} alt='Logo' />
      <p>
        <strong>Alura</strong>Books
      </p>
    </ContainerLogo>
  );
}
