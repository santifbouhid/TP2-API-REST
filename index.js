import express from "express"
import playerRoutes from "./routes/players.route.js"

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use("/", playerRoutes)



app.listen(PORT, () => console.log('Server running...'));
app.on("Error", (error) => console.log('Ocurrió un error en el servidor.', error));