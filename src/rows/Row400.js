import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row400({ cell_styles, openModal, setClickedCell, handleCellClick, clickedCells }) {
    const cells = [
        {
            user: KERI,
            type: TEXT_QUESTION,
            question: 'What is the name of the “go to” book mental health professionals?',
            answer: 'DSM',
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: TEXT_QUESTION,
            question: "What movies does Mom say Dad never “clicks” by",
            answer: 'Outlaw Josie Whales or Matrix',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: TEXT_QUESTION,
            question: "Name ALL of Sydneys college house roommates",
            answer: 'Katianne, Katie, Holly, Erin, Gabbi',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: TEXT_QUESTION,
            question: 'What class is Aubrey an IA for?',
            answer: 'IOE: 333 - Human Factors and Ergonomics (answer must mention Ergonomics)',
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: TEXT_QUESTION,
            question: "What Alabama receiver has Drew been repping as in scout?",
            answer: "Ryan Williams",
            handleClick: () => {
                setClickedCell(cells[4])
                openModal()
            }
        }
    ]
  
    return (
        <>
          {cells.map((cell, index) => {
            const isClicked = clickedCells.includes(index);
            const bgColor = isClicked ? 'bg-blue-950 !text-gray-500' : 'bg-transparent';
    
            return (
              <div
                key={index}
                className={`${cell_styles} ${bgColor}`}
                onClick={() => {
                  setClickedCell(cell);
                  handleCellClick('row400', index);
                  openModal();
                }}
              >
                400
              </div>
            );
          })}
        </>
    );
  }
  
  export default Row400;
  