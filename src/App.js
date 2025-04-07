import logo from './logo.svg';
import './App.css';
import hero from "./assets/prmobile.png";
import { useEffect, useState } from 'react';
import GetFiranaName from './GetFiranaName';
function App() {
  const [MokkaName, setName] = useState("")

  const handleNameGenerate = async ()=>{
    if(MokkaName.length < 1) return;
    const name = await GetFiranaName(MokkaName)
    console.log(convertResIntoJson(name))
  }
  const convertResIntoJson = (res) =>{
    try {
      const cleaned = res
        .replace(/```json\s*/gi, '')
        .replace(/```/g, '')
        .trim();
      const parsed = JSON.parse(cleaned);
      return parsed;
    } catch (error) {
      console.error("Failed to parse alias JSON:", error);
      console.log("Raw response text:", res);
      return null;
    }
  }
  return (
    <div className="App w-screen mx-auto h-screen overflow-hidden bg-gradient-to-b from-[rgb(0,0,0)] via-[rgb(0,0,0)] to-[rgb(54,23,7)] relative flex justify-center items-start px-8 py-[100px]">
        <div className='w-full sm:max-w-sm z-10 flex flex-col'>
          <h1 className='text-xl sm:text-2xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent'>  
          Unnoda mokka Peera Fire ahhh mathurom
          </h1>
        <input placeholder='Enter your Name.' onChange={(e)=>setName(e.target.value)} className='w-full h-[60px] mt-4 bg-[rgba(63,63,63,0.47)] backdrop-blur-lg border-[1px] border-[#ff590074] text-[#FF5900] font-semibold tracking-tighter px-4 text-lg placeholder:text-[#b5b5b5] outline-none'/>
        <button onClick={handleNameGenerate} className='w-full h-[60px] mt-4 bg-[rgba(63,63,63,0.47)] backdrop-blur-lg border-[1px] border-[#ff590074] text-[#FF5900] font-semibold tracking-tighter px-4 text-lg placeholder:text-[#b5b5b5] outline-none'>Generate</button>
        </div>
        <div className='w-full max-w-lg max-h-[800px] absolute bottom-0 left-[50%] -translate-x-[50%] z-0 '>
        <img className=' h-full object-fit-cover ' src={hero}/>
        </div>
    </div>
  );
}

export default App;
