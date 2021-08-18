import './MatchSmallCard.scss';

import { React } from 'react';
import { Link } from 'react-router-dom';

export const MatchSmallCard = ({ teamName, match }) => {
    if (!match) return null;
    
    const opponentTeam = match.team1 === teamName ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${opponentTeam}`;
    const isWinner = teamName === match.winner;
    return (
        <div className={isWinner ? "MatchSmallCard won-card" : "MatchSmallCard lost-card"}>
            <span className="vs"> vs </span>
            <h1>
                <Link to={otherTeamRoute}>{opponentTeam}</Link>
            </h1>
            <p className="match-result"> {match.winner} won by {match.resultMargin} {match.result} </p>
        </div>
    );
}
