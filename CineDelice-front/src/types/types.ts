export interface IMovieCategory {
    name: string
}

export interface IUser {
    id: number | string;
    email: string;
    pseudo: string;
    password: string;
    avatar: string;
    role: string;
};

export interface IMovieSerie {
    id: string |number;
    name: string;
    synopsis: string;
    director: string;
    actor: string;
    release_date: string;
    picture: string;
    category: IMovieCategory;
    recipes: IRecipe[];
};

export interface IRecipeCategory {
    id: number;
    name: string;
};

export interface IRecipe {
    id: number | string;
    name: string;
    description: string;
    picture: string;
    difficulty: string;
    time: string;
    instruction: string;
    category: IRecipeCategory;
    movieSerie: IMovieSerie;
    user: IUser;
    ingredient: IIngredient[];
};

export interface IIngredient {
    id: number;
    name: string;
    picture: string;
    quantity: string;
};

export interface ILoggedUser {
    userId: number;
    userName: string;
    userMail: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }

export type IRootContext = {
    recipes: IRecipe[];
    setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
    moviesSeries: IMovieSerie[];
    setMoviesSeries: React.Dispatch<React.SetStateAction<IMovieSerie[]>>;
}