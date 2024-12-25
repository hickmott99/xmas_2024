import { useEffect, useState } from 'react';
import { AUBREY, DREW, JEFF, KERI, SYDNEY } from "./Constants";

const ScoringSection = () => {
  const [name, setName] = useState('');
  const [sign, setSign] = useState('+');
  const [points, setPoints] = useState(100);
  const [scores, setScores] = useState(() => {
    const savedScores = sessionStorage.getItem('scores');
    return savedScores ? JSON.parse(savedScores) : {
      [AUBREY]: 0,
      [DREW]: 0,
      [JEFF]: 0,
      [KERI]: 0,
      [SYDNEY]: 0,
    };
  });

  const players = [KERI, JEFF, SYDNEY, AUBREY, DREW];

  useEffect(() => {
    sessionStorage.setItem('scores', JSON.stringify(scores));
  }, [scores]);

  const handleSubmit = () => {
    if (!name) return;

    setScores(prevScores => {
      const newScore = sign === '+' ? prevScores[name] + points : prevScores[name] - points;
      return { ...prevScores, [name]: newScore };
    });
  };

  const handleReset = () => {
    setScores({
        [AUBREY]: 0,
        [DREW]: 0,
        [JEFF]: 0,
        [KERI]: 0,
        [SYDNEY]: 0,
    });
  }

  return (<>
      <div className="py-4 flex items-end justify-center space-x-4 text-[20px]">
        <div>
          <select
            id="name"
            value={name}
            className='py-1'
            onChange={(e) => setName(e.target.value)}
          >
            <option value="">Select Player</option>
            {players.map((player) => (
              <option key={player} value={player}>
                {player.slice(0,1).toUpperCase() + player.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div className='flex flex-col justify-center'>
            <label className="h-[20px]">
                <input
                type="radio"
                name="sign"
                value="+"
                checked={sign === '+'}
                onChange={() => setSign('+')}
                />
                <span className="text-white ps-[3px]">+</span>
            </label>
            <label className="h-[20px]">
                <input
                type="radio"
                name="sign"
                value="-"
                checked={sign === '-'}
                onChange={() => setSign('-')}
                />
                <span className="text-white ps-[3px]">-</span>
            </label>
        </div>

        <div>
          <select
            id="points"
            value={points}
            className='py-1'
            onChange={(e) => setPoints(Number(e.target.value))}
          >
            <option value={100}>100</option>
            <option value={200}>200</option>
            <option value={300}>300</option>
            <option value={400}>400</option>
            <option value={500}>500</option>
          </select>
        </div>

        <div>
            <button
            className="px-2 py-1 bg-green-700 text-white rounded"
            onClick={handleSubmit}
            >
            Submit
            </button>
        </div>

        <div>
            <button
            className="px-2 py-1 bg-red-700 text-white rounded"
            onClick={handleReset}
            >
            Reset
            </button>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
            <ul>
                {players
                    .sort((a, b) => scores[b] - scores[a])
                    .map((player) => (
                        <li key={player} className="text-white">
                        <span className='font-bold'>{player.slice(0, 1).toUpperCase() + player.slice(1)}</span>: {scores[player]}
                        </li>
                ))}
            </ul>
        </div>
      </div>
    </>);
};

export default ScoringSection;
