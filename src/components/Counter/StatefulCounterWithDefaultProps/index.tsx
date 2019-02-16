import * as React from "react";

export interface IStatefulCounterWithDefaultProps {
    label: string;
    count?: number;
}

interface IDefaultProps {
    readonly count: number;
}

interface IState {
    readonly count: number;
}

class StatefulCounterWithDefault extends React.Component<IStatefulCounterWithDefaultProps> {
    public static defaultProps: IDefaultProps = {
        count: 0,
    };

    public readonly state: IState = {
        count: this.props.count,
    };

    public componentWillReceiveProps(nextProps: IStatefulCounterWithDefaultProps) {
        const {count} = nextProps;

        if (count && count !== this.props.count) {
            this.setState({
                count,
            });
        }
    }

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
                <button onClick={this.handleIncrment}>Incrment</button>
            </div>
        );

    }
}

export default StatefulCounterWithDefault;
