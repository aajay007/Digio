import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginGroup: FormGroup;
  constructor(private _fb: FormBuilder, public _route: Router, private _toastrService: ToastrService,) {
    this.LoginGroup = this._fb.group({
      email: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]))
    })
   }

  ngOnInit(): void {
  }

  public login() {
    if (this.LoginGroup.valid) {
      this._route.navigateByUrl('/document-verify');
      this._toastrService.success('Login Successful',"success");
    }
    else{
      if(this.LoginGroup.value.email == ""){
      this._toastrService.error('Login Id is required','Error');
      }
      else{
        this._toastrService.error('Enter valid Email Id','Error');
      }
    }
  }
}
