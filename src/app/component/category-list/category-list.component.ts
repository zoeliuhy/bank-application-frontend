import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interface/category';
import { CategoryService } from 'src/app/service/category-service.service';
import { TransactionService } from 'src/app/service/transaction-service.service';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from 'src/app/interface/transaction';
import { Account } from 'src/app/interface/account';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  account: Account = new Account();
  transactions: Transaction[] = [];
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private transactionService: TransactionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getCategoryListWithAmount(id);
    }
  }

  getCategoryListWithAmount(accountId: string) {
    this.categoryService.getCategoryList().subscribe((data) => {
      this.categories = data;
      for (
        let categoryId = 0;
        categoryId < this.categories.length;
        categoryId++
      ) {
        this.categories[categoryId].categoryAmount = 0;
        this.transactionService
          .getTransactionByAccountByCategory(accountId, categoryId + 1)
          .subscribe((data) => {
            this.transactions = data;

            for (let i = 0; i < this.transactions.length; i++) {
              this.categories[categoryId].categoryAmount +=
                this.transactions[i].amount;
              this.categories[categoryId].categoryFootprint = Math.abs(
                (this.categories[categoryId].categoryAmount *
                  this.categories[categoryId].categoryMultiplier) /
                  1000
              );
            }
            console.log(this.categories);
          });
      }
    });
  }
}
