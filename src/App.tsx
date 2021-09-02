import { useState, useCallback } from 'react';
import { Header } from 'components/Header';
import { NewStudentModal } from 'components/NewStudentModal';
import { Table } from 'components/Table';
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
    <>
      <Header onOpenNewStudentModal={handleOpenNewStudentModal} />
      <Table />
      <NewStudentModal
        isOpen={isNewStudentModalOpen}
        onRequestClose={handleCloseNewStudentModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
