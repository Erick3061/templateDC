
export interface PropsRoute {
    to: string;
    icon?: string;
    name: string;
}

/**
 * Formularios
 */

export interface I_LogIn {
    access: string;
    password: string;
}

export interface I_CreateClient {
    idType: number;
    name: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    address: string;
}

/**
 * ___________________________
 */