import * as React from "react";

interface ISFCCounterProps {
    label: string;
    count: number;
    onIncreament: () => any;
}

export const SFCCounter: React.SFC<ISFCCounterProps> = (props) => {
    const {label, count, onIncreament} = props;

    const handleIncrment = () => { onIncreament(); };

    return (
        <div>
            <span>{label}: {count}</span>
            <button onClick={handleIncrment}>Incrment</button>
        </div>
    );
};
