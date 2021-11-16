import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private userService:UserService, private snack:MatSnackBar) { }

  public user={
    username:'',
    password:'',
    firstname:'',
    lastname:'',
    email:'',
    phone:'',
  }

  ngOnInit(): void {
  }


  formSubmit(){

    console.log(this.user);
    if(this.user.username==''||this.user.username==null){
      this.snack.open("User Name is required!!", 'ok', {
        duration:4000,
      });
      return;
    }

    //adduser

    this.userService.addUser(this.user).subscribe(

      (data)=>{
        //success
        console.log(data);
        this.snack.open("Data is collected!", '', {
          duration:400,
        })

      },

      (error)=>{
        //error
        console.log(error);
        this.snack.open(error.error.text, 'ok', {
          duration:4000,
        })
      }
      
    );


  }



}
