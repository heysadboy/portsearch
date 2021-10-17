// This component can be used to select the option from a given list.
// You can see the suggestions as you type.

import { useState, FC } from "react";

interface ISelectPort {
    placeholder: string
}

const SelectPort: FC<ISelectPort> = ({placeholder}) => {
    const [input, setInput] = useState("");
    const [isInputSelected, setIsInputSelected] = useState(false);
    const searchData = ["Afghanistan", "Aland Islands", "Albania"];

    const setSearchInput = (e: any) => {
        setInput(e.target.dataset.value);
        setIsInputSelected(true);
    }

    const searchListOptions = searchData
        .filter((data) => {
            const regex = new RegExp(input, "gi")
            return regex.test(data);
        })
        .map((data) => {
            return <div className="item search-option" key={data} data-value={data} onClick={setSearchInput}>{data}</div>
        });

    const onInputChange = (e: any) => {
        setInput(e.target.value);
        if (e.target.value) {
            setIsInputSelected(false);
        }
    }

    return (
        <div>
            <div className="ui icon transparent input select-input">
                <input type="text" value={input} onChange={onInputChange} placeholder={placeholder} />
                <i className="globe icon"></i>
            </div>
            {
                input && !isInputSelected &&
                <div className="ui relaxed selection list search-list">
                    {searchListOptions}
                </div>
            }
        </div>
    );
}

export default SelectPort;