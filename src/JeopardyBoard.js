import { useEffect, useState } from 'react'
import HeaderRow from './rows/HeaderRow';
import Row100 from './rows/Row100';
import Row200 from './rows/Row200'
import Row300 from './rows/Row300'
import Row400 from './rows/Row400'
import Row500 from './rows/Row500'
import Modal from './Modal';

function JeopardyBoard() {
  const cell_styles = "border border-black text-yellow-400 font-bold text-center p-2"
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clickedCell, setClickedCell] = useState(null)

  const [clickedCells, setClickedCells] = useState(() => {
      const clickedCells = sessionStorage.getItem('clickedCells');
      return clickedCells ? JSON.parse(clickedCells) : {
        row100: [],
        row200: [],
        row300: [],
        row400: [],
        row500: []
      };
    });

  const handleCellClick = (row, index) => {
    setClickedCells((prev) => {
      const updatedRow = [...prev[row]];
      if (!updatedRow.includes(index)) {
        updatedRow.push(index);
      }
      return { ...prev, [row]: updatedRow };
    });
  };

  useEffect(() => {
    sessionStorage.setItem('clickedCells', JSON.stringify(clickedCells));
  }, [clickedCells]);

  return (
    <div className="bg-blue-800 grid grid-cols-5 grid-rows-6">
      <HeaderRow/>
      <Row100 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} handleCellClick={handleCellClick} clickedCells={clickedCells.row100} />
      <Row200 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} handleCellClick={handleCellClick} clickedCells={clickedCells.row200} />
      <Row300 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} handleCellClick={handleCellClick} clickedCells={clickedCells.row300} />
      <Row400 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} handleCellClick={handleCellClick} clickedCells={clickedCells.row400} />
      <Row500 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} handleCellClick={handleCellClick} clickedCells={clickedCells.row500} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cell={clickedCell} />
    </div>
  );
}

export default JeopardyBoard;