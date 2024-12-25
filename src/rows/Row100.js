import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row100({ cell_styles, openModal, setClickedCell }) {
    const cells = [
        {
            user: KERI,
            type: TEXT_QUESTION,
            question: 'What substance when spilled sends our mother to the edge?',
            answer: 'Milk',
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: TEXT_QUESTION,
            question: "What is Dad's signature dish to make the family?",
            answer: 'Chili',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: TEXT_QUESTION,
            question: "What was the food at Sydney's bachelorrete party?",
            answer: 'Caesar Salad and Fries',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: TEXT_QUESTION,
            question: 'How many minutes early did Aubrey order her Uber during the Chicago catastrophe?',
            answer: '70 minutes (guess within 10 minutes)',
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: TEXT_QUESTION,
            question: "What song has the lyrics: “You're an idiot, now I'm sure. Now I'm positive, I should go and warn her”",
            answer: "“That's so True” - Gracie Abrams",
            handleClick: () => {
                setClickedCell(cells[4])
                openModal()
            }
        },
    ]
  
    return (
      <>
        {cells.map((cell, index) => (
          <div key={index} className={cell_styles} onClick={cell.handleClick}>100</div>
        ))}
      </>
    );
  }
  
  export default Row100;
  