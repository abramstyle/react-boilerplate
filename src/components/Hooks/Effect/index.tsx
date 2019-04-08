import * as React from "react";

const {useState, useEffect} = React;

function EffectHook() {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(state: any) {
    setIsOnline(state.isOnline);
  }

  useEffect(() => {
    setTimeout(() => {
      handleStatusChange({
        isOnline: true,
      });
    }, 2000);

    return () => {
      console.log("umnount.");
    };
  });

  const statusText = isOnline ? "Online" : "Offline";

  return (
    <div>Friend is {statusText}</div>
  );
}

export default EffectHook;
