import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import style from './App.module.scss';
import { Table } from './component/table/Tabel';
import { Storage } from "./component/localStorage/storage";
import { SortComponent } from "./component/sortComponent/sortComponent";
import { sorter, SORT_TYPE } from './utils/soter/sorter';
import { openStream } from "./utils/openStream/openStream";

export interface IPlayer {
    player: string;
    score: number;
}

const App: FunctionComponent = () => {

    const [playerData, setPlayerData] = useState<IPlayer[]>([]);
    const [selectedSort, setSelectedSort] = useState<string>(SORT_TYPE.HIGH);
    const [tableData, setTableData] = useState<IPlayer[]>([]);

    const changeSort = useCallback((sortType:string) => {
        setSelectedSort(sortType);
        sorter(tableData, sortType);
    }, [tableData]);

    useEffect(() => {

        if (JSON.parse(localStorage.getItem('localData') as string)) {
            setPlayerData([...JSON.parse(localStorage.getItem('localData') as string)]);
            setSelectedSort(JSON.parse(localStorage.getItem('localSortType') as string));
        }

        openStream(setPlayerData);

    }, []);

    useEffect(() => {
        setTableData(sorter(playerData, selectedSort));
    }, [playerData, selectedSort]);

    useEffect(() => {
        localStorage.setItem('localData', JSON.stringify(tableData))
    }, [tableData]);

    useEffect(() => {
        localStorage.setItem('localSortType', JSON.stringify(selectedSort))
    }, [selectedSort])

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
