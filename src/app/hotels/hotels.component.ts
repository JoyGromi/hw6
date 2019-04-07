import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { Observable, of } from 'rxjs';
import { HotelsService } from '../services/hotels.service';
import { IHotel } from '../intesfaces/IHotel';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
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
  ) { }

  public ngOnInit(): void {
    this.getHotels(this.page);
    setTimeout(() => {
      this.isLoading$ = of(false);
    }, 1500 );
  }

  public getHotels(event: PageEvent): void {
    this.hotels$ = this.hotelService.getHotels(event);
    this.hotels$.subscribe( (hotel:  IHotel[]) => {
      this.currentHotel = hotel[0];
    });
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
}