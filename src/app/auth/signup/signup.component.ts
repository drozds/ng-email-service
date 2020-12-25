import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { MatchPasswords } from '../validators/match-passwords';
import { UniqueUsername } from '../validators/unique-username';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  authForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-z0-9]+$/)
    ], [this.uniqueUsername.validate]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ]),
    passwordConfirmation: new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)
    ])
  }, {
      validators: [
        this.matchPasswords.validate
      ]
  })

  constructor(
    private matchPasswords: MatchPasswords,
    private uniqueUsername: UniqueUsername,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.signup(this.authForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('/inbox')
      })
  }

}
