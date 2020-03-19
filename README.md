# 📡 useBroadcast

This is a React webhook that lets you keep two browser tabs / windows in sync.
Behind the scenes it uses the [Broadcast Channel API](1) to send messages
between instances. This way you can take action in one tab and have the state
automatically shared with other instances of your component regardless of which
window or tab they're in. 

![Demo](https://github.com/trevoro/use-broadcast/blob/master/doc/demo.gif)

## Example

```javascript
import { useBroadcast } from 'use-broadcast';

export const MyComponent = () => {
  const initialState = 0;
  const [state, setState] = useBroadcast('channel_name', initialState);

  function click() {
    setState(state + 1);
  }

  return (
    <div>
      <button onClick={click}>increment</button>
    </div>
  )
}
```

[1]: [https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API
