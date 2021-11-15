import React, { FunctionComponent } from 'react';
import style from './table.module.scss';
import { IPlayer } from '../../App';
import { uid } from 'react-uid';

interface IProps {
    readonly tableData: ReadonlyArray<IPlayer>;
}

export const Table:FunctionComponent<IProps> = ({tableData}) => {

    return (
        <div className={style.block}>
            <table className={style.table} >
                <thead>
                <tr>
                    <td>
                        Player
                    </td>
                    <td>
                        Score
                    </td>
                </tr>
                </thead>
                <tbody>
                {
                    tableData.map(({player, score}) => {
                        return <tr key={uid(player)}>
                            <td>
                                {player}
                            </td>
                            <td>
                                {score}
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </table>
        </div>
    )
};