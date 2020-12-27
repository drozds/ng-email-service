import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailFull } from '../email.service';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {
  @Input() email: EmailFull;
  @Output() emailSubmit = new EventEmitter();
  emailForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    const { to, from, subject, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required])
    })
  }

  onSubmit() {
    this.emailSubmit.emit(this.emailForm.value)
  }

}
