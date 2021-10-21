// This component can be used to select the option from a given list.
// You can see the suggestions as you type.

import { useState, FC } from "react";
import { IPort } from "../types";

interface ISelectPort {
    ports: IPort[],
    placeholder: string,
    onSelect: (port: string) => void
}

const SelectPort: FC<ISelectPort> = ({ ports, placeholder, onSelect }) => {
    //Controlled component to set the input
    const [input, setInput] = useState("");

    const setSearchInput = (e: any) => {
        setInput(e.target.innerText);
        onSelect(e.target.dataset.value);
    }

    //Render search options as the user types in the list
    const searchListOptions = ports
        .filter((port) => {
            //Returning suggestion based on the match with name and code
            return port.name.toLowerCase().startsWith(input.toLowerCase()) || port.code.toLowerCase().startsWith(input.toLowerCase())
        })
        .map((ports) => {
            return <div className="item search-option" key={ports.code} data-value={ports.code} onClick={setSearchInput} >{`${ports.name} (${ports.code})`}</div>
        });

    const onInputChange = (e: any) => {
        setInput(e.target.value);
    }

    return (
        <div>
            <div className="ui icon transparent input select-input">
                <input type="text" value={input} onChange={onInputChange} placeholder={placeholder} />
                <i className="globe icon"></i>
            </div>
            {
                input &&
                <div className="ui relaxed selection list search-list">
                    {searchListOptions}
                </div>
            }
        </div>
    );
}

export default SelectPort;