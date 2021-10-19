import { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getPortsData, getMarketRatesData } from "../redux/actions";
import SelectPort from "../components/SelectPort";
import { AppState, IMarketRate, IPort, IPortAction } from "../types";
import MarketRatesGraph from "../components/MarketRatesGraph";
import MultiLineChart from "../components/MultiLineChart";

interface IAppProps {
    getPortsData: () => void,
    getMarketRatesData: (origin: string, destination: string) => void,
    ports: IPort[],
    marketRates: IMarketRate[]
}

const mapStateToProps = (state: AppState) => ({
    ports: state.ports,
    marketRates: state.marketRates
});

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, {}, IPortAction>) => ({
    getPortsData: bindActionCreators(getPortsData, dispatch),
    getMarketRatesData: bindActionCreators(getMarketRatesData, dispatch)
})

const App: FC<IAppProps> = ({ getPortsData, getMarketRatesData, ports, marketRates }) => {
    const [origin, setOrigin] = useState("");
    const [destination, setDestination] = useState("");

    useEffect(() => {
        getPortsData();
    }, []);

    useEffect(() => {
        if (origin && destination) {
            getMarketRatesData(origin, destination);
        }
    }, [origin, destination]);

    return (
        <div className="ui container">
            <div className="port-container">
                <SelectPort placeholder="Origin Port" ports={ports} onSelect={setOrigin} />
                <i className="exchange icon"></i>
                <SelectPort placeholder="Destination Port" ports={ports} onSelect={setDestination} />
            </div>
            <div className="data-info-container">
                <MarketRatesGraph data={marketRates} />
            </div>
        </div>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);