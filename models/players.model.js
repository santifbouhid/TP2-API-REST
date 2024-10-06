const players = [
    {id: 1, nombre: 'Lionel Messi', dorsal: '10', convocado: true},
    {id: 2, nombre: 'Emiliano Martinez', dorsal: '23', convocado: false},
    {id: 3, nombre: 'Cristian Romero', dorsal: '13', convocado: true},
    {id: 4, nombre: 'Leandro Paredes', dorsal: '5', convocado: true},
    {id: 5, nombre: 'Paulo Dybala', dorsal: '21', convocado: true},
]

const getPlayers = async () => {
    return players;
}

const postPlayers = async (player) => {
    player.id = players[players.length -1].id + 1;
    players.push(player);
    return player
}

const patchPlayers = (id, data) => {
    const index = players.findIndex((p) => p.id == id);
    players[index] = { ...players[index], ...data };
    return players[index];

}

export default {
    getPlayers,
    postPlayers,
    patchPlayers
}