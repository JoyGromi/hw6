import { Pipe, PipeTransform } from '@angular/core';
import { IHotel } from '../intesfaces/IHotel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(hotels: IHotel[], searchHotel: string): any {
    if (!searchHotel) {
      return hotels;
    }
    return hotels.filter((hotel: IHotel) => {
      return `${hotel.title.toLowerCase()}${hotel.description.toLowerCase()}`
        .includes(searchHotel.toLowerCase());
    });

  }
}
