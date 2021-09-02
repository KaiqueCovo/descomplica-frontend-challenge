import { Container, Content } from './styles';

export function Table() {
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
            <tr>
              <td>John Doe</td>
              <td>123.123.123-12</td>
              <td>johndoe@example.com</td>
            </tr>
            <tr>
              <td>John doe 2</td>
              <td>123.123.123-12</td>
              <td>johndoe2@example.com</td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
}
