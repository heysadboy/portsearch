import { FC } from "react";

interface IDataPointLabelProps {
    info: string
}

//Information regarding number of Data Points
const DataPointLabel: FC<IDataPointLabelProps> = ({ info }) => {
    return (<div className="ui orange label data-point-container">{info}</div>);
};

export default DataPointLabel;