import { gql, useQuery } from '@apollo/client';
import { IStudent } from 'interface/student';
import { Container, Content } from './styles';

const GET_STUDENTS = gql`
  query {
    getStudents {
      id
      name
      email
      cpf
    }
  }
`;

export function Table() {
  const { loading, data } = useQuery<{ getStudents: IStudent[] }>(GET_STUDENTS);

  if (loading) return <p>Loading ...</p>;
  return (
    <Container>
      <Content>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CPF</th>
              <th>E-mail</th>
            </tr>
          </thead>

          <tbody>
            {data?.getStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.cpf}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
