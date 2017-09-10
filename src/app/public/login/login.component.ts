import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.authService.login(formData.value.email, formData.value.password)
      .then(() => {
        this.router.navigate(['home']);
      });
  }
}
