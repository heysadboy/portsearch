import DateRange from "../components/DateRange";
import SelectPort from "../components/SelectPort";

const App = () => {
    return (
        <div className="ui container">
            <div className="port-container">
                <SelectPort placeholder="Origin Port" />
                <i className="exchange icon"></i>
                <SelectPort placeholder="Destination Port" />
            </div>
            <div className="data-info-container">
                <DateRange startDate="2019-01-01" endDate="2019-01-01" />
            </div>
        </div>
    );

}

export default App;