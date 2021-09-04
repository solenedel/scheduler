function useVisualMode(initial) {

  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // transition to the next mode
  const transition = (mode, replace = false) => {
    mode = setMode(mode);
  }

  // go back to the previous mode
  const back = history => {

    if (history.length >= 1) {
      // remove last item from history array, without mutating original history array
      const lastItem = history.slice(0, -1);
      console.log('lastItem: ', lastItem);

      history = setHistory(lastItem);
    }
    
  }

  return { mode, transition, back };


}

// module.exports = {useVisualMode};
export {useVisualMode};