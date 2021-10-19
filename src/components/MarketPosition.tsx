import { FC } from "react";

interface IMarketPositionProp {
    setSelectedPositions: (selectedPositions: string[]) => void
    selectedPositions: string[]
}

const MarketPosition: FC<IMarketPositionProp> = ({ setSelectedPositions, selectedPositions }) => {

    const setMarketPosition = (e: any) => {
        let positions = [...selectedPositions];
        switch (e.target.name) {
            case "high":
                e.target.checked ? positions.push("high") : positions = positions.filter(position => position !== "high")
                break;
            case "average":
                e.target.checked ? positions.push("average") : positions = positions.filter(position => position !== "average")
                break;
            case "low":
                e.target.checked ? positions.push("low") : positions = positions.filter(position => position !== "low")
                break;
        }
        setSelectedPositions(positions);
    }

    return (
        <div className="grouped fields">
            <div className="market-position-title">Market Position</div>
            <div className="field">
                <div className="ui checkbox market-checkbox">
                    <input type="checkbox" name="high" onChange={setMarketPosition} />
                    <label>High</label>
                </div>
            </div>
            <div className="field">
                <div className="ui checkbox market-checkbox">
                    <input type="checkbox" name="average" defaultChecked={true} onChange={setMarketPosition} />
                    <label>Average</label>
                </div>
            </div>
            <div className="field">
                <div className="ui checkbox market-checkbox">
                    <input type="checkbox" name="low" onChange={setMarketPosition} />
                    <label>Low</label>
                </div>
            </div>
        </div>
    );
}

export default MarketPosition;