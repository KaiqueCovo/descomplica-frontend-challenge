import logo from 'assets/logo.svg';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Descomplica" />
        <button type="button">Novo aluno</button>
      </Content>
    </Container>
  );
}
