import React, { useState } from 'react';

function TextQuestionComponent({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h3 className="font-semibold">Question:</h3>
      <p>{question}</p>
      {!showAnswer ? (
        <button
          onClick={() => setShowAnswer(true)}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Show Answer &#8595;
        </button>
      ) : (
        <div>
          <h3 className="font-semibold mt-4">Answer:</h3>
          <p>{answer}</p>
          <button
            onClick={() => setShowAnswer(false)}
            className="mt-4 text-red-500 hover:text-red-700"
          >
            Close Answer &#8593;
          </button>
        </div>
      )}
    </div>
  );
}


function AudioQuestionComponent({ question, content_url, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
    console.log(content_url)
  
    return (
      <div>
        <h3 className="font-semibold">Question:</h3>
        <p>{question}</p>
        <div className="grid grid-cols-1 grid-rows-1">
            <div className="audio-blocker row-start-1"/>
            <iframe 
                title="audio-player"
                width="400" 
                height="400" 
                src={content_url} 
                frameBorder="0" 
                className='audio-iframe row-start-1'
            ></iframe>
        </div>
        
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            Show Answer &#8595;
          </button>
        ) : (
          <div>
            <h3 className="font-semibold mt-4">Answer:</h3>
            <p>{answer}</p>
            <button
              onClick={() => setShowAnswer(false)}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Close Answer &#8593;
            </button>
          </div>
        )}
      </div>
    );
}

  
function VisualQuestionComponent({ question, content_url, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h3 className="font-semibold">Question:</h3>
      <p>{question}</p>
      <video controls className="max-h-[400px]" >
        <source src={content_url} type="video/mp4" />
        Your browser does not support the video element.
      </video>
      {!showAnswer ? (
        <button
          onClick={() => setShowAnswer(true)}
          className="mt-4 text-blue-500 hover:text-blue-700"
        >
          Show Answer &#8595;
        </button>
      ) : (
        <div>
          <h3 className="font-semibold mt-4">Answer:</h3>
          <p>{answer}</p>
          <button
            onClick={() => setShowAnswer(false)}
            className="mt-4 text-red-500 hover:text-red-700"
          >
            Close Answer &#8593;
          </button>
        </div>
      )}
    </div>
  );
}

function PhotoQuestionComponent({ question, content_url, answer }) {
    const [showAnswer, setShowAnswer] = useState(false);
  
    return (
      <div>
        <h3 className="font-semibold">Question:</h3>
        <p>{question}</p>
        <img src={content_url} alt="Question-related" className="max-h-[400px]" />
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            Show Answer &#8595;
          </button>
        ) : (
          <div>
            <h3 className="font-semibold mt-4">Answer:</h3>
            <p>{answer}</p>
            <button
              onClick={() => setShowAnswer(false)}
              className="mt-4 text-red-500 hover:text-red-700"
            >
              Close Answer &#8593;
            </button>
          </div>
        )}
      </div>
    );
}

function Modal({ isOpen, onClose, cell }) {
  if (!isOpen) return null;

  const renderContent = () => {
    switch (cell.type) {
      case 'text':
        return <TextQuestionComponent question={cell.question} answer={cell.answer} />;
      case 'audio':
        return <AudioQuestionComponent question={cell.question} content_url={cell.content_url} answer={cell.answer} />;
      case 'video':
        return <VisualQuestionComponent question={cell.question} content_url={cell.content_url} answer={cell.answer} />;
      case 'photo':
        return <PhotoQuestionComponent question={cell.question} content_url={cell.content_url} answer={cell.answer} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-xl font-bold mb-4">Jeopardy Question</h2>
        {renderContent()}
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white p-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;