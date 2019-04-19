import { Routes } from '@angular/router';
// import { HotelsComponent } from './hotels/hotels.component';
import { AboutComponent } from './about/about.component';
// import { UsersComponent } from './users/users.component';
import { ContactsComponent } from './contacts/contacts.component';

export const routes: Routes = [
    //  Redirect
    // {
    //     path: '', redirect: hotels, pathMach: 'full',
    // },
    {
        path: 'hotels',
        //component: HotelsComponent,
        loadChildren: './hotels/hotels.module#HotelsModule'
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'users', //component: UsersComponent,
        loadChildren: './users/users.module#UsersModule'
    },
    {
        path: 'contacts', component: ContactsComponent,
    },
]