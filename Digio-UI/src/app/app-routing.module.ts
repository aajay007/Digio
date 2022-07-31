import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentVerifyComponent } from './Component/document-verify/document-verify.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'document-verify', component: DocumentVerifyComponent },
  { path: '**', component: LoginComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
