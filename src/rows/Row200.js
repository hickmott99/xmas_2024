import { AUBREY, AUDIO_QUESTION, DREW, JEFF, KERI, PHOTO_QUESTION, SYDNEY, TEXT_QUESTION, VIDEO_QUESTION } from "../Constants";

function Row200({ cell_styles, openModal, setClickedCell }) {
    const cells = [
        {
            user: KERI,
            type: VIDEO_QUESTION,
            question: 'Give the context for the video clip:',
            answer: 'COVID',
            content_url: '/static/mom - audio.mov',
            handleClick: () => {
                setClickedCell(cells[0])
                openModal()
            }
        },{
            user: JEFF,
            type: PHOTO_QUESTION,
            question: "Give the context for the picture:",
            answer: 'Iceland',
            content_url: '/static/dad - darts.jpg',
            handleClick: () => {
                setClickedCell(cells[1])
                openModal()
            }
        },{
            user: SYDNEY,
            type: PHOTO_QUESTION,
            question: "Give the context for the picture:",
            answer: 'Traverse City Insane Asylum',
            content_url: '/static/sydney - insane.jpg',
            handleClick: () => {
                setClickedCell(cells[2])
                openModal()
            }
        },{
            user: AUBREY,
            type: AUDIO_QUESTION,
            question: 'What is this audio?',
            answer: 'UM Hype Video',
            content_url: 'https://www.youtube.com/embed/tNJ6OI2oti8?end=15',
            handleClick: () => {
                setClickedCell(cells[3])
                openModal()
            }
        },{
            user: DREW,
            type: AUDIO_QUESTION,
            question: "What video game (that Cooper and Drew played growing up) used this audio",
            answer: "NCAA College Football (09)",
            content_url: 'https://www.youtube.com/embed/XSliaQ3a_5Y',
            handleClick: () => {
                setClickedCell(cells[4])
                openModal()
            }
        },
    ]
  
    return (
      <>
        {cells.map((cell, index) => (
          <div key={index} className={cell_styles} onClick={cell.handleClick}>200</div>
        ))}
      </>
    );
  }
  
  export default Row200;
  