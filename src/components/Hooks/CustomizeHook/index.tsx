import * as React from "react";

const {useState, useEffect} = React;

function useFriendStatus() {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status: any) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log("isOnline: ", isOnline);
    setTimeout(() => {
      handleStatusChange({
        isOnline: true,
      });
    }, 2000);

    return () => {
    };
  });

  return isOnline;
}

export function FriendStatus() {
  const isOnline = useFriendStatus();
  // console.log("isOnline: ", isOnline);

  return isOnline ? "Online" : "Offline";
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
