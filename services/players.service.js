import playersModel from "../models/players.model.js";

const getPlayers = async () => {
    return playersModel.getPlayers();
}

const postPlayers = async (player) => {
    return playersModel.postPlayers(player);
}

const patchPlayers = async (id, data) => {
    return playersModel.patchPlayers(id, data);
}


export default {
    getPlayers,
    postPlayers,
    patchPlayers
}