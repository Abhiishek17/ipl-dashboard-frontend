import './YearSelector.scss';

import { React } from 'react';
import { Link } from 'react-router-dom';

export const YearSelector = ({ teamName }) => {
    const startYear = process.env.REACT_APP_DATA_START_YEAR;
    const endYear = process.env.REACT_APP_DATA_END_YEAR;

    let years = [];

    for (let i = startYear; i <= endYear; i++) {
        years.push(i);
    }

    return (
        <div className="YearSelector">
            <h3> Select Year </h3>
            <ul>
                {
                    years.map(year => (
                        <li key={year}>
                            <Link to={`/teams/${teamName}/matches/${year}`}> {year} </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}