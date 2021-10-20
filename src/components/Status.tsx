import { FC } from "react";
import { EStatusType } from "../types";

interface IStatusProps {
    status: EStatusType | string
}

const Status: FC<IStatusProps> = ({ status }) => {
    //Switch case to return the status based on the type
    //By passing type we can display different kind of statuses
    //If it is not a valid EStatusType then just string is displayed
    switch (status) {
        case EStatusType.error:
            return (
                <div className="ui error message">
                    <div className="header">Sorry, please try another route</div>
                    <p>Please select another route. We are unable to get market rates for this route.</p>
                </div>
            );
        case EStatusType.initial:
            return (
                <div className="ui info message">
                    <div className="header">Welcome to market rates by Xeneta</div>
                    <p>Please select the routes to see the information.</p>
                </div>
            );
        case EStatusType.loading:
            return (
                <div className="ui icon message">
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                        <div className="header">Please wait for a moment</div>
                        <p>We're generating the graph for you.</p>
                    </div>
                </div>
            );
        case EStatusType.no_position_selected:
            return (
                <div className="ui warning message">
                    <div className="header">Can't generate graph without market position</div>
                    <p>Please select market position to see the graph.</p>
                </div>
            );
        case EStatusType.no_data:
            return (
                <div className="ui warning message">
                    <div className="header">Unable to process the data</div>
                    <p>No valid data exists between these route.</p>
                </div>
            );
        default:
            return (
                <div className="ui warning message">
                    <div className="header">{status}</div>
                </div>
            );;
    }
};

export default Status;