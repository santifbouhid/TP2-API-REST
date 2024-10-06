import playersService from "../services/players.service.js";

const getPlayers = async (req, res) => {
    const players = await playersService.getPlayers();
    res.send(players);
}

const postPlayers = async (req, res) => {
    /*
    {
        "nombre": "Gerónimo Rulli",
        "dorsal": "12",
        "convocado": true
    }
    */
    const player = req.body;
    const newPlayer = await playersService.postPlayers(player);
    res.send(newPlayer);
}

const patchPlayers = async (req, res) => {
    /*
        http://localhost:8080/players/update/5

        {
            "convocado": false
        }
    */
    const { id } = req.params;
    const data = req.body;
    const playerEdit = await playersService.patchPlayers(id, data);
    res.send(playerEdit);
}

export default {
    getPlayers,
    postPlayers,
    patchPlayers
}