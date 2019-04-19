import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { DetailComponent } from './detail/detail.component';
import { HotelsService } from '../services/hotels.service';
import { ListComponent } from './list/list.component';
import { MatCardModule, MatPaginatorModule,
          MatBadgeModule, MatIconModule,
          MatListModule, MatButtonModule } from '@angular/material';
import { FavoriteComponent } from './favorite/favorite.component';
import { WeatherComponent } from './weather/weather.component';
import { ProfileComponent } from './profile/profile.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '', component: HotelsComponent,
    children: [
      {
        path: '', component: ListComponent
      },
      {
        path: 'detail/:hotelId', component: DetailComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    FilterPipe,
    HotelsComponent, FavoriteComponent, DetailComponent, ListComponent, WeatherComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule, MatPaginatorModule, MatBadgeModule,
    MatButtonModule, MatIconModule, MatListModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ],
  providers: [ HotelsService ]
})
export class HotelsModule { }
