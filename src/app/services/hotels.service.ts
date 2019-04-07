import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageEvent } from '@angular/material';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { IHotel } from '../intesfaces/IHotel';


@Injectable({
  providedIn: 'root'
})
export class HotelsService {
  constructor(
    private http: HttpClient
  ) { }

  public getHotels (event: PageEvent): Observable<IHotel[]> {
    // console.log(event);

    const headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'token from local storage');

    const params: HttpParams = new HttpParams(
      {
        fromObject: {
          _limit: String(event.pageSize),
          _page: String(event.pageIndex),
        }
      }
    );
    return this.http.get<IHotel[]>(`${environment.apiUrl}/hotels`, {params, headers});
  }

  public addHotel(hotel: IHotel): Observable<IHotel> {
    return this.http.post<IHotel>(`${environment.apiUrl}/hotels`, hotel);
  }
  public updateHotel(hotel: IHotel): Observable<IHotel> {
    return this.http.patch<IHotel>(`${environment.apiUrl}/hotels/${hotel.id}`, hotel);
  }
  public deleteHotel(id: number): Observable<IHotel> {
    return this.http.delete<IHotel>(`${environment.apiUrl}/hotels/${id}`);
  }
}
