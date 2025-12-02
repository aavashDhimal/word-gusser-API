import { UserModel, IUser } from "../model/user-model";

export class UserService {
    async registerUsers(data: IUser): Promise<IUser> {
        const user = new UserModel(data);
        return user.save()
    }
}

