import * as React from "react";

const {useState, useEffect} = React;

function StateHook() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default StateHook;
