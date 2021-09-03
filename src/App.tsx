import { useState, useCallback } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import { Header } from 'components/Header';
import { NewStudentModal } from 'components/NewStudentModal';
import { Table } from 'components/Table';
import { api } from 'services/api';
import { GlobalStyle } from './styles/global';

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
    </ApolloProvider>
  );
}

export default App;
