import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailFull } from '../email.service';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {
  email: EmailFull;

  constructor(
    private route: ActivatedRoute
  ) {
    this.email = route.snapshot.data.email;

    route.data.subscribe(({email}) => {
      this.email = email;
    })
  }

  ngOnInit(): void {
  }

}
