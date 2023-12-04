import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { AuthComponent } from './auth/auth.component';
import { SharedModule } from "./shared/shared.module";
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';




@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        PagesComponent,
        AuthComponent
    ],
    providers: [
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        PagesRoutingModule,
        AuthRoutingModule
    ]
})
export class AppModule { }
