export interface MoviesObject {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Movie {
    adult?: boolean;
    backdrop_path?: string;
    genre_ids?: number[];
    id?: number;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: Date;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface MovieDetail {
    adult?: boolean;
    backdrop_path?: string;
    belongs_to_collection?: BelongsToCollection;
    budget?: number;
    genres?: Genre[];
    homepage?: string;
    id?: number;
    imdb_id?: string;
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    production_companies?: ProductionCompany[];
    production_countries?: ProductionCountry[];
    release_date?: Date;
    revenue?: number;
    runtime?: number;
    spoken_languages?: SpokenLanguage[];
    status?: string;
    tagline?: string;
    title?: string;
    video?: boolean;
    vote_average?: number;
    vote_count?: number;
}

export interface BelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface MovieCredits {
    id?: number;
    cast?: Cast[];
    crew?: Cast[];
}

export interface Cast {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for_department?: Department;
    name?: string;
    original_name?: string;
    popularity?: number;
    profile_path?: null | string;
    cast_id?: number;
    character?: string;
    credit_id?: string;
    order?: number;
    department?: Department;
    job?: string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}

export interface MoviesByCast {
    cast: MovieCast[];
    crew: MovieCast[];
    id: number;
}

export interface MovieCast {
    adult: boolean;
    backdrop_path: null | string;
    genre_ids: number[];
    id: number;
    original_language: OriginalLanguage;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    popularity: number;
    character?: string;
    credit_id: string;
    order?: number;
    department?: Department;
    job?: string;
}

export enum OriginalLanguage {
    En = "en",
}

export interface PersonDetail {
    page: number;
    results: PersonResult[];
    total_pages: number;
    total_results: number;
}

export interface PersonResult {
    adult?: boolean;
    gender?: number;
    id?: number;
    known_for?: KnownFor[];
    known_for_department?: string;
    name?: string;
    popularity?: number;
    profile_path?: string;
}

export interface KnownFor {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

