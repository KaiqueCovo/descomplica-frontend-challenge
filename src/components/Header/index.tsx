import logo from 'assets/logo.svg';
import { Container, Content } from './styles';

interface IHeaderProps {
  onOpenNewStudentModal: () => void;
}

export function Header({ onOpenNewStudentModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Descomplica" />
        <button type="button" onClick={onOpenNewStudentModal}>
          Novo aluno
        </button>
      </Content>
    </Container>
  );
}
