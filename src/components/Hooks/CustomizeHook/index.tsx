import * as React from "react";

const {useState, useEffect} = React;

function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status: any) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    setTimeout(() => {
      handleStatusChange({
        isOnline: true,
      });
    }, 2000);

    return () => {
      console.log("unmount.");
    };
  });

  return isOnline;
}

export function FriendStatus() {
  const isOnline = useFriendStatus();
  // console.log("isOnline: ", isOnline);

  const status = isOnline ? "Online" : "Offline";
  return (
    <div className="status">{status}</div>
  );
}

export function FriendListItem(props: any) {
  const isOnline = useFriendStatus() ;

  return (
    <div style={{color: isOnline ? "green" : "black"}}>
    {props.friend.name}
    </div>
  );
}

export default useFriendStatus;
