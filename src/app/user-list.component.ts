import { OnInit } from '@angular/core';
import { UsersSevice } from './users.service';

export class UserListComponent implements OnInit{
    public user = [];
    constructor(private _userService: UsersSevice){}

    ngOnInit(){
        this._userService.getUsers()
            .subscribe(data => {
                console.log(data);
                this.user = data;
            }
            );
        
    }
}