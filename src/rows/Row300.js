import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row300({ cell_styles, openModal, setClickedCell }) {
    const cells = [
        {
            user: KERI,
            type: TEXT_QUESTION,
            question: 'What story has Mom told use from her early days at MSU, that instantly made her “cool”?',
            answer: 'real/fake ID popo incident',
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: TEXT_QUESTION,
            question: "What is Dads go to Mcdonalds burger",
            answer: 'Quarter Pounder',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: TEXT_QUESTION,
            question: "How many AP classes did Sydney take in HS",
            answer: '5 (Stats, Comp, Calc, Lit, Chem)',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: PHOTO_QUESTION,
            question: 'What happened this day?',
            answer: 'drivers license acquired',
            content_url: `${process.env.PUBLIC_URL}/static/aubrey - license.jpg`,
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: TEXT_QUESTION,
            question: "What is drews easiest class next year?",
            answer: "Predicting the Future",
            handleClick: () => {
                setClickedCell(cells[4])
                openModal()
            }
        }
    ]
  
    return (
      <>
        {cells.map((cell, index) => (
          <div key={index} className={cell_styles} onClick={cell.handleClick}>300</div>
        ))}
      </>
    );
  }
  
  export default Row300;
  