import { DUMMY_USERS } from '../dummy-users';
import { Component, computed, signal } from '@angular/core';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectUser().avatar);

  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectUser.set(DUMMY_USERS[randomIndex]);
  }
}
