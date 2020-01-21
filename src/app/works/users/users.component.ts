import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  arr:Array<any> = [];
  newLogin:string;
  newPassword:string;
  newEmail:string;
  editStatus:boolean;
  editIndex:number;

  constructor() { }

  ngOnInit() {
  }
  addName():void{
    this.arr.push({
      login: this.newLogin,
      password: this.newPassword,
      email: this.newEmail
    });
    this.newLogin = '';
    this.newPassword = '';
    this.newEmail = '';
  }
  deleteUser(index:number): void {
    this.arr.splice(index,1)
  }
  editUser(index:number): void{
    this.newLogin = this.arr[index].login;
    this.newPassword = this.arr[index].password;
    this.newEmail = this.arr[index].email;
    this.editStatus = true;
    this.editIndex = index;
    let addUserButton = document.getElementById('idAddUser');
    addUserButton.style.display = 'none';
    let editUser = document.getElementById('idSavebutton');
    editUser.style.display = 'block';
  }
  saveUser(): void {
    this.arr[this.editIndex].login = this.newLogin;
    this.arr[this.editIndex].password = this.newPassword;
    this.arr[this.editIndex].email = this.newEmail;
    let addUserButton = document.getElementById('idAddUser');
    addUserButton.style.display = 'block';
    let editUser = document.getElementById('idSavebutton');
    editUser.style.display = 'none';
    this.editStatus = false;
  }
}