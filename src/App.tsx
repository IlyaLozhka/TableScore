import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import style from './App.module.scss';
import { Table } from './component/table/Table';
import { Storage } from "./component/storage/Storage";
import { SortComponent } from "./component/sortComponent/SortComponent";
import { sorter, SORT_TYPE } from './utils/soter/sorter';
import { openStream } from "./utils/openStream/openStream";
import { setLocalStorageData, setLocalStorageType } from "./utils/localStorageControl/localStorageControl";

export interface IPlayer {
    readonly  player: string;
    readonly  score: number;
}

const App: FunctionComponent = () => {

    const [playerData, setPlayerData] = useState<ReadonlyArray<IPlayer>>([]);
    const [selectedSort, setSelectedSort] = useState<SORT_TYPE>(SORT_TYPE.HIGH);
    const [tableData, setTableData] = useState<ReadonlyArray<IPlayer>>([]);

    const changeSort = useCallback((sortType:SORT_TYPE) => {
        setSelectedSort(sortType);
    }, []);

    useEffect(() => {
        openStream(setPlayerData, setSelectedSort);
    }, []);

    useEffect(() => {
        setTableData(sorter(playerData, selectedSort));
    }, [playerData, selectedSort]);

    useEffect(() => {
        setLocalStorageData(tableData);
    }, [tableData]);

    useEffect(() => {
        setLocalStorageType(selectedSort);
    }, [selectedSort]);

    return (
        <div className={style.wrapper}>
            <div className={style.app}>
                <Storage/>
                <SortComponent
                    SORT_TYPE={SORT_TYPE}
                    changeSort={changeSort}
                />
            </div>
            <Table tableData={tableData}/>
        </div>
    );
}

export default App;
