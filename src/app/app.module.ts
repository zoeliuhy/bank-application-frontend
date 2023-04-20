import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountListComponent } from './page/account-list/account-list.component';
import { AccountService } from './service/account-service.service';
import { LoginComponent } from './page/login/login.component';
import { AccountTransactionListPage } from './page/account-transaction-list/account-transaction-list';
import { NavbarComponent } from './component/navbar/navbar.component';
import { TransactionService } from './service/transaction-service.service';
import { CategoryService } from './service/category-service.service';
import { InsightComponent } from './page/insight/insight.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    LoginComponent,
    AccountTransactionListPage,
    NavbarComponent,
    InsightComponent,
    TransactionListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AccountService, TransactionService, CategoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
