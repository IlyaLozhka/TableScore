import { IPlayer } from "../../App";

export const openStream:Function = (setFunction:Function) => {
    let source = new EventSource('http://localhost:5000/');
    source.onmessage = (event) => {
        let parseData = JSON.parse(event.data);
        setFunction((data:Array<IPlayer>) => {
            return [...data, parseData]
        });
    }
};