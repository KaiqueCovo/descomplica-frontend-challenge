import Modal from 'react-modal';
import CloseIcon from 'assets/close.svg';
import { useFormik } from 'formik';
import { StudentValidationSchema } from 'validators/students';
import { Container } from './styles';

interface INewStudentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewStudentModal({
  isOpen,
  onRequestClose,
}: INewStudentModalProps) {
  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      email: '',
    },
    validationSchema: StudentValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
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
      <Container onSubmit={formik.handleSubmit}>
        <h2>Cadastrar aluno</h2>

        <input
          type="text"
          placeholder="Nome"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          placeholder="CPF"
          name="cpf"
          value={formik.values.cpf}
          onChange={formik.handleChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        <button type="submit" disabled={!formik.isValid}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
