import './HomePage.scss';
import { React, useEffect, useState } from 'react';
import { TeamTiles } from '../components/TeamTiles';

export const HomePage = () => {

    const [teams, setTeams] = useState([]);

    useEffect(
        () => {
            const fetchTeams = async () => {
                const response = await fetch(`http://localhost:8080/teams`);
                const fetchedData = await response.json();
                setTeams(fetchedData);
            };
            fetchTeams();
        }, []);

    return (
        <div className="HomePage">
            <h1 className="app-name"> IPL Dashboard </h1>
            <div className="team-grid">
                {teams.map(team => <TeamTiles key={team.id} teamName={team.teamName} />)}
            </div>
        </div>
    );
}