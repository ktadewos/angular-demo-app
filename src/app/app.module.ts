import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { httpInterceptor } from './interceptor/httpInterceptor';
import { AuthGuardGuard } from './components/auth/authGuard.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { PersonListComponent } from './components/person/person-list/person-list.component';
import { PersonAddComponent } from './components/person/person-add/person-add.component';
import { LoginComponent } from './components/login/login.component';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
    PersonListComponent,
    LoginComponent,
    PersonAddComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: httpInterceptor, multi: true },{provide: LocationStrategy, useClass: HashLocationStrategy}, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
