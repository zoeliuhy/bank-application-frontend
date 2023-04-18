import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountService } from './account-service.service';
import { LoginComponent } from './login/login.component';
import { SingleAccountComponent } from './single-account-page/single-account-page.component';
import { NavbarComponent } from './navbar-component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    LoginComponent,
    SingleAccountComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AccountService],
  bootstrap: [AppComponent],
})
export class AppModule {}
