import { FC } from "react";

interface IDataPointLabelProps {
    info: string
}

const DataPointLabel: FC<IDataPointLabelProps> = ({ info }) => {
    return (<div className="ui orange label data-point-container">{info}</div>);
};

export default DataPointLabel;