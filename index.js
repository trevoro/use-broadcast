import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "set":
      state = action.value;
      return state;
    default:
      throw new Error();
  }
}

export function useBroadcast(name, initialState) {
  let [state, dispatch] = useReducer(reducer, initialState);
  let channel = new BroadcastChannel(name);

  channel.onmessage = function(event) {
    event.preventDefault();
    let { data: value } = event;
    dispatch({ type: "set", value });
  };

  function setState(value) {
    channel.postMessage(value);
    dispatch({ type: "set", value });
  }

  return [state, setState];
}
