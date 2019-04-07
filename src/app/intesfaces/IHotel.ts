export interface IHotelBase {
    title: string;
    address: string;
    description: string;
    phone: string;
    picture: string;
    photos: string[];
    weather: IWeather;
    profile: IProfile;
    stars: number;
}

export interface IWeather {
    temperature: number;
    wind: number;
    icon: string;
}

export interface IProfile {
    followers: number;
    following: number;
    photo: string;
}

export interface IHotel extends IHotelBase {
    id: number;
}
export interface IFavorite extends IHotel {
    amountInFavt: number;
}