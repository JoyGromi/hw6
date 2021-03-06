import { Component, OnInit } from '@angular/core';
import { IHotel } from 'src/app/intesfaces/IHotel';
import { FavoriteService } from './../../services/favorite.service';
import { HotelsService } from '../../services/hotels.service';
import { PageEvent } from '@angular/material';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public page: PageEvent = {
    pageIndex: 1,
    pageSize: 2,
    length: 2
  };
  public isLoading$: Observable<boolean> = of(true);
  public hotels$: Observable<IHotel[]>;
  public currentHotel: IHotel;
  public searchHotel: string;
  public hotel: IHotel;

  public constructor(
    private hotelService: HotelsService,
    private FavoriteService: FavoriteService,
  ) { }

  public ngOnInit() {
    this.getHotels(this.page);
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 1500 );
    this.hotels$.subscribe( (hotel:  IHotel[]) => {
      this.currentHotel = hotel[0];
    });
  }
  // public selectHotel(hotel: IHotel): void {
  //   this.hotel.emit(hotel);
    
  // }
  // // public selectHotel(id: number): void {
  // //   this.hid.emit(id);
  // //   console.log(this.hid);
    
  // // }
  public addFavorite(hotel: IHotel): void {
    // console.log(hotel);
    this.FavoriteService.addToFavorite(hotel);
  }
  public getHotels(event: PageEvent): void {
    this.hotels$ = this.hotelService.getHotels(event);
    // this.hotels$.subscribe( (hotel:  IHotel[]) => {
    //   this.currentHotel = hotel[0];
    // });
  }

  public setHotel(hotel: IHotel): void {
    this.currentHotel = hotel;
  }

  public search(event: Event): void {
    this.searchHotel = (event.target as HTMLInputElement).value;
  }

  public changeHotel(event: PageEvent): void {
    this.page = event;
    this.getHotels(event);
  }

  public editHotel(hotel: IHotel){
    console.log('Edit : ', hotel);
  }
}
