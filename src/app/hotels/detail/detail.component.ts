import { Component, OnInit } from '@angular/core';
import { HotelsService } from 'src/app/services/hotels.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IHotel } from 'src/app/intesfaces/IHotel';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  hotel$: Observable<IHotel>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private hotelService: HotelsService
  ) { }

  ngOnInit( ) {
    this.hotel$ = this.activatedRoute.paramMap.pipe(
      switchMap((param: ParamMap) => this.hotelService.getHotel(param.get('hotelId')))
    );
  }

}
