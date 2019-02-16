import * as React from "react";

export interface IStatefulCounterProps {
    label: string;
}

interface IState {
    readonly count: number;
}

class StatefulCounterClass extends React.Component<IStatefulCounterProps, IState> {
    public readonly state: IState = {
        count: 0,
    };

    public handleIncrment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    public render() {
        const {label} = this.props;
        const {count} = this.state;

        return (
            <div>
                <span>{label}: {count}</span>
                <button onClick={this.handleIncrment}>Increase</button>
            </div>
        );
    }
}

export default StatefulCounterClass;
