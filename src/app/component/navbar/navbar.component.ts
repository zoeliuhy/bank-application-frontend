import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/service/account-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  account: Account = new Account();
  constructor(
    private route: ActivatedRoute,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.getAccountDetail(id);
    }
  }
  getAccountDetail(id: string): void {
    this.accountService.findById(id).subscribe((data) => {
      this.account = data;
    });
  }
}
