import React from 'react'
import {report, labelColor} from '../constant';
import StatCard from './StatCard';

export default function ListOfStat() {
    return (
        <div className="w-11/12 sm:w-auto mt-10 grid sm:grid-cols-2 gap-2">
            {report.casese.map((stat, index) => {
                return (
                    <StatCard stat={stat} key={index}
                     labelColor={labelColor[index]} />
                )
            })}
        </div>
    )
}
