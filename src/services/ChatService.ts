import { AxiosResponse } from "axios";
import $api from "../http";
import { IChat } from "../models/IChat";
import { IMessage } from "../models/IMessage";

export default class ChatService {
    static async fetchChats(): Promise<AxiosResponse<IChat[]>> {
        return $api.get<IChat[]>('/Chats')
    }

    static async fetchChatMessages(userId: string): Promise<AxiosResponse<IMessage[]>> {
        return $api.get<IMessage[]>(`/User/${userId}`)
    }
}