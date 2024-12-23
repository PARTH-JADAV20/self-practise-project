import { useState } from 'react';
import Todo from './Components/Todo.jsx';
import Weather from './Components/Weather.jsx';
import Password from './Components/Password.jsx';

export default function App() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (card) => {
    // If the clicked card is already active, keep it open; otherwise, open the clicked card
    setActiveCard((prev) => (prev === card ? card : card));
  };

  return (
    <div className="w-vw h-screen bg-[#D1F5BE] flex items-center justify-center">
      <div className="w-[85%] grid grid-cols-3 gap-[80px] mx-auto">
        {/* Todo Card */}
        <div
          className={`bg-[#4B3B40] h-[400px] text-white rounded-lg overflow-hidden cursor-pointer
          transition-transform duration-500 relative ${
            activeCard === 'todo' ? 'transform scale-105 shadow-lg' : ''
          }`}
          onClick={() => handleCardClick('todo')}
        >
          <div
            className={`p-6 ${
              activeCard === 'todo' ? 'h-auto opacity-100' : 'h-full opacity-75'
            } transition-all duration-500 ease-in-out`}
          >
            {activeCard === 'todo' ? (
              <>
                {/* X Button */}
                <button
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow-md"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent card closure
                    setActiveCard(null);
                  }}
                >
                  X
                </button>
                <Todo />
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-xl">
                Todo
              </div>
            )}
          </div>
        </div>

        {/* Password Card */}
        <div
          className={`bg-[#82735C] h-[400px] text-white rounded-lg overflow-hidden cursor-pointer
          transition-transform duration-500 relative ${
            activeCard === 'password' ? 'transform scale-105 shadow-lg' : ''
          }`}
          onClick={() => handleCardClick('password')}
        >
          <div
            className={`p-6 ${
              activeCard === 'password'
                ? 'h-auto opacity-100'
                : 'h-full opacity-75'
            } transition-all duration-500 ease-in-out`}
          >
            {activeCard === 'password' ? (
              <>
                {/* X Button */}
                <button
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                >
                  X
                </button>
                <Password />
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-xl">
                Password
              </div>
            )}
          </div>
        </div>

        {/* Weather Card */}
        <div
          className={`bg-[#9DB17C] h-[400px] text-white rounded-lg overflow-hidden cursor-pointer
          transition-transform duration-500 relative ${
            activeCard === 'weather' ? 'transform scale-105 shadow-lg' : ''
          }`}
          onClick={() => handleCardClick('weather')}
        >
          <div
            className={`p-6 ${
              activeCard === 'weather'
                ? 'h-auto opacity-100'
                : 'h-full opacity-75'
            } transition-all duration-500 ease-in-out`}
          >
            {activeCard === 'weather' ? (
              <>
                {/* X Button */}
                <button
                  className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                >
                  X
                </button>
                <Weather />
              </>
            ) : (
              <div className="flex items-center justify-center h-full text-center text-xl">
                Weather
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
