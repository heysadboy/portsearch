import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getPortsData, getMarketRatesData } from "../redux/actions";
import SelectPort from "../components/SelectPort";
import { AppState, IMarketRate, IPort, IAction, EStatusType } from "../types";
import MarketRatesGraph from "../components/MarketRatesGraph";
import Status from "../components/Status";

interface IAppProps {
    getPortsData: () => void,
    getMarketRatesData: (origin: string, destination: string) => void,
    ports: IPort[],
    marketRates: IMarketRate[],
    status: EStatusType
}

const mapStateToProps = (state: AppState) => ({
    ports: state.ports,
    marketRates: state.marketRates,
    status: state.status
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, IAction>) => ({
    getPortsData: bindActionCreators(getPortsData, dispatch),
    getMarketRatesData: bindActionCreators(getMarketRatesData, dispatch)
})

const App: FC<IAppProps> = ({ getPortsData, getMarketRatesData, ports, marketRates, status }) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    //Getting ports data to provide for search suggestions
    useEffect(() => {
        getPortsData();
    }, [getPortsData]);

    //Getting market rates if both origin and destination has been selected
    useEffect(() => {
        if (origin && destination) {
            getMarketRatesData(origin, destination);
        }
    }, [origin, destination, getMarketRatesData]);

    //Showing initial state at first and loading when the data is being fetched.
    //After hitting the endpoint show graph or message based on the result.
    return (
        <div className="ui container">
            <div className="port-container">
                <SelectPort placeholder="Origin Port" ports={ports} onSelect={setOrigin} />
                <i className="exchange icon"></i>
                <SelectPort placeholder="Destination Port" ports={ports} onSelect={setDestination} />
            </div>
            <div className="data-info-container">
                {status === EStatusType.ok ? <MarketRatesGraph data={marketRates} /> : <Status status={status} />}
            </div>
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);