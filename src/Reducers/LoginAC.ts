export type LoginActionsType =
    | ReturnType<typeof changeAuthMe>

export const changeAuthMe = (status: boolean): { type: 'AUTH-ME', status: boolean } => {
    return { type: 'AUTH-ME', status}
}