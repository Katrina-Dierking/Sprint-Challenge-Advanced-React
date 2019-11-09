import React from 'react';
import axios from 'axios';

const Player = ({name, country}) => {
    return (
        <section className = "play-info-section">
            <h2>Player's Name:</h2>
            <h4>{ name}</h4>
            <p>Country of Origin: {country}</p>
            <hr></hr>
        </section>
    )
}

class PlayerData extends React.Component {
    state = { 
        players: []
    };

    componentDidMount = () => {
        axios.get("http://localhost:5000/api/players")
        .then (results => 
            {console.log(results, "player data");
        this.setState ({
            players:results.data,
        });
    })
        .catch (error => console.log(error));
    };

    render () {
        return (
            <>
            <section className = "player-info">
                {this.state.players.map (player => (
                    <Player 
                    key = {player.id}
                    name = {player.name}
                    country = {player.country}
                    />
                ))}
            </section>
            </>
        );
    }
}

export default PlayerData; 