import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from "../shared/shared.module";
import { RecoverPasswordComponent } from './recover-password/recover-password.component';



@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent,
        LoginComponent,
        RecoverPasswordComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule
    ]
})
export class AuthModule { }
