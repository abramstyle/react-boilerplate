import * as React from "react";
import { FriendListItem, FriendStatus } from "../../components/Hooks/CustomizeHook";
import EffectHook from "../../components/Hooks/Effect";
import StateHook from "../../components/Hooks/State";

class Demo extends React.Component {
  public render() {
    return (
      <article className="test">
        <header>
          <h1>Hooks Demo</h1>
        </header>
        <section>
          <h1>Simple Hook</h1>
          <StateHook />
        </section>
        <section>
          <h1>Effect Hook</h1>
          <EffectHook />
        </section>
        <section>
          <h1>Customize Hook</h1>
          <h2>FriendStatus</h2>
          <FriendStatus />
          <h2>Friend List Item</h2>
          <FriendListItem friend={{name: "Jimmy"}} />
        </section>
      </article>
    );
  }
}

export default Demo;
