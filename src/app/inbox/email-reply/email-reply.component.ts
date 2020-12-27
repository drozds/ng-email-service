import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { EmailFull, EmailService } from '../email.service';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnChanges {
  @Input() email: EmailFull;
  @Output() emailSubmit = new EventEmitter();
  showModal = false;

  constructor(
    private emailService: EmailService
  ) { }

  ngOnChanges(): void {
    const text = this.email.text.replace(/\n/gi, '\n> ')

    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text: `\n\n\n>------- ${this.email.from} wrote:\n>${text}`
    }
  }

  onSubmit(email: EmailFull) {
    this.emailService.sendEmail(email)
      .subscribe(() => {
        this.showModal = false;
      })
  }

}
