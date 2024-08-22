
import React, { useState } from 'react';
import { caesarCipher } from './caesarCipher';
import './App.css'

export const App: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [shiftNumber, setShiftNumber] = useState<number>(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [result, setResult] = useState<string>('');


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const encryptedResult = caesarCipher(inputString, shiftNumber, direction);
    setResult(encryptedResult);
  };

  return (
    <>
      <section className="cipherContainer">
        <form id="cipherForm" onSubmit={handleSubmit}>
          <fieldset>
            <legend>Message to Encrypt</legend>
            <label htmlFor="inputString">Type message here:</label>
            <input
              type="text"
              id="inputString"
              value={inputString}
              onChange={(e) => setInputString(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <legend>Config</legend>
            <label htmlFor="direction">Direction:</label>
            <select
              id="direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value as 'forward' | 'backward')}
            >
              <option value="forward">Forward</option>
              <option value="backward">Backward</option>
            </select><br />
            <label htmlFor="inputString">Number of places to shift</label>
            <input
              type="number"
              id="inputNumber"
              value={shiftNumber}
              onChange={(e) => setShiftNumber(parseInt(e.target.value, 10))}
              required
            />
          </fieldset>
          <button type="submit">Encrypt</button>
        </form>

        <div className="results">
          <h3>Result:</h3>
          <p id="result">{result}</p>
        </div>

      </section>
    </>
  )
};