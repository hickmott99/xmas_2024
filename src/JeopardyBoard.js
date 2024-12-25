import { useState } from 'react'
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

  return (
    <div className="bg-blue-800 grid grid-cols-5 grid-rows-6">
      <HeaderRow/>
      <Row100 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} />
      <Row200 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} />
      <Row300 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} />
      <Row400 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} />
      <Row500 cell_styles={cell_styles} openModal={() => setIsModalOpen(true)} setClickedCell={setClickedCell} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} cell={clickedCell} />
    </div>
  );
}

export default JeopardyBoard;