import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row500({ cell_styles, openModal, setClickedCell, handleCellClick, clickedCells }) {
    const cells = [
        {
            user: KERI,
            type: PHOTO_QUESTION,
            question: 'What decision was made this day?',
            answer: 'decided to buy the property',
            content_url: `${process.env.PUBLIC_URL}/static/mom - property.jpg`,
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: AUDIO_QUESTION,
            question: "Name the artist:",
            answer: 'Jim Croce',
            content_url: 'https://www.youtube.com/embed/QvwDohEEQ1E?start=4',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: AUDIO_QUESTION,
            question: "Which big booty mix:",
            answer: '14',
            content_url: 'https://www.youtube.com/embed/ZWejgj-e4tg',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: TEXT_QUESTION,
            question: 'What name is on Aubreys Fake ID?',
            answer: 'Daelyn',
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: AUDIO_QUESTION,
            question: "Name the artist:",
            answer: "Bob Dylan",
            content_url: 'https://www.youtube.com/embed/JncbFS5ek74',
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
                  handleCellClick('row500', index);
                  openModal();
                }}
              >
                500
              </div>
            );
          })}
        </>
    );
  }
  
  export default Row500;
  