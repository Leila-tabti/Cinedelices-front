
export interface IMovieCategory {
    name: string
}

export interface IUser {
    id: number;
    email: string;
    pseudo: string;
    password: string;
    avatar: string;
    role: string;
};

export interface IMovieSerie {
    id: number;
    name: string;
    synopsis: string;
    director: string;
    actors: string;
    releaseDate: string;
    picture: string;
    category: IMovieCategory;
};

export interface IRecipeCategory {
    id: number;
    name: string;
};

export interface IRecipe {
    id: number;
    name: string;
    description: string;
    picture: string;
    difficulty: string;
    time: string;
    instruction: string;
    category: IRecipeCategory;
    movieSerie: IMovieSerie;
    user: IUser;
};

export interface IIngredient {
    id: number;
    name: string;
    picture: string;
};

export interface ILoggedUser {
    userId: number;
    userPseudo: string;
    userMail: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }

export type IRootContext = {
    recipes: IRecipe[];
    setArticles: React.Dispatch<React.SetStateAction<IRecipe[]>>;
    user: ILoggedUser | null;
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
}
