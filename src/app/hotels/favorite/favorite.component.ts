import { Component, OnInit } from '@angular/core';
import { IFavorite } from 'src/app/intesfaces/IHotel';
import { FavoriteService } from './../../services/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  public favorite: IFavorite[] = [];

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {
    this.favorite = this.favoriteService.getFavorite();
  }

  public removeFavorite(id: number): void {
    this.favoriteService.removeFavorite(id);
  }
}
