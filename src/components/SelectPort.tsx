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
    const [input, setInput] = useState("");
    const [isInputSelected, setIsInputSelected] = useState(false);

    const setSearchInput = (e: any) => {
        setInput(e.target.innerText);
        setIsInputSelected(true);
        onSelect(e.target.dataset.value);
    }

    const searchListOptions = ports
        .filter((port) => {
            const regex = new RegExp(input.replace(/[^a-zA-Z\d:]/g, ""), "gi")
            return regex.test(port.name) || regex.test(port.code);
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