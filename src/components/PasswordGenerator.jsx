import React, { useState } from "react";

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let allChars = "";
    if (includeUppercase) allChars += upperCaseChars;
    if (includeLowercase) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    if (allChars.length === 0) {
      alert("Please select at least one character type!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      newPassword += allChars[randomIndex];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500">
      <div className="bg-white p-6 rounded-xl shadow-2xl text-center w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">🔐 Password Generator</h2>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <input 
            type="text" 
            value={password} 
            readOnly 
            className="w-full text-lg p-2 outline-none" 
            placeholder="Generated password..."
          />
          <button 
            onClick={copyToClipboard} 
            className="ml-2 p-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md">
            📋
          </button>
        </div>

        <div className="mt-4">
          <label className="block text-gray-600">Password Length: {length}</label>
          <input 
            type="range" 
            min="6" 
            max="20" 
            value={length} 
            onChange={(e) => setLength(e.target.value)} 
            className="w-full"
          />
        </div>

        <div className="text-left mt-4 space-y-2 text-gray-700">
          <label className="flex items-center">
            <input type="checkbox" checked={includeUppercase} onChange={() => setIncludeUppercase(!includeUppercase)} className="mr-2" />
            Include Uppercase Letters
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeLowercase} onChange={() => setIncludeLowercase(!includeLowercase)} className="mr-2" />
            Include Lowercase Letters
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} className="mr-2" />
            Include Numbers
          </label>
          <label className="flex items-center">
            <input type="checkbox" checked={includeSymbols} onChange={() => setIncludeSymbols(!includeSymbols)} className="mr-2" />
            Include Symbols
          </label>
        </div>

        <button 
          onClick={generatePassword} 
          className="mt-4 bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded-md text-lg transition-all">
          🔄 Generate Password
        </button>
      </div>
    </div>
  );
}
