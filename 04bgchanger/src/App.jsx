import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('gray');
  const colors = ['red', 'green', 'blue', 'black', 'gray', 'yellow', 'purple', 'pink', 'orange', 'teal', 'cyan', 'indigo', 'violet', 'lime', 'fuchsia', 'brown'];

  return (
    <div className='w-full h-screen transition-colors duration-500' style={{ backgroundColor: color }}>

      <div className='fixed bottom-12 inset-x-0 px-4'>
        <div className='bg-white rounded-full shadow-md overflow-x-auto whitespace-nowrap scroll-smooth px-4 py-2 flex flex-nowrap gap-3'>

          {colors.map((c, index) => (
            <div
              key={index}
              className={`inline-block rounded-full px-4 py-2 cursor-pointer border-2 ${
                color === c
                  ? 'shadow-2xl border-black'
                  : 'shadow-md border-gray-300'
              } transition-all duration-300`}
              style={{
                backgroundColor: c,
                color: c === 'black' ? 'white' : 'black'
              }}
              onClick={() => setColor(c)}
            >
              {c.charAt(0).toUpperCase() + c.slice(1)}
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;
