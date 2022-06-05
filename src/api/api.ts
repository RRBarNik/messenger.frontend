import axios from 'axios';

const $api = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:44382/api/1.0/'
});

export const UsersAPI = {
    getUsers() {
        return $api.get(`Users`)
            .then(responce => {
                return responce.data
            });
    },
}

export const ChatsAPI = {
    getChats() {
        return $api.get('Chat').
            then(response => {
                return response.data
            });
    },
    getMessages(chatId: string) {
        return $api.get(`Chat/${chatId}`)
            .then(responce => {
                return responce.data
            });
    }
}