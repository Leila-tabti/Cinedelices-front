
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
// Type representing the context used throughout the application
export type IRootContext = {
    recipes: IRecipe[]; // List of recipes
    user: ILoggedUser | null; // Currently logged-in user or null
    setUser: React.Dispatch<React.SetStateAction<ILoggedUser | null>>; // Function to update the user
    setRecipes: React.Dispatch<React.SetStateAction<IRecipe[]>>; // Function to update the list of recipes
    moviesSeries: IMovieSerie[]; // List of movies/series
    setMoviesSeries: React.Dispatch<React.SetStateAction<IMovieSerie[]>>; // Function to update the list of movies/series
    ingredients: IIngredient[]; // List of ingredients
    setIngredients: React.Dispatch<React.SetStateAction<IIngredient[]>>; // Function to update the list of ingredients
    profileData: any; // Profile data (type not specified)
    setProfileData: React.Dispatch<React.SetStateAction<any>>; // Function to update profile data
}



