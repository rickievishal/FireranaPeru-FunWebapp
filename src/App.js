import logo from './logo.svg';
import './App.css';
import hero from "./assets/prmobile.png";
import dialoghero from "./assets/dialoghero.png"
import face from "./assets/Sidhu.png"
import { useEffect, useState } from 'react';
import GetFiranaName from './GetFiranaName';
import { IoClose } from "react-icons/io5";
import { ImFolderMinus } from 'react-icons/im';
import { FaMinus } from 'react-icons/fa';
function App() {
  const [MokkaName, setName] = useState("")
  const [isgenerating, setIsgenerating] = useState(true)
  const [isgenerationstarted, setIsgenerationstarted] = useState(false)
  const [responseJson, setResponseJson] = useState({})
function copyText(text = "say") {
  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  textarea.setSelectionRange(0, 99999); // For mobile devices
  document.execCommand("copy");

  // Remove the temporary element
  document.body.removeChild(textarea);

  // Optional: notify the user
  alert(`${text} copied 😭👍🏾 Now share the screenshot in ur story`);
}


const handleCopy= () =>{
  copyText("firefirefire.vercel.app");
}
  const handleNameGenerate = async ()=>{
    
    if(MokkaName.length < 1) return;
    setIsgenerationstarted(true)
    setIsgenerating(true)
    const name = await GetFiranaName(MokkaName)
    
    setResponseJson(convertResIntoJson(name))
    // console.log(responseJson)
    setIsgenerating(false)
  }
  const handleCloseOutputDialog = () =>{
    setIsgenerating(false)
    setIsgenerationstarted(false)
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
      // console.error("Failed to parse alias JSON:", error);
      // console.log("Raw response text:", res);
      return null;
    }
  }
  return (
    <div className="App w-screen mx-auto h-screen  overflow-hidden bg-gradient-to-b from-[rgb(0,0,0)] via-[rgb(0,0,0)] to-[rgb(54,23,7)] relative flex justify-center items-start px-8 py-[100px]">
        {
          isgenerationstarted && (
          <div className=' w-screen h-screen bg-[rgba(11,11,11,0.35)] absolute top-0 left-0 z-20 backdrop-blur-sm flex justify-center items-center px-5'>
            <div className='w-full max-w-xl h-[80%] lg:h-[60%]  max-h-[700px] border border-[#ff590074] rounded-lg bg-[rgb(0,0,0)] overflow-hidden relative flex flex-col justify-start items-center '>
              <div className='w-full border-b-[1px] border-[#ff590067] absolute right-0 top-0 flex justify-end'>
                <div className='relative w-full h-[30px] border-b-[1px] border-[#ff590056] flex justify-center items-center'>
                  <p className='text-[#FF5900] text-sm'>
                    Dragon.dmg
                  </p>
                  <div className='absolute left-0 top-0 h-[30px] flex justify-center items-center px-2 gap-1'>
                    <div className='h-[15px] w-[15px] rounded-full bg-[#FF5900] hover:bg-[#cc4700] flex justify-center items-center' onClick={handleCloseOutputDialog}>
                      <IoClose className='text-xs' />
                    </div>
                    <div className='h-[15px] w-[15px] rounded-full bg-[#ffd500] flex justify-center items-center'>
                      <FaMinus className='text-[10px]' />
                    </div>
                    <div className='h-[15px] w-[15px] rounded-full bg-[#32bb16] flex justify-center items-center'>

                    </div>
                  </div>
                </div>
              </div>
            {isgenerating && (
                <>
                
                <h1 className='text-xl sm:text-2xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent z-20 text-center mt-[100px] px-4'>  
                Irungha bro Anbu anna yochitu irukangha...
                </h1>
                <div className='w-[30px] h-[30px] border-t-[2px] border-r-[2px]  border-[#FF5900] rounded-full mt-5 animate-spin'>
                      
                </div>
                <img className='absolute h-[400px] object-cover bottom-0 left-0' src={dialoghero}/>
                </>
            )}
            {(!isgenerating && isgenerationstarted) && (
                <>
                  <p className='bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent mt-[80px] tracking-[-1px]'>
                    Nee enimea <span className='text-3xl'>{MokkaName}</span> illa, inimea nee 
                  </p>
                  <h1 className='text-4xl sm:text-5xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent z-20 text-center mt-4 px-4'>  
                    {`" `}{responseJson.alias}{` "`}
                  </h1>
                  <div className='flex justify-center items-center h-[200px]'>
                    <img className='h-full' src={face}/>
                  </div>
                  <div className='share-tag w-full justify-center items-center px-4 py-1 absolute bottom-0 left-0'>
                    <button className='bg-[#FF5900] px-2 py-1 text-sm rounded-xl hover:bg-[#ff5900dd] ' onClick={handleCopy}>Share</button>
                      <h2 className='text-center text-sm mt-2'>
                        <span className='tracking-tighter leading-[-8px] bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent '>
                          Share this in your story or I'll eat you.
                        </span> 😭😂😭😂
                      </h2>
                      
                      <p className='text-xs opacity-[90%] bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent mt-4'>
                        try it out at firefirefire.vercel.app. built with ❤️ by vishal.
                      </p>
                  </div>
                </>
            )}
            </div>
        </div>)
        }
        <div className='w-full sm:max-w-sm z-10 flex flex-col'>
          <h1 className='text-xl sm:text-2xl font-bold tracking-tighter leading-tight bg-gradient-to-b from-[#DFA204] via-[#FF5900] to-[#DFA204] bg-clip-text text-transparent'>  
          Unnoda mokka Peera Fire ahhh mathurom
          </h1>
        <input placeholder='Enter your Name.' onChange={(e)=>setName(e.target.value)} className='w-full h-[60px] mt-4 bg-[rgba(63,63,63,0.47)] backdrop-blur-lg border-[1px] border-[#ff590074] text-[#FF5900] font-semibold tracking-tighter px-4 text-lg placeholder:text-[#e1703c] outline-none'/>
        <button onClick={handleNameGenerate} className='w-full h-[60px] mt-4 bg-[rgba(63,63,63,0.47)] backdrop-blur-lg border-[1px] border-[#ff590074] text-[#FF5900] font-semibold tracking-tighter px-4 text-lg placeholder:text-[#b5b5b5] outline-none'>Generate</button>
        </div>
        <div className='w-full max-w-lg max-h-[800px] absolute bottom-0 left-[50%] -translate-x-[50%] z-0 '>
        <img className=' h-full object-fit-cover ' src={hero}/>
        </div>
    </div>
  );
}

export default App;
