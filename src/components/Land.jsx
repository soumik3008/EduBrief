// import React, { useState } from 'react';
// import myImage from '../assests/im-1.png';
// export default function Land() {
//   const [darkMode, setDarkMode] = useState(false);
//   return (
//     <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen w-full`}>
//       {/* <!-- Navbar --> */}
//       <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-[#000066] text-white' : 'bg-blue-500 text-black'}`}>
//         <div className="flex items-center gap-4">
//           <button className="text-3xl">&#9776;</button>
//           <h1 className="text-2xl font-serif ml-40">EduBrief</h1>
//         </div>
//         <div className="flex items-center gap-6">
//           <button className="border border-white px-4 py-1 rounded-full">Sign Up</button>
//           <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full border">
//           {darkMode ? '🌙' : '☀️'}
//           </button>
//           <button>⚙️</button>
//         </div>
//       </nav>

//       {/* <!-- Hero Section --> */}
//       <section className="flex flex-wrap items-center justify-between px-10 py-20">
//         <div className="max-w-lg text-left">
//           <h2 className="text-4xl font-bold">Smart Notes for a Smarter Future!</h2>
//           <p className="mt-4 text-lg">
//             EduBrief is an AI-powered tool that automatically converts lengthy lectures into concise, easy-to-read summaries. It extracts key points, highlights essential concepts, and generates structured notes, helping students and professionals save time and retain important information effortlessly.
//           </p>
//           <button className="mt-6 bg-green-600 text-white text-xl font-semibold px-6 py-3 rounded-lg">
//             GET STARTED
//           </button>
//         </div>

//         <div className="relative">
//           <img src={myImage} alt="Student studying" className="w-150" />
//           <button className="absolute top-10 left-[-40px] bg-white rounded-full p-3 shadow-lg">▶</button>
//           <button className="absolute bottom-[-40px] left-10 bg-white rounded-full p-3 shadow-lg">▶</button>
//           <button className="absolute top-5 right-[-40px] bg-white rounded-full p-3 shadow-lg">⏸</button>
//         </div>
//       </section>
//     </div>
//   );
// }


import React, { useState } from 'react';
import myImage from '../assests/im-1.png';

export default function Land() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen w-full`}>
      {/* Navbar */}
      <nav className={`p-4 flex justify-between items-center ${darkMode ? 'bg-[#000066] text-white' : 'bg-blue-500 text-black'}`}>
        <div className="flex items-center gap-4">
          {/* Hamburger Button */}
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="text-3xl z-50">
            &#9776;
          </button>
          <h1 className="text-2xl font-serif ml-40">EduBrief</h1>
        </div>
        <div className="flex items-center gap-6">
          <button className="border border-white px-4 py-1 rounded-full">Sign Up</button>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full border">
            {darkMode ? '🌙' : '☀️'}
          </button>
          <button>⚙️</button>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-purple-600 to-blue-500 text-white transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-500 ease-in-out shadow-2xl rounded-r-2xl`}>
        {/* Close Button */}
        <button onClick={() => setIsSidebarOpen(false)} className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300">
          &times;
        </button>

        <h2 className="text-center text-2xl font-semibold mt-10">Menu</h2>

        <ul className="mt-8 space-y-5 px-6">
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/about.png" alt="About" className="w-6 h-6" /> */}
    <a href="#0">📖 About</a>
  </li>
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/services.png" alt="Services" className="w-6 h-6" /> */}
    <a href="#0">💼 Services</a>
  </li>
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/contact.png" alt="Contact" className="w-6 h-6" /> */}
    <a href="#0">📞 Contact</a>
  </li>
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/notes.png" alt="My Summaries" className="w-6 h-6" /> */}
    <a href="#0">📝 My Summaries</a>
  </li>
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/upload.png" alt="Upload Lecture" className="w-6 h-6" /> */}
    <a href="#0">📤 Upload Lecture</a>
  </li>
  <li className="flex items-center gap-3 p-3 bg-gray-800 bg-opacity-30 text-white rounded-lg hover:bg-opacity-50 transition duration-300">
    {/* <img src="/icons/settings.png" alt="Settings" className="w-6 h-6" /> */}
    <a href="#0">⚙️ Settings</a>
  </li>
</ul>

      </div>

      {/* Hero Section */}
      <section className="flex flex-wrap items-center justify-between px-10 py-20">
        <div className="max-w-lg text-left">
          <h2 className="text-4xl font-bold">Smart Notes for a Smarter Future!</h2>
          <p className="mt-4 text-lg">
            EduBrief is an AI-powered tool that automatically converts lengthy lectures into concise, easy-to-read summaries. It extracts key points, highlights essential concepts, and generates structured notes, helping students and professionals save time and retain important information effortlessly.
          </p>
          <button className="mt-6 bg-green-600 text-white text-xl font-semibold px-6 py-3 rounded-lg">
            GET STARTED
          </button>
        </div>

        <div className="relative">
          <img src={myImage} alt="Student studying" className="w-150" />
          <button className="absolute top-10 left-[-40px] bg-white rounded-full p-3 shadow-lg">▶</button>
          <button className="absolute bottom-[-40px] left-10 bg-white rounded-full p-3 shadow-lg">▶</button>
          <button className="absolute top-5 right-[-40px] bg-white rounded-full p-3 shadow-lg">⏸</button>
        </div>
      </section>
    </div>
  );
}
