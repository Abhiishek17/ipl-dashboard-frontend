import './TeamPage.scss';

import { React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailsCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

import { PieChart } from 'react-minimal-pie-chart';

/* 
* React maps className with Class. Means Class and className is same thing.
*/

export const TeamPage = () => {

    /*
    * useState() is used but if we use useState({}) then, team will be initialized instead of being undefined.
    */
    const [team, setTeam] = useState({ matchList: [] });
    const { teamName } = useParams();
    const moreDetails = `/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`;

    useEffect(
        () => {
            const fetchTeam = async () => {
                const response = await fetch(`http://localhost:8080/teams/${teamName}`);
                const fetchedData = await response.json();
                setTeam(fetchedData);
            };
            fetchTeam();
        }, [teamName]);

    if (!team || !team.teamName) {
        return <h1> Team not found </h1>;
    }
    return (
        <div className="TeamPage">
            <div className="team-name-section">
                <h1 className="team-name"> {team.teamName} </h1>
            </div>
            <div className="win-loss-section">
                Wins / Losses
                <PieChart
                    data={[
                        { title: 'Losses', value: team.totalMatches - team.totalWins, color: '#a34d5d' },
                        { title: 'Wins', value: team.totalWins, color: '#4da735' }
                    ]}
                />

            </div>
            <div className="match-detail-section">
                <h3> Latest Match </h3>
                <MatchDetailCard teamName={teamName} match={team.matchList[0]} />
            </div>
            {team.matchList.slice(1).map(match => <MatchSmallCard key={match.id} teamName={teamName} match={match} />)}
            <div className="more-details">
                <Link to={moreDetails}> More &gt; </Link>
            </div>
        </div>
    );
}
