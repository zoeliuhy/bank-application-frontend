import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InsightPage } from './page/insight/insight.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { CategoryListComponent } from './component/category-list/category-list.component';
import { UserService } from './service/user-service.service';
import { UserDetailComponent } from './page/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountListComponent,
    LoginComponent,
    AccountTransactionListPage,
    NavbarComponent,
    InsightPage,
    TransactionListComponent,
    CategoryListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AccountService, TransactionService, CategoryService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
