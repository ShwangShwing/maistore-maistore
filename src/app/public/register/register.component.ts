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
  error: string = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    this.error = null;

    this.authService.register(
      formData.value.type,
      formData.value.name,
      formData.value.email,
      formData.value.password)
      .then(() => {
        this.router.navigate(['home']);
      })
      .catch((error) => {
        let errorMessage = 'Unknown error!';

        if (error === 'invalid_user_type') {
          errorMessage = 'Please fill user type';
        } else if (error.message) {
          errorMessage = error.message;
        } else {
          console.log(error);
        }

        this.error = `Error: ${errorMessage}`;
      });
  }
}
