import express, { Application } from "express"
import restaurantRoute from './routes/restaurant'
import menuRoute from './routes/menu'
import cors from 'cors';

const app: Application = express();
const port = 3001;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get("/", (req, res) => res.send("LINE MAN Wongnai Frontend Assignment"));
app.use("/api",restaurantRoute);
app.use("/api",menuRoute);


try {
	app.listen(port, (): void => {
		console.log(`Connected successfully on port ${port}`);
	});
} catch (error) {
	console.error(`Error occured: ${(error as Error).message}`);
}
