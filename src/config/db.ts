import mongoose from "mongoose";

class Database {
  private  url: string

    constructor(url: string) {
        this.url = url;
    }

    async connect() {
        try {
            await mongoose.connect(this.url)
        } catch (error) {
            console.log("DB Connnection Fail", error)
        }
    }
}

export default Database;