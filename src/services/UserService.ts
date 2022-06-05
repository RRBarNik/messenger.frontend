import $api from "../http";
import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
    static async fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/Users')
    }

    static async fetchUserProfile(userId: string): Promise<AxiosResponse<IUser>> {
        return $api.get<IUser>(`/User/${userId}`)
    }
}