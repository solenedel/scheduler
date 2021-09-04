import {React, useState} from "react";

function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  console.log("mode: ", mode)
  console.log("history: ", history)

  // transition to the next mode
  const transition = (newMode, replace = false) => {
    setMode(newMode);

    // if replace is false it means we are not skipping any modes
    // if replace is true, instead of adding the new mode, we are replacing the most recent item instead of adding to the history array
    if (!replace) {
      // expand all previous history elements and add the new mode to the end
      setHistory(prev => [...prev, newMode]);
    } else {
      setHistory(prev => [...prev.slice(0, -1), newMode]);
    }
   
  }

  // history is an array of modes
  // everytime we set a new mode we add that mode to the array

  // go back to the previous mode
  const back = () => {
    
    if (history.length > 1) {

      // get the previous mode from the history array
      const secondLastItem = history[history.length - 2];

      // set mode to be the second last element of the history array
      setMode(secondLastItem);

      // remove last element from the history array
      setHistory(history.slice(0, -1));
    }
    
  }

  return { mode, transition, back };


}

// module.exports = {useVisualMode};
export { useVisualMode };