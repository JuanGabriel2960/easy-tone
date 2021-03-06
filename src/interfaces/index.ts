import { ImageSourcePropType } from "react-native";

export interface RenewResp {
    authenticated: Customer;
    token: string;
}

export interface Customer {
    id: number;
    name: string;
    email: string;
    status: boolean;
    google: boolean;
}

export interface Onboarding {
    id: number;
    title: string;
    description: string;
}

export interface HomeCards {
    page: string;
    title: string;
    description: string;
    icon: ImageSourcePropType;
    gradient: ImageSourcePropType;
}

export interface DegreeOptions {
    icon: ImageSourcePropType;
    text: string;
}

export enum ValidDegree {
    Elementary = "elementary",
    Professional = "professional",
    Higher = "higher",
}

export interface TheoryResp {
    ID: string;
    data: Data;
    degree: string;
}

export interface Data {
    title: string;
    content: string;
}

export interface ExerciseResp {
    ID: string;
    exercises: Exercise[];
    degree: string;
}

export interface Exercise {
    name: string;
    content: string;
}

export interface PieceResp {
    ID: string;
    pieces: string[];
    degree: string;
}

export interface SongResp {
    ID: string;
    name: string;
    author: string;
    url: string;
    image: string;
}