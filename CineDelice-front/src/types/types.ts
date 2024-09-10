export interface ILoggedUser {
    userId: number;
<<<<<<< HEAD
    userPseudo: string;
    userEmail: string;
    accessToken : `${string}.${string}.${string}`;
}

export type IRootContext = {
    user: ILoggedUser | null,
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
}

=======
    userName: string;
    userMail: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }

export interface IRootContext {
    user: ILoggedUser | null;
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
}
>>>>>>> 0c0cc39ee7cfd6b92ffdf6832058fdb1657988bb
