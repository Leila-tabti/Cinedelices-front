export interface ILoggedUser {
    userId: number;
    userName: string;
    userMail: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }
 
export interface ILoggedUser {
    userId: number;
    userName: string;
    userMail: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }

export interface IRootContext {
    user: ILoggedUser | null;
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
}
