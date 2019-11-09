import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 5%;
  align-items: center;

  `

  const Wrapper = styled.div`
    font-family: The Wild Hammers;
    width: 400px;
    height: 200px;
    align-items: center;
    text-align: center;
    padding: 15px;
    border: .5px solid black;
    border-radius: 10px;
    margin-bottom: 7%;
    background: slategray;
    box-shadow: 5px 5px 5px black;
    `

const Player = ({name, country}) => {
    return (
        <section>
        <Wrapper>
            <h2>Player's Name:</h2>
            <h4>{ name}</h4>
            <p>Country of Origin: {country}</p>
            <hr></hr>
            </Wrapper>
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
            <Container>
            {/* <section className = "player-info"> */}
                {this.state.players.map (player => (
                    <Player 
                    key = {player.id}
                    name = {player.name}
                    country = {player.country}
                    />
                ))}
                {/* </section> */}
                </Container>
            
            </>
        );
    }
}

export default PlayerData; 