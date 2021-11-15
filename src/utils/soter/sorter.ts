import { IPlayer } from "../../App";

export enum SORT_TYPE  {
    LOW = 'LOW',
    HIGH = 'HIGH'
}

export const sorter = (arrayOfPlayers: ReadonlyArray<IPlayer>, type: SORT_TYPE) => {
    return [...arrayOfPlayers].sort((a, b) => {
        if (type === SORT_TYPE.HIGH) {
            return b.score - a.score;
        }
        return a.score - b.score;
    })
};