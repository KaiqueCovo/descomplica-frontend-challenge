import Modal from 'react-modal';
import CloseIcon from 'assets/close.svg';
import { Container } from './styles';

interface INewStudentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewStudentModal({
  isOpen,
  onRequestClose,
}: INewStudentModalProps) {
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseIcon} alt="Fechar" />
      </button>
      <Container>
        <h2>Cadastrar aluno</h2>

        <input placeholder="Nome" />
        <input placeholder="CPF" />
        <input placeholder="Email" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
