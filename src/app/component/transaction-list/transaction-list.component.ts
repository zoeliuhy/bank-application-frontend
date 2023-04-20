import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/interface/transaction';
import { TransactionService } from '../../service/transaction-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
})
export class TransactionListComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getTransactionList(id);
    }
  }

  getTransactionList(id: string): void {
    this.transactionService.findAllByAccountId(id).subscribe((data) => {
      this.transactions = data;
    });
  }
}
