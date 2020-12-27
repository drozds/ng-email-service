import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EmailFull, EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {
  email: EmailFull = {
    from: `${this.authService.username}@angular-email.com`,
    to: '',
    subject: '',
    text: '',
    html: '',
    id: ''
  }
  showModal = false;

  constructor(
    private authService: AuthService,
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit(email: EmailFull) {
    this.emailService.sendEmail(email)
      .subscribe(() => {
        this.showModal = false;
      })
  }
}
