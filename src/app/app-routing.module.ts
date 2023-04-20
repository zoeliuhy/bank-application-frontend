import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './page/account-list/account-list.component';
import { AccountTransactionListPage } from './page/account-transaction-list/account-transaction-list';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/:id', component: AccountTransactionListPage },
  // { path: 'account_info', component: AccountInfoComponent },
  { path: '', redirectTo: 'accounts', pathMatch: 'full' },
  { path: '**', redirectTo: 'accounts', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
