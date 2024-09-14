
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
    id: string;
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
    recipeCategory: IRecipeCategory;
    movieAndSerie: IMovieSerie;
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
    userPseudo: string;
    userMail: string;
    userRole: string;
    accessToken: `${string}.${string}.${string}`; // on précise le format (jwt)
  }

export type IRootContext = {
    recipes: IRecipe[];
    user: ILoggedUser | null;
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>;
    setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>;
    moviesSeries: IMovieSerie[];
    setMoviesSeries: React.Dispatch<React.SetStateAction<IMovieSerie[]>>;
    ingredients: IIngredient[];
    setIngredients: React.Dispatch<React.SetStateAction<IIngredient[]>>;
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
}

