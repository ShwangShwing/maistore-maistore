import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.authService.register(
      formData.value.type,
      formData.value.name,
      formData.value.email,
      formData.value.password)
      .then(() => {
        this.router.navigate(['home']);
      });
  }
}
