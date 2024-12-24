import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row100({ cell_styles, openModal, setClickedCell }) {
    const cells = [
        {
            user: KERI,
            type: VIDEO_QUESTION,
            question: 'what is 1',
            answer: 'answererrrr 1',
            content_url: '/static/mom - audio.mov',
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: PHOTO_QUESTION,
            question: 'WHERE IS THIS PHOTO FROM',
            answer: 'VELKOMIN TO ICELAND',
            content_url: '/static/dad - darts.jpg',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: AUDIO_QUESTION,
            question: 'what is 3',
            answer: 'answererrrr 3',
            content_url: 'https://www.youtube.com/embed/ZWejgj-e4tg',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: TEXT_QUESTION,
            question: 'what is 4',
            answer: 'answererrrr 4',
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: TEXT_QUESTION,
            question: 'what is 5',
            answer: 'answererrrr 5',
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
  