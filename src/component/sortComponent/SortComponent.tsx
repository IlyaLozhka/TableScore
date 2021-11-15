import React, { FunctionComponent } from 'react';
import style from './sortComponent.module.scss';
import { SORT_TYPE } from "../../utils/soter/sorter";

interface IProps {
    readonly changeSort: (value:SORT_TYPE) => void;
    readonly SORT_TYPE: {
       readonly HIGH: string;
        readonly LOW: string;
    };
}

export const SortComponent:FunctionComponent<IProps> = ({changeSort, SORT_TYPE}) => {

    return (
        <div className={style.mainBlock}>
            <label className={style.label}>Фильтр</label>
            <select onChange={event => changeSort(event.target.value as SORT_TYPE)} className={style.select}>
                <option  value={SORT_TYPE.HIGH}>
                    По убыванию
                </option>
                <option value={SORT_TYPE.LOW}>
                    По возрастанию
                </option>
            </select>
        </div>
    )
};