import { useState , useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [includeNumbers, setIncludeNumbers] = useState(false);
  let [includeSymbols, setIncludeSymbols] = useState(false);
  let [password, setPassword] = useState("");

  const passwordRef = useRef(null);
  const passwordGenerator = useCallback(() => {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) {
      chars += "0123456789";
    }
    if (includeSymbols) {
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    let password = "";
    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    setPassword(password);
  }, [length, includeNumbers, includeSymbols, setPassword]);


  useEffect(() => {
    passwordGenerator();
  }, [passwordGenerator, length, includeNumbers, includeSymbols]);

  const copyPasswordtoClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  }



  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
        <h1 className="text-3xl font-bold mb-6">Password Generator</h1>
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="length">
              Password Length: {length}
            </label>
            <input
              type="range"
              id="length"
              min="4"
              max="32"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={(e) => setIncludeNumbers(e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2">Include Numbers</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={(e) => setIncludeSymbols(e.target.checked)}
                className="form-checkbox"
              />
              <span className="ml-2">Include Symbols</span>
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Generated Password:
            </label>
            <input
              type="text"
              id="password"
              value={password}
              readOnly
              className="w-full p-2 border border-gray-300 rounded text-center"
              ref={passwordRef}
            />
          </div>
          <button
            onClick={copyPasswordtoClipboard}

            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors cursor-pointer"
          >
            Copy Password
          </button>
        </div>
      </div>
    </>
  )
}

export default App
