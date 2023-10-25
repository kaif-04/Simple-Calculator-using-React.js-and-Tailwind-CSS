import React, { useState } from 'react'; 
// imports the `React` object and the `useState` hook from the 'react' library for use in a React component file.

const Calculator = () => {
  // Define two state variables, 'input' to store the user input expression, and 'output' for the calculation result.
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Function to handle user input. It appends the provided 'value' to the 'input' state.
  const handleInput = (value) => {
    // Check if the last character is an operator and the new value is also an operator.
    if (/[-+*/]$/.test(input) && /[-+*/]$/.test(value)) {
      // Replace the last operator with the new one.
      setInput(input.slice(0, -1) + value);
    } else {
      // Append the 'value' to the existing input.
      setInput(input + value);
    }
  };

  // Function to calculate and set the result based on the current 'input' expression.
  const calculateResult = () => {
    try {
      // Use 'eval' to evaluate the input expression and set the result in the 'output' state.
      setOutput(eval(input));
    } catch (error) {
      // Handle any errors during evaluation and display "Error" in the 'output' state.
      setOutput('Error');
    }
  };

  // Function to clear the input and output states.
  const clearInput = () => {
    setInput(''); // Reset the input.
    setOutput(''); // Reset the output.
  };

  return (
    // Render the calculator interface using JSX.
    <div className="w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <h2 className="text-center text-2xl font-semibold mb-4">Simple Calculator</h2> {/* Display the calculator title */}
      <input type="text" value={input} className="w-full mb-4 p-2 border rounded-md" />
      <div className="grid grid-cols-4 gap-2">
        {/* Buttons for digits, operators, clear, and equals with click event handlers */}
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('*')}>*</button>
        <button onClick={() => handleInput('0')}>0</button>
        <button onClick={clearInput}>C</button>
        <button onClick={calculateResult}>=</button>
        <button onClick={() => handleInput('/')}>/</button>
      </div>
      <p className="mt-4">Result: {output}</p> {/* Display the calculation result */}
    </div>
  );
};

export default Calculator;
