import { IPlayer } from "../../App";

export const openStream:Function = (setDataFunction:Function, setTypeFunction:Function) => {

    if (JSON.parse(String(localStorage.getItem('localData')))) {
        setDataFunction([...JSON.parse(String(localStorage.getItem('localData')))]);
        setTypeFunction(JSON.parse(String(localStorage.getItem('localSortType'))));
    }

    let source = new EventSource('http://localhost:5000/');
    source.onmessage = (event) => {
        let parseData = JSON.parse(event.data);
        setDataFunction((data:ReadonlyArray<IPlayer>) => {
            return [...data, parseData]
        });
    };
};