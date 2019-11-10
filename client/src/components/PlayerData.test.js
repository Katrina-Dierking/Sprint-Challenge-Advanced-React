const {players} = require ('./PlayerData');

test ('componentDidMount', () => {
    expect(players).not.toBeNull();
});