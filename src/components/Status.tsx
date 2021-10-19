import { FC } from "react";
import { EStatusType } from "../types";

interface IStatusProps {
    status: EStatusType
}

const Status: FC<IStatusProps> = ({ status }) => {
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
                    <p>Please select routes. Please select the routes to see the information.</p>
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

        default: return null;
    }
};

export default Status;