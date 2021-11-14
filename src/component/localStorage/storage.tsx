import React, { FunctionComponent }  from "react";
import style from './storage.module.scss';

export const Storage:FunctionComponent = () => {

    const clearLocalStorage =  () => {
        return localStorage.clear()
    }

    return (
        <div className={style.mainBlock}>
            <div className={style.div}>
                <button onClick={clearLocalStorage}>
                    Очистить LocalStorage
                </button>
            </div>
        </div>
    )
};