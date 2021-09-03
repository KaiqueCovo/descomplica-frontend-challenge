import Modal from 'react-modal';
import CloseIcon from 'assets/close.svg';
import { gql, useMutation } from '@apollo/client';
import { useFormik } from 'formik';
import { StudentValidationSchema } from 'validators/students';
import { Input } from 'components/Input';
import { Container } from './styles';

interface INewStudentModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const CREATE_STUDENT = gql`
  mutation ($name: String!, $email: String!, $cpf: String!) {
    createStudent(data: { name: $name, email: $email, cpf: $cpf }) {
      id
    }
  }
`;

export function NewStudentModal({
  isOpen,
  onRequestClose,
}: INewStudentModalProps) {
  const [createStudent, { data }] = useMutation(CREATE_STUDENT);

  const formik = useFormik({
    initialValues: {
      name: '',
      cpf: '',
      email: '',
    },
    validationSchema: StudentValidationSchema,
    onSubmit: ({ name, email, cpf }) => {
      createStudent({
        variables: { name, email, cpf: cpf.replace(/[^\d]/g, '') },
      });
    },
  });
  return (
    <Modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ariaHideApp={false}
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

        <Input
          type="text"
          placeholder="Nome"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          helperText={formik.errors.name}
          error={!!formik.errors.name && formik.touched.name}
          onBlur={() => formik.setFieldTouched('name', true)}
        />

        <Input
          type="text"
          placeholder="CPF"
          name="cpf"
          mask="999.999.999-99"
          value={formik.values.cpf}
          onChange={formik.handleChange}
          helperText={formik.errors.cpf}
          error={!!formik.errors.cpf && formik.touched.cpf}
          onBlur={() => formik.setFieldTouched('cpf', true)}
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={formik.errors.email}
          error={!!formik.errors.email && formik.touched.email}
          onBlur={() => formik.setFieldTouched('email', true)}
        />

        <button type="submit" disabled={!formik.isValid}>
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}
