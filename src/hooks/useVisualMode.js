// ------------------------------------------ imports ----------------------------------- //
import {useState} from "react";


// ------------------------------------- Hook: useVisualMode -------------------------------- //

function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

 // ------------------------------------- transition -------------------------------- //

 // transition to the next mode

  const transition = (newMode, replace = false) => {
    setMode(newMode);

    if (!replace) {
      setHistory(prev => [...prev, newMode]);
    } else {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    }
   
  }

  // ------------------------------------- back ---------------------------------- //

  // go back to the previous mode

  const back = () => {
    
    if (history.length > 1) {

      const secondLastItem = history[history.length - 2];

      setMode(secondLastItem);

      setHistory(history.slice(0, -1));
    }
    
  }

  return { mode, transition, back };
}


// export hook function
export { useVisualMode };