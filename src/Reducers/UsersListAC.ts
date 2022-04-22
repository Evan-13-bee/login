export type UsersActionsType =
    | ReturnType<typeof UsersLoaded>

type UserType = {
    name: string,
    Number: string
}
export type UsersType = {
    users: UserType[]
}
export const UsersLoaded = (users: UsersType): { type: 'LOAD-USERS', users: UsersType } => {
    return { type: 'LOAD-USERS', users }
}