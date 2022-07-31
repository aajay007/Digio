import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-document-verify',
  templateUrl: './document-verify.component.html',
  styleUrls: ['./document-verify.component.css']
})
export class DocumentVerifyComponent implements OnInit {
  public aadharNumber = "";
  public modalpopup:boolean = true;
  public checkboxValue: boolean = false;
  public otpValue = "";
  public signingValue = true;
  public removeButton = true;
  constructor( private _toastrService: ToastrService) { }

  ngOnInit(): void {
  }

  signbutton(){
    this.modalpopup = true;
  }

  verify(){
    if(this.aadharNumber.length==12){
      this._toastrService.success('Verifyied Aadhar Number','Success');
    }
    else{
      this._toastrService.error('Enter Valid Aadhar Number','error');
    }

  }

  submit(){
    if(this.checkboxValue==true && this.aadharNumber.length==12){
      if(this.otpValue == "123456"){
        this._toastrService.success('Aadhar Verifyied Successfully','success');
        this.modalpopup= false;
        this.removeButton = false;
        setTimeout(() => {
          this.signingValue = false;
        }, 3000);
      }
      else{
        this._toastrService.error('Please enter valid OTP','error');
      }
    }
    else{
      this._toastrService.error('Submit All value','error');
    }
  }
}
