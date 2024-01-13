import { Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import {  Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
userService=inject(UsersService)

}
