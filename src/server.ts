import { type Mongoose } from "mongoose";
import Database from "./config/db";
import { DB_URL, port } from "./config/constants";
import app from "./app";

class Server {
    private db: Database;
    private app: typeof app;
    private port: number;
    
    constructor() {
        this.db = new Database(DB_URL);
        this.app = app
        this.port = port
    }

    public async start() {
        await this.db.connect().then((e)=>{
            console.log("DB Connected ")
        });
        this.app.listen(this.port, (error) => {
            if (error) {
                console.log("Error Starting Server", error)
            } else {
                console.log("Server Running at port :", this.port)
            }
        })
    }

}

const server = new Server();
server.start();