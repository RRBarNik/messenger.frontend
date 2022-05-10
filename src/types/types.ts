export type ChatType = {
    id: string,
    lastMessage: string | null,
    name: string | null,
}
export type MessageType = {
    id: number,
    userId: number,
    body: string,
    dateOfCreation: string,
}
export type UserType = {
    id: string
    nickname: string
    activeStatus: boolean
}

export interface ProfileDataType extends UserType {
    firstname: string | null
    lastname: string | null
    role: string | null
}