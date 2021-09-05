import { toast } from 'react-toastify';

interface INotify {
  message: string;
  type: 'success' | 'info' | 'warn' | 'error'
}

export const notify = ({message, type}: INotify) => {
  toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
}
