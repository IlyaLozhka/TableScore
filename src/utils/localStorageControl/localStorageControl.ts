import { IPlayer } from "../../App";
import { SORT_TYPE } from "../soter/sorter";

export const setLocalStorageData = (data:ReadonlyArray<IPlayer>) => {
   return  localStorage.setItem('localData', JSON.stringify(data));
};

export const setLocalStorageType = (sortType:SORT_TYPE) => {
   return  localStorage.setItem('localSortType', JSON.stringify(sortType));
};

