import { Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    {
        path:'', component:UsersComponent
    },
    {
        path:'user/:id', component:UserComponent
    }
];
