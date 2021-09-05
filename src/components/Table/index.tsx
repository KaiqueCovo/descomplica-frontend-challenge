import { gql, useQuery, useSubscription } from '@apollo/client';
import { IStudent } from 'interface/student';
import { useEffect, useState } from 'react';
import { formatStringToCPF } from 'utils/formatStringToCPF';
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

const STUDENTS_SUBSCRIPTION = gql`
  subscription {
    studentAdded {
      id
      name
      email
      cpf
    }
  }
`;

export function Table() {
  const [students, setStudents] = useState<IStudent[]>([]);

  const { loading, data: query } =
    useQuery<{ getStudents: IStudent[] }>(GET_STUDENTS);
  const { data: subscription } = useSubscription(STUDENTS_SUBSCRIPTION);

  useEffect(() => {
    if (query) setStudents(query.getStudents);
  }, [query]);

  useEffect(() => {
    if (subscription)
      setStudents((current) => [...current, subscription.studentAdded]);
  }, [subscription]);

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
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{formatStringToCPF(student.cpf)}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
