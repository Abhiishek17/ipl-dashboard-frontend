import './TeamTiles.scss';

import { React } from 'react';
import { Link } from 'react-router-dom';

export const TeamTiles = ({ teamName }) => {
    return (
        <div className="TeamTiles">
            <h1>
                <Link to={`/teams/${teamName}`}>{teamName}</Link>
            </h1>
        </div>
    );
}