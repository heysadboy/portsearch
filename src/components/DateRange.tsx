import { FC } from "react";

interface IDateRange {
    startDate: string,
    endDate: string
}

const DateRange: FC<IDateRange> = ({ startDate, endDate }) => {
    return (
        <div className="ui compact segment date-container">
            <i className="calendar outline icon"></i>
            <span>{startDate}</span>
            <i className="date-range-icon right arrow icon"></i>
            <span>{endDate}</span>
        </div>
    );
}

export default DateRange;