export interface ILoggedUser {
    userId: number;
    userPseudo: string;
    userEmail: string;
    accessToken : `${string}.${string}.${string}`;
}

export type IRootContext = {
    user: ILoggedUser | null,
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
}

