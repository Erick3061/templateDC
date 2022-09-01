export interface propsShowModal {
    idModal: string;
    start: 'TL' | 'TR' | 'BL' | 'BR' | 'TC' | 'BC';
    translate?: { x: string, y: string };
}