import InputMask from 'react-input-mask';
import { Container } from './styles';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mask?: string;
  helperText?: string;
  error?: boolean;
}

export function Input({ mask, helperText, error, ...resProps }: IInputProps) {
  return (
    <Container>
      {mask ? (
        <InputMask mask={mask} {...resProps} className={error ? 'error' : ''} />
      ) : (
        <input {...resProps} className={error ? 'error' : ''} />
      )}

      <small color="red">{error && helperText}</small>
    </Container>
  );
}
