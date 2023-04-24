import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/interface/account';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  account: Account = new Account();
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');
    // console.log(id);
  }
}
