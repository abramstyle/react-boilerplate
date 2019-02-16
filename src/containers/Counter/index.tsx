import * as React from "react";
import StatefulCounterClass from "../../components/Counter";
import StatefulCounterWithDefault from "../../components/Counter/StatefulCounterWithDefaultProps";

class Home extends React.Component {
  public state = {
    count: this.getCount(),
  };

  public getCount() {
    return Math.ceil(Math.random() * 100);
  }

  public changeCount() {
    this.setState({
      count: this.getCount(),
    });
  }

  public handleChangeCount = () => {
    this.changeCount();
  }

  public render() {
    const { count } = this.state;

    return (
      <div className="home">
        <div className="block">
          <h1>Stateful Counter</h1>
          <StatefulCounterClass label="stateful counter" />
        </div>
        <div className="block">
          <h1>Stateful Counter With Default Props</h1>
          <button onClick={this.handleChangeCount}>Change Count</button>
          <StatefulCounterWithDefault label="stateful counter with default props: " count={count} />
        </div>
      </div>
    );
  }
}

export default Home;
