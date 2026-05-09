import { useState } from 'react';

const COLORS = ['#4f46e5', '#0891b2', '#16a34a', '#dc2626', '#d97706'];

function ScoreBar() {
    const [teams, setTeams] = useState([{ name: 'Lag 1', score: 0 }]);

    function addTeam() {
        if (teams.length >= 5) return;
        setTeams([...teams, { name: `Lag ${teams.length + 1}`, score: 0 }]);
    }

    function updateScore(index, delta) {
        setTeams(teams.map((t, i) =>
            i === index ? { ...t, score: t.score + delta } : t
        ));
    }

    function updateName(index, name) {
        setTeams(teams.map((t, i) => (i === index ? { ...t, name } : t)));
    }

    return (
        <div className="scorebar">
            <div className="scorebar-teams">
                {teams.map((team, i) => (
                    <div key={i} className="scorebar-team" style={{ borderTopColor: COLORS[i] }}>
                        <input
                            className="scorebar-name"
                            value={team.name}
                            onChange={e => updateName(i, e.target.value)}
                        />
                        <div className="scorebar-controls">
                            <button onClick={() => updateScore(i, -100)}>−</button>
                            <span className="scorebar-score">{team.score}</span>
                            <button onClick={() => updateScore(i, 100)}>+</button>
                        </div>
                    </div>
                ))}
            </div>
            {teams.length < 5 && (
                <button className="scorebar-add" onClick={addTeam}>+ Legg til lag</button>
            )}
        </div>
    );
}

export default ScoreBar;