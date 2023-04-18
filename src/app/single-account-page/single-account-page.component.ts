import { Component, OnInit } from '@angular/core';
import { Account } from '../account';
import { AccountService } from '../account-service.service';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-account-page',
  templateUrl: './single-account-page.component.html',
  styleUrls: ['./single-account-page.component.css'],
})
export class SingleAccountComponent implements OnInit {
  account: Account = new Account();
  transactions: Transaction[] = [];

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getAccountDetail(id);
    }
  }

  getAccountDetail(id: string): void {
    this.accountService.findById(id).subscribe((data) => {
      this.account = data;
    });
    this.transactionService.findAllByAccountId(id).subscribe((data) => {
      this.transactions = data;
    });
  }

  onBack(): void {
    this.router.navigate(['/accounts']);
  }
}
