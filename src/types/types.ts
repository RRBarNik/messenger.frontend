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