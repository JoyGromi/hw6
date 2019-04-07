import { Injectable } from '@angular/core';
import { IHotel, IFavorite } from '../intesfaces/IHotel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorite: IFavorite[] = [];

  public addToFavorite(hotel: IHotel) {
    const index: number = this.favorite.findIndex((item: IFavorite) => item.id === hotel.id);
    console.log(index);
    if (index !== -1) {
      const item: IFavorite = this.favorite[index];
      item.amountInFavt = item.amountInFavt + 1;
      return;
    // console.log(item);
    
    }
    this.favorite.push({...hotel, amountInFavt: 1 });

    console.log(this.favorite);
    
  }
  // constructor() { }

  public getFavorite(): IFavorite[] {
    return this.favorite;
  }
  public removeFavorite(id: number): void {
    const index: number = this.favorite.findIndex((item: IFavorite) => item.id === id);
    this.favorite.splice(index, 1);
  }

  // public updateFavorite():
}
