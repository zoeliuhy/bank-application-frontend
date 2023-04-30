import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service.service';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  currentYear: number;
  errorMessage: string;

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  user: User = new User();

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.currentYear = new Date().getFullYear();
    this.errorMessage = '';
  }

  ngOnInit() {
    this.userService.findUserById('1').subscribe({
      next: (userFromDB) => {
        this.user = userFromDB;
      },
    });
  }

  onSubmit(e: any) {
    let usernameByUser = this.loginForm.controls.username.value;
    let passwordByUser = this.loginForm.controls.password.value;
    if (!usernameByUser || !passwordByUser) {
      this.errorMessage = 'user input invalid';
      e.preventDefault();
    } else if (
      usernameByUser === this.user.username &&
      passwordByUser === this.user.password
    ) {
      this.errorMessage = '';
      this.router.navigate(['/accounts']);
    }
    this.loginForm.reset();
  }
}
