import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './page/account-list/account-list.component';
import { AccountTransactionListPage } from './page/account-transaction-list/account-transaction-list';
import { LoginComponent } from './page/login/login.component';
import { InsightPage } from './page/insight/insight.component';
import { UserDetailPage } from './page/user-detail/user-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'accounts', component: AccountListComponent },
  { path: 'accounts/:id/insight', component: InsightPage },
  { path: 'accounts/:id', component: AccountTransactionListPage },
  { path: 'userdetail', component: UserDetailPage },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
