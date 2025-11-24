
interface Address {
    state: string;
    city: string;
    country: string;
}
interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}
export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount?: string;
}

export interface ButtonProps {
    text: string;
}
export interface PropertyNavProps {
    name: string;
    image: string;
    url: string;
}
export interface PillProps {
    text: string;
}