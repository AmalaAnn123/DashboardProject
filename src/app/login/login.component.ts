
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{FormGroup, FormControl, Validators} from '@angular/forms';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userList:User[]=[];

constructor(private _router:Router) { }

  ngOnInit() {
  }

  moveToUserhome(){
    this._router.navigate(['/userhome']);
  }
  addUser(frm:any)
  {
    console.log(frm.value);
  }
  
}
