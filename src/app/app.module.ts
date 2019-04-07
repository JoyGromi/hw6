import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
// import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelsComponent } from './hotels/hotels.component';
import { ListComponent } from './hotels/list/list.component';
import { WeatherComponent } from './hotels/weather/weather.component';
import { ProfileComponent } from './hotels/profile/profile.component';
import { FavoriteComponent } from './hotels/favorite/favorite.component';

import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout/';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersComponent } from './users/users.component';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    // HotelListComponent,
    HotelsComponent,
    ListComponent,
    WeatherComponent,
    ProfileComponent,
    FilterPipe,
    FavoriteComponent,
    UsersComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // MaterialModule.forRoot,
    BrowserAnimationsModule,
    MatToolbarModule, 
    MatListModule, MatCardModule, MatInputModule,
    MatButtonModule, MatIconModule, MatBadgeModule, MatPaginatorModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
