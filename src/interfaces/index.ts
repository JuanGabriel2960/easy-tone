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
    title: string;
    description: string;
    icon: ImageSourcePropType;
    gradient: ImageSourcePropType;
    message: string;
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