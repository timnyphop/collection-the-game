// routes/games.js
const gamesRouter = require("express").Router(); // Создали роутер
const{sendAllGames,deleteGame,addGameController }=require('../controllers/games.js')
const {getAllGames}=require('../middlewares/games.js');
// Получим игры из JSON-файла и отправим в ответ на запрос
gamesRouter.post("/games", getAllGames,addGameController)

gamesRouter.get("/games",getAllGames, sendAllGames)
gamesRouter.delete("/games/:id",getAllGames, deleteGame);

module.exports = gamesRouter;