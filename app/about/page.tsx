"use client";
import React, { useState, useRef } from "react";

function About() {
  const initialWords = [
    "Belmondo",
    "Młody G",
    "Młody Sarmata",
    "Obywatel bez NIPu",
    "Obywatel Meksyku",
    "Młody Bonaparte tylko że naprawdę",
    "Nowy Napoleon tylko większe berło",
    "Psychodeliczny wiking",
    "Młody Kmicic",
    "George Orwell z bongiem",
    "Sportowiec",
    "Kolega od jebanka",
    "Scrooge Ebenezer",
    "Sztosinger",
    "Dr Traphałs",
    "Belmondawg",
    "Czarodziej z Oz",
    "Urwipołeć śmierdzący groszem",
    "Muszkieter",
    "Ostateczny nurt",
    "Tytus",
    "Inspektor Gadżet",
    "Bojkot",
    "Nowy Tony Hawk tylko że rapowy",
    "Młody Gypsy",
    "Atlas",
    "Młody Mastermind",
    "Młody Glitch",
    "Młody Snake Plissken",
    "Młody Rastafari",
    "Tyti",
    "Młody Gdynianin",
    "Młody Mowgli",
    "Belmondziarz",
    "Belmondziak Sztosinger",
    "G",
    "Daquan",
    "Młody Muchadore",
    "Młody G z Gdyni",
    "Hajle Syllasje",
    "Mowgli Wychowanek Dżungli",
    "Młody figlarz",
    "Keepercipek",
    "Husky",
    "Młody Scrooge McDuck",
    "Młody Libertarianin",
    "Syn Ayn",
    "Algidziak",
    "Młody Algida",
    "Proteziak",
    "Nowy Larry Flynt",
    "฿elmondœ",
    "Młody Stavro Blofeld",
    "Liroy Merlin",
    "Mobbyn Ranger",
    "Nowy Orson Welles",
    "Młody Bi",
    "Młody G Sportowiec",
    "Pogromca kurewek",
    "Młody powrotowy",
    "Mesjasz Polskiego Rapu",
  ];

  const [words, setWords] = useState(initialWords);
  const [usedWords, setUsedWords] = useState([""]);
  const inputRef = useRef(null);

  const [inputText, setInputText] = useState("");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState("hehehe");

  const checkWord = () => {
    const lowWords = {
      words: words.map((word) => word.toLowerCase()),
    };

    if (lowWords.words.includes(inputText.toLowerCase())) {
      setResult("ok");
      setCount((prev) => prev + 1);
      setWords(
        words.filter((word) => word.toLowerCase() !== inputText.toLowerCase())
      );
      setUsedWords([...usedWords, inputText]);
      setInputText("");
    } else {
      setResult("hehehe");
    }
  };

  const handleType = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
    if (e.key === "Enter") {
      checkWord();
    }
  };

  const handleReset = () => {  
    setUsedWords(initialWords)
    setWords(initialWords)
    setCount(0)
    alert("nie zrobiłem jeszcze resetu gry więc wiec refreshuj strone jak chcesz zresetowac fresh er")

   };

  return (
    <div className="w-full relative flex flex-col items-center justify-center">
    <div 
      className="h-[100vh] absolute bg-black bg-cover bg-center" 
      style={{ 
      backgroundImage: "url('/images/Belmondo_2019.png')", 
      width: `${(count / initialWords.length) * 100}%` 
      }}>
    </div>

    <div className="text-white w-full justify-center z-[1000] relative  flex just flex-col  items-center ">
      <div className="">
        <h1 className="text-[15vw]   tracking-tighter font-black">฿elmondœ</h1>
        <div
          
        ></div>
        <input
          ref={inputRef}
          className="text-black w-full"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleType}
          placeholder="w kurwe dobrze jest być młodym ..."
          style={{ padding: "5px", fontSize: "16px" }}
        />
        <p>{result}</p>
        <p>
          {count}/{initialWords.length}
        </p>
        <div className="text-red-300 text-[11px]">{usedWords.map((w)=>(<span key={w}>{w} /</span>))}</div>
      </div>
      <button
      onClick={()=>(handleReset())}
      >nieumiem</button>
      
    </div></div>
  );
}

export default About;
