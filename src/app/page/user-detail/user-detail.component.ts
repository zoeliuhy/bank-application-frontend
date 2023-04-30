import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service.service';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailPage implements OnInit {
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.findUserById('1').subscribe({
      next: (userFromDB) => {
        this.user = userFromDB;
      },
    });
  }
  onBack(): void {
    this.router.navigate(['/accounts']);
  }
}
