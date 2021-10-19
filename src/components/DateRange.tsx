import { FC } from "react";

interface IDateRange {
    startDate: string | undefined,
    endDate: string | undefined
}

const DateRange: FC<IDateRange> = ({ startDate, endDate }) => {
    return (
        <div className="ui basic label date-container">
            <i className="calendar outline icon"></i>
            <span>{startDate}</span>
            <i className="date-range-icon right arrow icon"></i>
            <span>{endDate}</span>
        </div>
    );
}

export default DateRange;