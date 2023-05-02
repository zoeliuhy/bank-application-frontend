import { Component, OnInit } from '@angular/core';
import { Account } from '../../interface/account';
import { AccountService } from '../../service/account-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
})
export class AccountListComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit() {
    this.accountService.findAll().subscribe((data) => {
      this.accounts = data;
    });
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
