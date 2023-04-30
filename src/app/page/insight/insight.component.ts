import { Component, OnInit } from '@angular/core';
import { Account } from '../../interface/account';
import { AccountService } from '../../service/account-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insight',
  templateUrl: './insight.component.html',
  styleUrls: ['./insight.component.css'],
})
export class InsightPage implements OnInit {
  account: Account = new Account();

  constructor(
    private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router
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

  onBack(): void {
    this.router.navigate(['/accounts']);
  }
}
