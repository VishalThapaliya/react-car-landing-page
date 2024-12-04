import { useEffect, useState } from "react";
import Hero from "./components/HeroSection/Hero";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";

const App = () => {
  let heroTexts = [
    {title: "NOUVEAU 2008", subtitle: "HYBRIDE & ESSENCE"},
    {title: "PEUGEOT E-2008", subtitle: "100% ÉLECTRIQUE"},
    {title: "NOUVEAU E-3008", subtitle: "100 % ÉLECTRIQUE"},
    {title: "NOUVEAU 208", subtitle: "HYBRIDE OU ESSENCE"},
    {title: "NOUVEAU E-208", subtitle: "100 % ÉLECTRIQUE"}
];
const [heroCount, setHeroCount] = useState(4);
const [playState, setPlayState] = useState(false);

useEffect(() => {
  const intervalId = setInterval(() => {
    setHeroCount((count) => { return count === 4 ? 0 : count + 1 });
  }, 3000);

  return () => clearInterval(intervalId)
}, []);

  return (
    <>
      <Navbar />
      <Background heroCount={heroCount} playState={playState} />
      <Hero 
        heroTexts={heroTexts[heroCount]} 
        heroCount={heroCount} 
        setHeroCount={setHeroCount} 
        playState={playState} 
        setPlayState={setPlayState}
      />
    </>
  )
}

export default App