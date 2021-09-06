import { useState, useCallback } from 'react';
import { ApolloProvider } from '@apollo/client';
import { Header } from 'components/Header';
import { NewStudentModal } from 'components/NewStudentModal';
import { Table } from 'components/Table';
import { api } from 'services/api';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

export function App() {
  const [isNewStudentModalOpen, setIsNewStudentModalOpen] = useState(false);

  const handleOpenNewStudentModal = useCallback(() => {
    setIsNewStudentModalOpen(true);
  }, []);

  const handleCloseNewStudentModal = useCallback(() => {
    setIsNewStudentModalOpen(false);
  }, []);

  return (
    <ApolloProvider client={api}>
      <Header onOpenNewStudentModal={handleOpenNewStudentModal} />
      <Table />
      <NewStudentModal
        isOpen={isNewStudentModalOpen}
        onRequestClose={handleCloseNewStudentModal}
      />
      <GlobalStyle />
      <ToastContainer />
    </ApolloProvider>
  );
}

export default App;
