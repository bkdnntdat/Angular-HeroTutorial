import { Component } from '@angular/core';
import { UsersSevice } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstore';

  constructor(
    private usersSevice: UsersSevice,
  ){

  }

  ngOnInit(){
    this.usersSevice.getUsers()
        .subscribe(data => {
            console.log(data);
        }
        );   
}
}