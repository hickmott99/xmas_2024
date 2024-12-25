import JeopardyBoard from './JeopardyBoard';
import ScoringSection from './ScoringSection';

function App() {
  return (
    <div className='h-screen w-screen bg-blue-500 text-[24px]'>
      <h1 class="text-white font-bold text-[32px] text-center pb-4 pt-5">Hickmott Family Jeopardy</h1>
      <JeopardyBoard/>
      <ScoringSection/>
    </div>
  );
}

export default App;
