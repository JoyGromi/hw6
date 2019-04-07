import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from 'src/app/intesfaces/IHotel';
import { FavoriteService } from './../../services/favorite.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // [x: string]: any;

  @Input() public hotels$: IHotel[];
  @Input() public currentHotel: IHotel;
  @Input() public searchHotel: Text;
  @Output() public hotel: EventEmitter<IHotel> = new EventEmitter();

  // @Output() public hid: EventEmitter<number> = new EventEmitter();
  // public hid: number;

  public constructor(
    private FavoriteService: FavoriteService,
  ) { }

  public ngOnInit() {
    // console.log(this.hotels$);
  }
  public selectHotel(hotel: IHotel): void {
    this.hotel.emit(hotel);
    
  }
  // public selectHotel(id: number): void {
  //   this.hid.emit(id);
  //   console.log(this.hid);
    
  // }
  public addFavorite(hotel: IHotel): void {
    // console.log(hotel);
    this.FavoriteService.addToFavorite(hotel);
  }

}
