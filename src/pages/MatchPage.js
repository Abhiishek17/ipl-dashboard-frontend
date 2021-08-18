import './MatchPage.scss';

import { React, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MatchDetailCard } from '../components/MatchDetailsCard';
import { YearSelector } from '../components/YearSelector';

export const MatchPage = () => {

    const [matches, setMatches] = useState([]);
    const { teamName, year } = useParams();

    useEffect(
        () => {
            const fetchMatches = async () => {
                const response = await fetch(`http://localhost:8080/teams/${teamName}/matches?year=${year}`);
                const fetchedData = await response.json();
                setMatches(fetchedData);
            };
            fetchMatches();
        }, [teamName, year]);

    return (
        <div className="MatchPage">
            <YearSelector teamName={teamName} />
            <div>
                <h1 className="match-page-heading"> {teamName} matches in {year} </h1>
                {matches.map(match => <MatchDetailCard key={match.id} teamName={teamName} match={match} />)}
            </div>
        </div>
    );
}