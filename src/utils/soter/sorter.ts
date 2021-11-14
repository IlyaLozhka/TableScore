import { IPlayer } from "../../App";

export enum SORT_TYPE  {
    LOW = 'LOW',
    HIGH = 'HIGH'
}

export const sorter = (arrayOfPlayers: Array<IPlayer>, type: string) => {
    return arrayOfPlayers.sort((a, b) => {
        if (type === SORT_TYPE.HIGH) {
            return b.score - a.score;
        }
        return a.score - b.score;
    })
};