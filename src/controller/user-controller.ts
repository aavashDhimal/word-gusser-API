import { Request, Response } from "express";
import { UserService } from "../services/userServices";

export class UserController {
    private userService = new UserService();

    public registerUsers = async (req: Request, res: Response) => {
        console.log(req.body)
        const user = await this.userService.registerUsers(req.body);
        return res.status(201).json(user);
    }

}