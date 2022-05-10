import axios from 'axios';
import { ProfileDataType } from '../types/types';

const $api = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:44382/api/1.0/'
});

export const UsersAPI = {
    getUsers() {
        return $api.get(`User`)
            .then(responce => {
                return responce.data
            });
    },

    getProfile(userId: string | undefined) {
        return $api.get(`User/${userId}`)
            .then(responce => {
                return responce.data
            });
    }
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

export const AuthAPI = {
    addUser(profile: ProfileDataType) {
        let nickname = profile.nickname;
        let firstname = profile.firstname;
        let lastname = profile.lastname;
        return $api.post('User', { nickname, firstname, lastname })
            .then(responce => {
                return responce.data
            })
    }
}